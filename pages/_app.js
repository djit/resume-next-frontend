import '../styles/globals.css'
import Script from 'next/script'


function MyApp({ Component, pageProps }) {
  const env = process.env.NODE_ENV

  return (
    <>
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      { env === 'production' ?
      <>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-QHJ79SGB40" strategy="afterInteractive"></Script>
        <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-QHJ79SGB40');
        `}
        </Script>
      </>
      : "" }

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
