import React from "react";
import Document, {Html, Head, Main, NextScript} from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;700&family=Montserrat:wght@300;500;600&display=swap"
                        rel="stylesheet"/>
                </Head>
                <body className="bg-white dark:bg-gradient-to-br from-slate-900 to-slate-600 text-slate-800 dark:text-white transition-colors">
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        );
    }
}

export default MyDocument;
