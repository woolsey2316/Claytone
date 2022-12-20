import Head from "next/head";
import React from "react";

import Header from "@/components/Header";



interface Props {
  pageTitle?: string;
  children: JSX.Element | JSX.Element[]
}
const Layout: React.FC<Props> = ({ children, pageTitle }) => {
  return (
    <React.Fragment>
      {pageTitle && (
        <Head>
          <title className="text-5xl">{pageTitle}</title>
        </Head>
      )}
      <Header/>
      <div className="container mx-auto">
        <main className="">{children}</main>
      </div>
    </React.Fragment>
  );
};
export default Layout;
