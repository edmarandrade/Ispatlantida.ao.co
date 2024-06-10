import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";


export default function Document() {
  return (
    <Html lang="pt">
      <Head>

          <link href="img/favicon.ico" rel="icon" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
          <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
          <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* JavaScript Libraries */}
        <Script src="https://code.jquery.com/jquery-3.4.1.min.js"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></Script>
        <Script src="lib/wow/wow.min.js"></Script>
        <Script src="lib/easing/easing.min.js"></Script>
        <Script src="lib/waypoints/waypoints.min.js"></Script>
        <Script src="lib/counterup/counterup.min.js"></Script>
        <Script src="lib/owlcarousel/owl.carousel.min.js"></Script>
        <Script src="lib/lightbox/js/lightbox.min.js"></Script>
        <Script src="js/main.js"></Script>
        {/* Template Javascript */}

      </body>
    </Html>
  )
}
