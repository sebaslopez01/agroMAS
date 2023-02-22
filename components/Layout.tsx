import { ReactNode } from "react";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import NavBar from "./navigation/NavBar";
import Footer from "./navigation/Footer";
import { FullUser } from "@/lib/types";

interface LayoutProps {
  title?: string;
  description?: string;
  user: FullUser;
  children: ReactNode;
}

export default function Layout({
  title = "AgroMAS",
  description = "Página de AgroMAS",
  user,
  children,
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <ToastContainer position="bottom-center" limit={1} />
      <NavBar user={user} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
