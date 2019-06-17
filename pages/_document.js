import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';




class MyDocument extends Document {
  

  render() {
    
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
       <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link href="https://fonts.googleapis.com/css?family=B612:700|Lora:400" rel="stylesheet" />
       
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}



export default MyDocument;
