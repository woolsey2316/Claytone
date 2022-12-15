/** * Bootstrap your app */
import Promise from 'bluebird';
import mongoose from 'mongoose';

import config from './config';
import Express from './config/express';
/** * Promisify All The Mongoose * @param mongoose */
Promise.promisifyAll(mongoose);
/** * Connecting Mongoose
 * * @param uris * @param options
 *
 */
mongoose.connect(config.db, {
  keepAlive: true,
  socketTimeoutMS: 0,
});
/** * Throw error when not able to connect to database */
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${config.db}`);
});
/** * Initialize Express */
const ExpressServer = new Express();
ExpressServer.init();
/** * Listen to port */
ExpressServer.httpServer.listen(process.env.PORT || config.port, () => {
  // eslint-disable-next-line no-console
  console.log(`? Server ready at ${config.port}`);
  // eslint-disable-next-line no-console
  console.log(
    `? Server ready at http://localhost:${config.port}${ExpressServer.server.graphqlPath}`
  );
  // eslint-disable-next-line no-console
  console.log(
    `? Subscriptions ready at ws://localhost:${config.port}${ExpressServer.server.subscriptionsPath}`
  );
});
