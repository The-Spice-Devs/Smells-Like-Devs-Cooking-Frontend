import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap" rel="stylesheet"/>
        </Head>
        <body className="bg-yellow-50">
          <Main/>
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument