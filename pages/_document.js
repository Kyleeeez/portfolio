import React from "react";
import Document, {Html, Head, Main, NextScript} from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;700&family=Karla:wght@300;500&display=swap"
                          rel="stylesheet"/>
                </Head>
                <body className="font-extralight bg-white dark:bg-gray-800 text-gray-800 dark:text-white transition-colors overflow-x-hidden">
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}

export default MyDocument;
