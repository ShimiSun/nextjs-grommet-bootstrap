import React from 'react';

import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="theme-color" content="#000000" />
          <script src="https://js.stripe.com/v3/" />
          <link
            rel="icon"
            type="image/x-icon"
            href="/static/imgs/tav-header-symbol.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
