import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head />
                <body className="bg-white text-black dark:bg-gray-900 dark:text-white transition-colors">
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
