import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'></link>
      </Head>
      <body className="bg-gray-100 antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}