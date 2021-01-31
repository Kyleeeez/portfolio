import Head from 'next/head'
import {useTheme} from "next-themes";
import {useEffect, useState} from "react";
import {CareerSection} from "../components/career-section/career-section";
import {SkillsAnimation} from "../components/skills-animation/skills-animations";
import {Switch} from "../components/switch/switch";

export default function Home() {

    const {theme, setTheme} = useTheme();
    const [isMounted, setIsMounted] = useState(false);

    const [windowInnerWidth, setWindowInnerWidth] = useState();

    const switchTheme = () => {
        if (isMounted) {
            setTheme(theme === "light" ? "dark" : "light");
        }
    };

    useEffect(() => {
        window.addEventListener('resize', updateWindowDimensions);
        setWindowInnerWidth(window.innerWidth);
    }, []);

    const updateWindowDimensions = () => {
        setWindowInnerWidth(window.innerWidth);
    }

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <>
            <Head>
                <title>Francesco Palomba's Portfolio</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={"container md:flex px-5 py-10 font-body"}>

                <div className={"flex justify-between"}>

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


                    {
                        windowInnerWidth < 768 &&
                        <Switch switchTheme={switchTheme} theme={theme} />

                    }
                </div>


                <div className={"flex-grow md:px-5"}>

                    <div className={"flex justify-between items-center"}>
                        <Heading/>


                        {
                            windowInnerWidth >= 768 &&
                            <SkillsAnimation/>
                        }

                    </div>

                    <div className={"relative py-10"} id={"career"}>

                        <div className={"inline-block text-yellow-300 tracking-wide text-xl font-bold font-display"}>
                            <span className={"opacity-50"}>#</span>Career
                        </div>

                        <CareerSection />

                    </div>

                </div>

                {
                    windowInnerWidth >= 768 &&
                    <Switch switchTheme={switchTheme} theme={theme} />

                }


            </main>

        </>
    )
}


const Heading = () => (

    <div className={"md:py-20 my-20"}>

        <div className={"font-light text-2xl pb-5 mt-5"}>
            <span>Ciao, sono</span>&nbsp;
            <span className={"text-yellow-300"}>
                Francesco Palomba
            </span>
        </div>
        <h3 className={"font-display font-bold text-5xl tracking-wide leading-tight"}>
            UI/UX <span className={"whitespace-nowrap"}>Designer <span className={"font-light text-yellow-300"}>&</span></span>
            <br/>
            Front-end Developer
        </h3>

        <div className={"flex text-xl space-x-14 pt-10"}>
            <a href={"#"}>Career</a>
            <a href={"#"}>About</a>
            <a href={"#"}>Contact</a>
        </div>

    </div>

)
