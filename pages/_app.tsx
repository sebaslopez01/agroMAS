import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Quicksand, DM_Serif_Display } from "@next/font/google";
import { SessionProvider } from "next-auth/react";
import { trpc } from "@/client/utils/trpc";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
});

function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <main className={`${quicksand.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
}

export default trpc.withTRPC(App);
