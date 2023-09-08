import Head from "next/head";
import React from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

interface Props {
  pageTitle?: string;
  children: JSX.Element | JSX.Element[]
}
const Layout: React.FC<Props> = ({ children, pageTitle }) => {
  return (
    <div>
      {pageTitle && (
        <Head>
          <title className="text-5xl">{pageTitle}</title>
        </Head>
      )}
      <Header/>
      <main className="px-2 sm:px-0">{children}</main>
      <Footer/>
    </div>
  );
};
export default Layout;
