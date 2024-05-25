import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link
            href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400&family=Inter:wght@400;500&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-light text-primary transition-colors dark:bg-gradient-to-t dark:bg-dark dark:from-dark dark:to-secondary/[2%] dark:text-light">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
