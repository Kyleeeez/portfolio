import Image from 'next/image'
import {LineWithBulb} from "../components/lineWithBulb";
import {SkillsAnimation} from "../components/skills-animation/skills-animations";
import {ArrowDownIcon, BeakerIcon, ChevronDoubleDownIcon} from '@heroicons/react/solid'
import {ChatAltIcon} from "@heroicons/react/outline";

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

export default function Home() {

    return (
        <>

            <Heading/>

            <div className="ml-5  -top-9 hidden md:block">
                <svg width="159" height="196" viewBox="0 0 159 196" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.2" d="M158 196C158 81.5 1 131 1 0" stroke="white" stroke-width="2"/>
                </svg>
            </div>

            <LineWithBulb initial isLabel className="md:hidden">
                <div className="h-20"/>
            </LineWithBulb>


            <LineWithBulb>
                <p className="rounded-full -ml-14 md:-ml-20 pl-3 md:pl-6 tracking-wide text-yellow-300 text-xl pt-3 pb-4 pr-6 md:pr-10 -mt-4 mb-10 md:mb-28 bg-slate-600/50 inline-block">
                    <span className="text-3xl relative mr-3 pr-2">💼</span>
                    <span className="inline-block pb-1">My career</span>
                </p>
            </LineWithBulb>


            {
                careerExperiences.map(({from, to, title, company, skills, description, companyUrl}) => (

                    <LineWithBulb
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
                                <a href={companyUrl} target="_blank" className="block text-yellow-300 text-xl mb-20 md:mb-0">@{company}</a>
                                <div className="flex md:flex-wrap items-center my-4 overflow-auto absolute left-0 px-16 md:px-0 -mt-16 w-full md:w-auto md:mt-0 md:static">
                                    {
                                        skills.map(({src, alt}, i) =>
                                            <div
                                                className="flex items-center rounded p-3 rounded bg-slate-900/40 mr-2 mb-2">

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

            <LineWithBulb className="h-20" isLabel/>

            <LineWithBulb>
                <p className="font-display rounded-full -ml-14 md:-ml-20 pl-14 md:pl-20 tracking-wide text-yellow-300 text-2xl py-4 pr-8 md:pr-12 -mt-4 mb-10 md:mb-28 bg-slate-600/50 inline-block">Education</p>
            </LineWithBulb>


            <div className="py-20 my-20"></div>

        </>
    )
}


const Heading = () => (

    <div className={"md:pt-20 mt-20 flex relative"}>


        <LineWithBulb initial>
            <div className="pb-5">


                <p className={"font-light text-2xl pb-0 mt-0 mb-2"}>
                    Hi, I'm
                </p>
                <h1 className={"font-display font-medium text-5xl tracking-wide leading-tight mb-2"}>
                    Francesco Palomba
                </h1>
                <h2 className={"font-medium text-yellow-300 text-2xl tracking-wide leading-tight mb-4"}>
                    Front-end developer <span className={"font-light text-white"}>& </span>
                    <span className="block md:inline-block">UI<span className={"font-light text-white opacity-50"}>/</span>UX <span className={"whitespace-nowrap"}>designer </span></span>
                </h2>


                <p className="opacity-90 mb-10 w-full">
                    I'm 27 years old, with <span className="text-yellow-300">6+ years experience </span>in turning my designs into clean code.<br/>
                    Curious lifelong learner, I firmly believe in the power of collaboration.<br/>
                    Always looking for the next problem to solve.<br/>
                </p>


                <div className="flex gap-x-3">

                    <button className="btn primary">
                        <ChevronDoubleDownIcon className="h-5 w-5"/> My story
                    </button>


                    <button className="btn secondary">
                        <ChatAltIcon className="h-5 w-5 mr-1 opacity-80"/> Let's talk
                    </button>
                </div>


            </div>
        </LineWithBulb>

        <SkillsAnimation/>

    </div>

)
