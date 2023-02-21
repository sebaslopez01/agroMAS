import Head from "next/head";
import { ReactNode } from "react";

import Footer from "./navigation/Footer";
import NavBarMarket from "./navigation/NavBarMarket";

interface LayoutMarketProps {
  title?: string;
  description?: string;
  children: ReactNode;
}

export default function LayoutMarket({
  title = "AgroMAS",
  description = "Marketplace AgroMAS",
  children,
}: LayoutMarketProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <NavBarMarket />
      <main>{children}</main>
      <Footer />
    </>
  );
}
