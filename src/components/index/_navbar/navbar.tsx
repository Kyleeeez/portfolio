import Link from "next/link";
import {motion} from "framer-motion";
import {Switch} from "../../switch/switch";
import {useRouter} from "next/router";
import {useTheme} from "next-themes";
import {useEffect, useState} from "react";

export const Navbar = () => {

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

    return (
        <div className={"z-10 absolute top-0 left-0 w-full backdrop-blur bg-light dark:bg-primary/60 transition-colors"}>

            <div className="container flex justify-between items-center py-5">
                <Link href="/" legacyBehavior>
                    <a aria-label="Francesco Palomba's logo">

                        <div className="flex items-center h-10 relative">

                            <SVGLogo />

                            <motion.div className="pl-3 text-xl hidden md:block absolute left-7"
                                        style={{lineHeight: 1.15}}
                                        transition={{duration: 0.15}}
                                        initial={{opacity: 0}}
                                        animate={currScroll > 230 ? {y: 0, opacity: 1} : {y: 3, opacity: 0}}>
                                Francesco<br/>Palomba
                            </motion.div>
                        </div>
                    </a>


                </Link>


                <div className="relative">

                    <div className={"flex text-lg justify-center space-x-10"}>

                        <button className=" opacity-50 hover:opacity-100"
                            onClick={() => document.getElementById("careerSection").scrollIntoView({behavior: "smooth"})}
                        >
                            <span className="text-primary dark:text-white">Career</span>
                        </button>

                        <button className=" opacity-50 hover:opacity-100"
                            onClick={() => document.getElementById("chatSection").scrollIntoView({behavior: "smooth"})}
                        >
                            <span className="text-primary dark:text-white">Contact</span>
                        </button>

                    </div>

                </div>

                <div/>
                <Switch switchTheme={switchTheme} theme={resolvedTheme}/>
            </div>
        </div>
    )
}


const SVGLogo = () => (
    <svg style={{minWidth: 30}} width="30" height="40" viewBox="0 0 39 47"
         fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className={"fill-current text-primary dark:text-white"}
              attributeName="fill"
              d="M0 47H7.8V41.0162V23.5C7.8 14.8475 14.7844 7.83333 23.4 7.83333H39V5.98383V0H23.4C10.4765 0 0 10.5213 0 23.5V47Z"/>
        <path className={"fill-current text-primary dark:text-white"}
              attributeName="fill"
              d="M39 15.6667V23.5C39 32.1525 32.0156 39.1667 23.4 39.1667V47H15.6V45.6628V37.0707V31.3333H23.4C27.7078 31.3333 31.2 27.8262 31.2 23.5H23.4H15.6C15.6 19.1738 19.0922 15.6667 23.4 15.6667H36.913H39Z"/>
    </svg>
)