import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Quicksand } from "@next/font/google";
import { useEffect } from "react";

import { StoreProvider } from "@/context/Store";
import { useRouter } from "next/router";

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

  const router = useRouter();

  return (
    <StoreProvider>
      <main className={`${quicksand.variable} font-sans`}>
        <Component key={router.asPath} {...pageProps} />
      </main>
    </StoreProvider>
  );
}
