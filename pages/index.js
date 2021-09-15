import {CareerSection} from "../components/career-section/career-section";
import {SkillsAnimation} from "../components/skills-animation/skills-animations";
import Link from "next/link";
export default function Home() {

    return (
        <>

            <div className={"flex justify-between items-center overflow-hidden"}>
                <Heading/>
                <SkillsAnimation/>
            </div>

            <div className={"relative py-14"} id={"career"}>

                <div className={"inline-block text-yellow-300 tracking-wide text-xl font-bold font-display"}>
                    <span className={"opacity-50"}>#</span>Career
                </div>

                <CareerSection/>

            </div>

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
            <Link href="/about">
                <a>About</a>
            </Link>
            <a href={"#"}>Contact</a>
        </div>

    </div>

)
