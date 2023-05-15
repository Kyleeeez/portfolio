import "../styles/index.scss";
import "../styles/globals.scss";

import {ThemeProvider} from "next-themes";
import Head from "next/head";

function MyApp({Component, pageProps}) {

    return (
        <>
            <Head>
                <title>Francesco Palomba's Portfolio</title>
                <meta name="description" content="Senior frontend developer, UI designer"/>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            </Head>

            <ThemeProvider attribute="class" defaultTheme='dark' enableSystem={true}>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}

export default MyApp;
