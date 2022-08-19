import "../styles/globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "../context/sessionProvider";
import Header from "../components/header";
import Footer from "../components/footer";

import Head from "next/head";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <Head>
        <title>Library</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <Component {...pageProps} />
      <Footer />
    </SessionProvider>
  );
}

export default MyApp;
