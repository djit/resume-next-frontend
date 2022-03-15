import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head>
        <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'></link>
        <link rel="shortcut icon" type="image/x-icon" href="/assets/img/favicon.ico"/>

        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-QHJ79SGB40" strategy="afterInteractive"></Script>
        <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-QHJ79SGB40');
        `}
        </Script>
      </Head>
      <body className="bg-gray-100 antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}