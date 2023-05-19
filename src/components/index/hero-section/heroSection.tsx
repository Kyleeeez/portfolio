import {ChatAltIcon, ChevronDoubleDownIcon} from "@heroicons/react/solid";
import {AnimatePresence, motion} from "framer-motion";
import React, {useState, useEffect, useMemo} from "react";
import {loader, splineContainer} from "./heroSection.module.scss";
import dynamic from 'next/dynamic';
import {Bulb} from "../../bulb";
import useIsMobile from "../../../hooks/isMobile";
import {is} from "immutable";


export const HeroSection = () => {

    const [loaded, setLoaded] = useState(false);
    const [Spline, setSpline] = useState(null);

    const isMobile = useIsMobile();


    useEffect(() => {
        setSpline(!isMobile ? dynamic(() => import('@splinetool/react-spline')) : null);
    }, [isMobile]);

    return (
        <>
            <div className="-translate-y-4 relative">


                <Bulb/>

                <p className={"text-2xl pb-0 mt-0 md:mb-2"}>
                    Hi, I'm
                </p>
                <h1 className={"font-display text-5xl md:text-[5rem] whitespace-nowrap"}>
                    Francesco Palomba
                </h1>

                <h2 className={"font-medium text-md md:text-[1.24rem] tracking-[0.1em] text-secondary uppercase mb-4"}>
                    Senior frontend developer
                    <span className="text-primary dark:text-white px-1">&<br className="md:hidden"/></span>
                    UI designer
                </h2>

                <p className="mb-10 w-full md:text-lg">
                    I'm {new Date().getFullYear() - 1995} years old, with <span
                    className="text-secondary">{new Date().getFullYear() - 2016}+ years experience </span>in turning
                    my
                    <span className="whitespace-nowrap"> designs into clean, robust code.</span><br/>
                    Curious lifelong learner, I firmly believe in the power of collaboration.<br/>
                    Always looking for the next problem to solve.<br/>
                </p>


                <div className="flex gap-x-3">

                    <button className="btn primary" aria-label="Read my story"
                            onClick={() => document.getElementById("careerSection").scrollIntoView({behavior: "smooth"})}>
                        <ChevronDoubleDownIcon className="h-5 w-5"/> My story
                    </button>


                    <button className="btn secondary" aria-label="Let's talk"
                            onClick={() => document.getElementById("chatSection").scrollIntoView({behavior: "smooth"})}>
                        <ChatAltIcon className="h-5 w-5 mr-1 opacity-80"/> Let's talk
                    </button>
                </div>
            </div>

            <div className="hidden md:block">
                <div className={splineContainer}>


                    <AnimatePresence>
                        {
                            (!loaded && !isMobile) &&
                            <motion.div className={loader} exit={{opacity: 0}}>
                                <img src={'/images/lazy-cubes.png'}/>

                                <svg className="animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                            strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor"
                                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            </motion.div>
                        }
                    </AnimatePresence>


                    <motion.div initial={{opacity: 0}} animate={loaded && {opacity: 1}}
                                className="cursor-grab active:cursor-grabbing">
                        {
                            Spline &&
                            <Spline onLoad={() => setLoaded(true)}
                                    scene="https://prod.spline.design/pobLkzB1W8D2qzId/scene.splinecode"/>

                        }
                    </motion.div>

                </div>
            </div>
        </>
    )
}