import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <link rel="icon" href="/agro-icon-tab.ico" type="image/x-icon" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kumbh+Sans&family=Old+Standard+TT&family=Quicksand:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
