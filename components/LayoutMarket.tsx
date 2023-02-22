import Head from "next/head";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FullUser } from "@/lib/types";
import Footer from "./navigation/Footer";
import NavBarMarket from "./navigation/NavBarMarket";

interface LayoutMarketProps {
  title?: string;
  description?: string;
  user: FullUser;
  children: ReactNode;
}

export default function LayoutMarket({
  title = "AgroMAS",
  description = "Marketplace AgroMAS",
  user,
  children,
}: LayoutMarketProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <ToastContainer position="bottom-center" limit={1} />
      <NavBarMarket user={user} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
