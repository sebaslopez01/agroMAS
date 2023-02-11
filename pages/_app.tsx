import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Quicksand } from "@next/font/google";
import { useEffect } from "react";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

const importElements = async () => {
  (await import("tw-elements")).default;
};

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    importElements();
  }, []);

  return (
    <main className={`${quicksand.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
