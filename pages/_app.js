import "../styles/index.scss";
import "../styles/globals.scss";

import {ThemeProvider} from "next-themes";
import Head from "next/head";
import {LayoutContainer} from "../components/layout-container";
import {AnimateSharedLayout} from "framer-motion";

function MyApp({Component, pageProps, router}) {
    return (
        <>
            <Head>
                <title>Francesco Palomba's Portfolio</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <ThemeProvider attribute="class" defaultTheme="system">
                <AnimateSharedLayout>
                    <LayoutContainer>
                        <Component {...pageProps} />
                    </LayoutContainer>
                </AnimateSharedLayout>
            </ThemeProvider>
        </>
    );
}

export default MyApp;
