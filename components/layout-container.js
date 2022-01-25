import {Switch} from "./switch/switch";
import {motion} from "framer-motion";
import {useTheme} from "next-themes";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Link from "next/link";

export const LayoutContainer = ({children}) => {

    const router = useRouter();

    const {theme, setTheme, resolvedTheme} = useTheme();

    const [isMounted, setIsMounted] = useState(false);

    const [currScroll, setCurrScroll] = useState(0);

    const switchTheme = () => {
        setTheme(resolvedTheme === "light" ? "dark" : "light");
    };

    useEffect(() => {
        setIsMounted(true);

        window.addEventListener('scroll', updateWindowScroll)

    }, []);

    const updateWindowScroll = () => {
        setCurrScroll(window.scrollY);
    }

    if (!isMounted) return null;

    return (


        <main className={"font-body font-extralight tracking-wide pb-5"}>


            <div className={"z-10 backdrop-blur sticky top-0 p-5 bg-white/80 dark:bg-slate-800/60"}>

                <div className="container max-w-screen-xl flex justify-between items-center pl-3">
                    <Link href="/">
                        <a aria-label="Francesco Palomba's logo">

                            <div className="flex items-center h-10 relative">
                                <svg style={{minWidth: 30}} width="30" height="40" viewBox="0 0 39 47"
                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className={"fill-current text-dark-800 dark:text-white"}
                                          attributeName="fill"
                                          d="M0 47H7.8V41.0162V23.5C7.8 14.8475 14.7844 7.83333 23.4 7.83333H39V5.98383V0H23.4C10.4765 0 0 10.5213 0 23.5V47Z"/>
                                    <path className={"fill-current text-dark-800 dark:text-white"}
                                          attributeName="fill"
                                          d="M39 15.6667V23.5C39 32.1525 32.0156 39.1667 23.4 39.1667V47H15.6V45.6628V37.0707V31.3333H23.4C27.7078 31.3333 31.2 27.8262 31.2 23.5H23.4H15.6C15.6 19.1738 19.0922 15.6667 23.4 15.6667H36.913H39Z"/>
                                </svg>
                                <motion.div className="pl-3 text-xl hidden md:block absolute left-7"
                                            style={{lineHeight: 1.15}}
                                            transition={{duration: 0.15}}
                                            animate={currScroll > 230 ? {y: 0, opacity: 1} : {y: 3, opacity: 0}}>
                                    Francesco<br/>Palomba
                                </motion.div>
                            </div>
                        </a>


                    </Link>


                    <div className="relative">

                        <div className={"flex text-lg justify-center space-x-10"}>
                            <button className="opacity-50 hover:opacity-100"
                               onClick={() => document.getElementById("careerSection").scrollIntoView({behavior: "smooth"})}>

                                Career</button>
                            <button className="opacity-50 hover:opacity-100"
                               onClick={() => document.getElementById("chatSection").scrollIntoView({behavior: "smooth"})}>

                                Contact</button>


                        </div>
                    </div>

                    <Switch switchTheme={switchTheme} theme={resolvedTheme}/>
                </div>
            </div>


            <div
                className="from-gray-100/0 to-gray-100/75 dark:from-slate-900/0 dark:to-slate-400/25 bg-gradient-to-tr absolute top-[400px] left-[10%] opacity-70 w-[181px] h-[181px] rounded-full -z-1"/>

            <div
                className="from-gray-100/0 to-gray-100/75 dark:from-slate-900/0 dark:to-slate-400/25 bg-gradient-to-tl absolute top-[800px] right-[20%] opacity-70 w-[180px] h-[180px] rounded-full -z-1"/>

            <div
                className="from-gray-100/0 to-gray-100/75 dark:from-slate-900/0 dark:to-slate-400/25 bg-gradient-to-tr absolute top-[1400px] left-[10%] opacity-70 w-[140px] h-[140px] rounded-full -z-1"/>

            <div
                className="from-gray-100/0 to-gray-100/75 dark:from-slate-900/0 dark:to-slate-400/25 bg-gradient-to-tl absolute top-[2000px] right-[20%] opacity-70 w-[200px] h-[200px] rounded-full -z-1"/>


            <div className={"px-3 md:px-5"}>
                <motion.div className="container max-w-screen-xl" key={router.route} initial={false}
                            animate={{opacity: 1}}>
                    {children}
                </motion.div>
            </div>


        </main>

    )

}
