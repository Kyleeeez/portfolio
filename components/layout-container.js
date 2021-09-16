import {Switch} from "./switch/switch";
import {AnimateSharedLayout, motion} from "framer-motion";
import {useTheme} from "next-themes";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Link from "next/link";

export const LayoutContainer = ({children}) => {

    const router = useRouter();

    const {theme, setTheme, resolvedTheme} = useTheme();

    console.log(theme, resolvedTheme);

    const [isMounted, setIsMounted] = useState(false);

    const [windowInnerWidth, setWindowInnerWidth] = useState();

    const switchTheme = () => {
        setTheme(resolvedTheme === "light" ? "dark" : "light");
    };

    useEffect(() => {
        setIsMounted(true);
        window.addEventListener('resize', updateWindowDimensions);
        setWindowInnerWidth(window.innerWidth);
    }, []);

    const updateWindowDimensions = () => {
        setWindowInnerWidth(window.innerWidth);
    }

    if (!isMounted) return null;

    return (


        <main className={"container md:flex px-5 py-10 font-body"}>

            <div className={"flex justify-between"}>

                <Link href="/">
                    <a>
                        <svg className={"md:sticky top-10"} style={{minWidth: 30}} width="30" height="40"
                             viewBox="0 0 39 47"
                             fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className={"fill-current text-dark-800 dark:text-white transition-colors"}
                                  attributeName="fill"
                                  d="M0 47H7.8V41.0162V23.5C7.8 14.8475 14.7844 7.83333 23.4 7.83333H39V5.98383V0H23.4C10.4765 0 0 10.5213 0 23.5V47Z"/>
                            <path className={"fill-current text-dark-800 dark:text-white transition-colors"}
                                  attributeName="fill"
                                  d="M39 15.6667V23.5C39 32.1525 32.0156 39.1667 23.4 39.1667V47H15.6V45.6628V37.0707V31.3333H23.4C27.7078 31.3333 31.2 27.8262 31.2 23.5H23.4H15.6C15.6 19.1738 19.0922 15.6667 23.4 15.6667H36.913H39Z"/>
                        </svg>
                    </a>
                </Link>

                {
                    windowInnerWidth < 768 &&
                    <Switch switchTheme={switchTheme} theme={resolvedTheme}/>

                }
            </div>

            <div className={"flex-grow md:px-5"}>
                <motion.div key={router.route} initial={false} animate={{opacity: 1}}>
                    {children}
                </motion.div>
            </div>


            {
                windowInnerWidth >= 768 &&
                <Switch switchTheme={switchTheme} theme={resolvedTheme}/>
            }
        </main>

    )

}
