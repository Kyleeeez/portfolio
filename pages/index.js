import Image from 'next/image'
import {LineWithBulb} from "../components/lineWithBulb";
import {SkillsAnimation} from "../components/skills-animation/skills-animations";
import {ChevronDoubleDownIcon, MailIcon} from '@heroicons/react/solid'
import {ChatAltIcon} from "@heroicons/react/outline";
import {useTheme} from "next-themes";

const skills = {
    react: {
        src: "/images/react.svg",
        alt: "React"
    },
    figma: {
        src: "/images/figma.svg",
        alt: "Figma"
    },
    css: {
        src: "/images/css3.svg",
        alt: "CSS3"
    },
    js: {
        src: "/images/js.svg",
        alt: "JS"
    },
    html: {
        src: "/images/html5.svg",
        alt: "HTML5"
    },
    next: {
        src: "/images/next.svg",
        alt: "NextJS"
    },
    angular: {
        src: "/images/angular.svg",
        alt: "Angular"
    },
}

const careerExperiences = [
    {
        from: "Jan. 2020",
        to: "Current",
        title: "React developer, UI Designer",
        company: "Seedble",
        companyUrl: "https://seedble.com",
        description: "Webapps development in React (NextJS), Angular7 (+ Ionic), HTML5 and SCSS (Bootstrap and Tailwind).\n" +
            "UI / UX design and prototyping in Figma.\n" +
            "Occasional backend development (NodeJS)\n" +
            "Task-based workflow (Asana + Git)",
        skills: [skills.react, skills.js, skills.figma, skills.css, skills.html, skills.next]

    },
    {
        from: "Dec. 2018",
        to: "Dec. 2019",
        title: "Angular developer, UI Designer",
        company: "Tutored",
        companyUrl: "https://tutored.me",
        description: "Company webapp development in Angular2+, HTML5 and SCSS (Bootstrap). UI / UX design and prototyping in Sketch, Figma, Principle and Zeplin. Task-based workflow, Git + Jira, with Agile methodology.",
        skills: [skills.angular, skills.figma, skills.css, skills.js, skills.html]
    },
    {
        from: "Dec. 2015",
        to: "Dec. 2018",
        title: "Frontend Developer, UI/UX Designer, Global Professional Services team Developer",
        company: "Qmatic Italy",
        companyUrl: "https://qmatic.com",
        description: "Webpages development in HTML5, CSS, JS(+jQuery).\n" +
            "UI/UX design in Adobe Illustrator and Figma (clients: TIM, Pandora,Fastweb) Global Professional Services Developer: Working with global team (15+) of front-end developers. Daily+weekly meetings.",
        skills: [skills.js, skills.css, skills.figma, skills.html]
    }
]

const educationExperiences = [
    {
        from: "Sep. 2013",
        to: "Sep. 2014",
        title: "Computer Science",
        company: "La Sapienza - University of Rome, Italy",
        description: "Acquired advanced programming and algorithm notions. Acquired deep notions of Python and Java.",
    },
    {
        from: "Sep. 2008",
        to: "Aug. 2013",
        title: "Computer Expert Diploma",
        company: "ITIS Enrico Fermi, Rome, Italy",
        description: "Acquired basic level of programming languages HTML, CSS, PHP, MySql, JS, Java, C++.",
    },
]

export default function Home() {
    const {resolvedTheme} = useTheme();

    return (
        <>

            <Heading/>


            <div className="ml-5  -top-9 hidden md:block">
                <svg width="159" height="196" viewBox="0 0 159 196" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.2" d="M158 196C158 81.5 1 131 1 0" stroke={resolvedTheme === "dark" ? "white" : "rgb(3 30 78 / 0.2)"} stroke-width="2"/>
                </svg>
            </div>


            <CareerExperiences/>

            <EducationExperiences/>


            <div className="flex">
                <a className="btn primary md:ml-40 mb-10">
                    <MailIcon className="h-5 w-5 mr-1"/>
                    Let's talk
                </a>
            </div>


            <p className="opacity-50 italic md:px-20 mb-3 text-sm">*Portfolio currently under construction</p>
        </>
    )
}


const Heading = () => (

    <div className={"pt-10 md:pt-20 md:mt-20 flex flex-wrap md:flex-nowrap relative overflow-hidden justify-between"}>

        <div className="order-2 md:order-1 w-full md:w-auto">


            <LineWithBulb initial hideMobile>
                <div className="pb-5 text-center md:text-left -mt-5 md:mt-3">


                    <p className={"font-light text-2xl pb-0 mt-0 md:mb-2"}>
                        Hi, I'm
                    </p>
                    <h1 className={"font-display font-medium text-4xl md:text-5xl tracking-wide leading-tight mb-2"}>
                        Francesco Palomba
                    </h1>
                    <h2 className={"font-medium text-yellow-300 text-2xl tracking-wide leading-tight mb-4"}>
                        Front-end developer <span className={"font-light text-white"}>& </span>
                        <span className="whitespace-nowrap">UI<span
                            className={"font-light text-white opacity-50"}>/</span>UX <span
                            className={"whitespace-nowrap"}>designer </span></span>
                    </h2>


                    <p className="opacity-90 mb-10 w-full">
                        I'm 27 years old, with <span className="text-yellow-300">6+ years experience </span>in turning
                        my
                        <span className="whitespace-nowrap"> designs into clean code.</span><br/>
                        Curious lifelong learner, I firmly believe in the power of collaboration.<br/>
                        Always looking for the next problem to solve.<br/>
                    </p>


                    <div className="flex gap-x-3">

                        <button className="btn primary"
                                onClick={() => document.getElementById("careerSection").scrollIntoView({behavior: "smooth"})}>
                            <ChevronDoubleDownIcon className="h-5 w-5"/> My story
                        </button>


                        <a className="btn secondary" href="mailto:palomba.fra@gmail.com">
                            <ChatAltIcon className="h-5 w-5 mr-1 opacity-80"/> Let's talk
                        </a>
                    </div>


                </div>
            </LineWithBulb>
        </div>

        <SkillsAnimation/>

    </div>

)


const CareerExperiences = () => (
    <div id="careerSection" className="-mt-5 md:mt-0">
        <LineWithBulb isLabel strokeColor="bg-yellow-300">
            <div className="h-[150px]"/>
        </LineWithBulb>

        <div
            className="-mt-[52px] -translate-y-14 md:text-center md:ml-[110px] sticky w-[100px] md:w-[130px] whitespace-nowrap z-9 font-medium text-lg tracking-widest top-[150px] text-yellow-300 bg-slate-700 dark:bg-slate-400/30 pl-3 rounded-lg backdrop-blur">


            <div
                className="h-5 w-10 scale-75 absolute translate-y-0.5 -top-[19.5px] -translate-x-[11px] md:translate-x-9 overflow-hidden">
                <div className="h-10 w-10 rounded-full p-1.5">
                    <div className="rounded-full h-full p-2">
                        <div className="bg-yellow-300  rounded-full h-full"/>
                    </div>
                </div>
            </div>

            <div
                className="h-5 w-10 scale-75 absolute -translate-y-0.5 -bottom-[19.5px] -translate-x-[11px] md:translate-x-9 overflow-hidden">
                <div className="h-10 w-10 rounded-full p-1.5 -mt-5">
                    <div className="rounded-full h-full p-2">
                        <div className="bg-yellow-300  rounded-full h-full"/>
                    </div>
                </div>
            </div>

            <span className="inline-block text-xl font-extralight py-3">Career</span>

        </div>


        <LineWithBulb className="" strokeColor="bg-yellow-300" isLabel>
            <div className="py-5"/>
        </LineWithBulb>

        {
            careerExperiences.map(({from, to, title, company, skills, description, companyUrl}) => (

                <LineWithBulb
                    strokeColor="bg-yellow-300"
                    infoElement={
                        <div className="flex -mt-2 md:mt-0 gap-x-8 md:block  md:text-right text-lg">
                            <div className="flex order-2 flex-col md:block">
                                <span className="uppercase tracking-wide text-sm opacity-50 pr-2">to</span>
                                <span className="text-yellow-300 text-right">{to}</span>
                            </div>
                            <div className="flex order-1 flex-col md:block">
                                <span className="uppercase tracking-wide text-sm opacity-50 pr-2">from</span>
                                <span className="text-yellow-300 text-right">{from}</span>
                            </div>
                        </div>
                    }
                >
                    <div className="md:flex mb-14 md:mb-28 ">
                        <div className="md:w-1/2 w-full">
                            <p className="text-2xl md:text-3xl mb-2">{title}</p>
                            <a href={companyUrl} target="_blank"
                               className="block text-yellow-300 text-xl mb-20 md:mb-0">@{company}</a>
                            <div
                                className="flex flex-wrap items-center my-4 md:px-0 -mt-16 w-full md:w-auto md:mt-0 md:static">
                                {
                                    !!skills?.length && skills.map(({src, alt}, i) =>
                                        <div
                                            className="flex items-center rounded p-3 rounded text-slate-900 dark:text-white bg-gray-100 dark:bg-slate-900/40 mr-2 mb-2">

                                                <span style={{width: 17, height: 17}}>
                                                    <Image
                                                        key={i}
                                                        src={src}
                                                        alt={alt + " logo"}
                                                        width={17}
                                                        height={17}
                                                    />
                                                </span>
                                            <span className="pl-2 opacity-70">{alt}</span>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <p className="md:w-1/2 tracking-wide opacity-80 md:pl-10">
                            {description}
                        </p>
                    </div>
                </LineWithBulb>
            ))
        }
    </div>
)


const EducationExperiences = () => (
    <div>
        <LineWithBulb isLabel strokeColor="bg-blue-300">
            <div className="h-[150px]"/>
        </LineWithBulb>

        <div
            className="-mt-[52px] -translate-y-14 md:text-center md:ml-[110px] sticky w-[130px] md:w-[150px] whitespace-nowrap z-9 font-medium text-lg tracking-widest top-[150px] text-yellow-300 bg-slate-700 dark:bg-slate-400/30 pl-3 rounded-lg backdrop-blur">


            <div
                className="h-5 w-10 scale-75 absolute translate-y-0.5 -top-[19.5px] -translate-x-[11px] md:translate-x-9 overflow-hidden">
                <div className="h-10 w-10 rounded-full p-1.5">
                    <div className="rounded-full h-full p-2">
                        <div className="bg-blue-300  rounded-full h-full"/>
                    </div>
                </div>
            </div>

            <div
                className="h-5 w-10 scale-75 absolute -translate-y-0.5 -bottom-[19.5px] -translate-x-[11px] md:translate-x-9 overflow-hidden">
                <div className="h-10 w-10 rounded-full p-1.5 -mt-5">
                    <div className="rounded-full h-full p-2">
                        <div className="bg-blue-300  rounded-full h-full"/>
                    </div>
                </div>
            </div>

            <span className="inline-block text-xl font-extralight text-blue-300 py-3">Education</span>

        </div>


        {
            educationExperiences.map(({from, to, title, company, skills, description, companyUrl}) => (

                <LineWithBulb
                    strokeColor="bg-blue-300"
                    infoElement={
                        <div className="flex -mt-2 md:mt-0 gap-x-8 md:block  md:text-right text-lg">
                            <div className="flex order-2 flex-col md:block">
                                <span className="uppercase tracking-wide text-sm opacity-50 pr-2">to</span>
                                <span className="text-blue-300 text-right">{to}</span>
                            </div>
                            <div className="flex order-1 flex-col md:block">
                                <span className="uppercase tracking-wide text-sm opacity-50 pr-2">from</span>
                                <span className="text-blue-300 text-right">{from}</span>
                            </div>
                        </div>
                    }
                >
                    <div className="md:flex mb-14 md:mb-28 ">
                        <div className="md:w-1/2 w-full">
                            <p className="text-2xl md:text-3xl mb-2">{title}</p>
                            <a href={companyUrl} target="_blank"
                               className="block text-blue-300 text-xl mb-4 md:mb-0">@{company}</a>
                        </div>
                        <p className="md:w-1/2 tracking-wide opacity-80 md:pl-10">
                            {description}
                        </p>
                    </div>
                </LineWithBulb>
            ))
        }
    </div>
)
