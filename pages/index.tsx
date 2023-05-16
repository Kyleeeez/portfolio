import {HeroSection} from "../src/components/index/hero-section/heroSection";
import {Navbar} from "../src/components/_navbar/navbar";
import {CareerSection} from "../src/components/index/career-section/career-section";

export default function Home() {

    return (
        <>

            <Navbar />

            <main className="container tracking-wide mt-60 md:mt-72 border-s-2 border-white dark:border-white/10">

                <HeroSection />

                <CareerSection />

            </main>

        </>
    )
}
{
    /*

const CareerExperiences = () => {

    const [emblaRef] = useEmblaCarousel({align: "center"})


    return (
        <div id="careerSection" className="-mt-5 md:mt-0 bg">
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


            <div className="embla" ref={emblaRef}>
                <div className="embla__container">

                    {
                        careerExperiences.map(({from, to, title, company, skills, description, companyUrl}) => (
                            <div className="embla__slide">
                                <LineWithBulb
                                    strokeColor="bg-yellow-300"
                                    infoElement={
                                        <div className="flex -mt-2 md:mt-0 gap-x-8 md:block  md:text-right text-lg">
                                            <div className="flex order-2 flex-col md:block">
                                                <span
                                                    className="uppercase tracking-wide text-sm opacity-50 pr-2">to</span>
                                                <span className="text-yellow-300 text-right">{to}</span>
                                            </div>
                                            <div className="flex order-1 flex-col md:block">
                                                <span
                                                    className="uppercase tracking-wide text-sm opacity-50 pr-2">from</span>
                                                <span className="text-yellow-300 text-right">{from}</span>
                                            </div>
                                        </div>
                                    }
                                >
                                    <div className="md:flex mb-14 md:mb-28 ">
                                        <div className="md:w-1/2 w-full">
                                            <p className="text-2xl md:text-3xl mb-2">{title}</p>
                                            <a href={companyUrl} target="_blank" rel="noopener"
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
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}


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
                            <div className="block text-blue-300 text-xl mb-4 md:mb-0">@{company}</div>
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
     */
}
