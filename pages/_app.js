import "../styles/globals.css";
import "../public/css/bootstrap.min.css";
import "../public/css/style.css";
import "../public/lib/animate/animate.css";
import "../public/lib/animate/animate.min.css";
import "../public/lib/lightbox/css/lightbox.css";
import "../public/lib/lightbox/css/lightbox.min.css"; 
import Footer from "../components/Footer/Footer";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
    <meta charSet="utf-8" />
    <meta content name="keywords" />
    <meta content name="description" />
    <title>Instituto Superior Politécnico Atlântida</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    </Head>

      <Component {...pageProps} />
      <Footer />
    </>
  )
  
}
