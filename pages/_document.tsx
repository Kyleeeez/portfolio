import React from "react";
import Document, {Html, Head, Main, NextScript} from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700&family=Montserrat:wght@500&display=swap"
                        rel="stylesheet"/>
                </Head>
                <body className="bg-light dark:bg-primary text-primary dark:text-light transition-colors">
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        );
    }
}

export default MyDocument;
