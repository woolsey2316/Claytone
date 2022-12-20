import { InMemoryCache } from 'apollo-cache-inmemory';
/** * Apollo Client Configuration */
import { ApolloClient } from 'apollo-client';
import { ApolloLink, concat, split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import fetch from 'isomorphic-unfetch';
import Cookies from 'js-cookie';
import withApollo from 'next-with-apollo';

import { SERVER, WEB_SOCKET_LINK } from './config';
interface Definintion {
  kind: string;
  operation?: string;
}
let authToken: string | null = null;
const httpLink = new HttpLink({ fetch, uri: SERVER });
const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({ headers: { authorization: authToken || null } }); // Add onto payload for WebSocket authentication
  (operation as any & { authToken: string | undefined }).authToken = authToken;
  return forward(operation);
});
const webSocketLink: any = process.browser
  ? new WebSocketLink({ uri: WEB_SOCKET_LINK, options: { reconnect: true } })
  : null;
/** * Set Token * @param token */ export const setToken = async (
  token: string
) => {
  try {
    authToken = token ? `Bearer ${token}` : null;
    Cookies.set('token', authToken, { expires: 7 });
  } catch (error) {
    console.log(error);
  }
};
/** * Set Token In Request * @param token */ export const setTokenInRequest =
  async (token: string) => {
    try {
      authToken = token ? token : null;
      return authToken;
    } catch (error) {
      console.log(error);
    }
  };
/** * Destroy Token * For logout purpose */ export const destroyToken =
  async () => {
    try {
      Cookies.remove('token');
      authToken = null;
    } catch (error) {
      console.log(error);
    }
  };
const link = process.browser
  ? split(
      ({ query }) => {
        const { kind, operation }: Definintion = getMainDefinition(query);
        return kind === 'OperationDefinition' && operation === 'subscription';
      },
      webSocketLink,
      httpLink
    )
  : httpLink;
export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      link: concat(authMiddleware, link),
      cache: new InMemoryCache().restore(initialState || {}),
    })
);
