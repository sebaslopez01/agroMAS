import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

import { StoreProvider } from "@/context/Store";
import { useRouter } from "next/router";

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
      <Component key={router.asPath} {...pageProps} />
    </StoreProvider>
  );
}
