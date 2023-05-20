import { HeroSection } from "../src/components/index/hero-section/heroSection";
import { Navbar } from "../src/components/_navbar/navbar";
import { CareerSection } from "../src/components/index/career-section/career-section";
import { CubeSVG } from "../src/SVGs/cube";

export default function Home() {

    return (
        <>

            <Navbar/>

            <CubeSVG className="absolute -left-20 top-[700px] -rotate-12 opacity-60"/>

            <main className="container mt-60 border-s-2 border-white tracking-wide dark:border-white/10 md:mt-72">

                <HeroSection/>

                <CareerSection/>

            </main>

        </>
    )
}
