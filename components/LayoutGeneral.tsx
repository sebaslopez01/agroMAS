import Head from "next/head";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FullUser } from "@/lib/types";
import Footer from "./navigation/Footer";
import NavbarGeneral from "./navigation/NavbarGeneral";

interface LayoutGeneralProps {
  title?: string;
  description?: string;
  user: FullUser;
  pageName: string;
  children: ReactNode;
}

export default function LayoutGeneral({
  title = "AgroMAS",
  description = "Marketplace AgroMAS",
  user,
  pageName,
  children,
}: LayoutGeneralProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <ToastContainer position="bottom-center" limit={1} />
      <NavbarGeneral user={user} pageName={pageName} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
