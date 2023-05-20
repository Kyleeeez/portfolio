import React from "react";
import { Bulb } from "../../bulb";
import { DesktopCarousel } from "./carousel/desktop-carousel";
import { MobileCarousel } from "./carousel/mobile-carousel";
import { CalendarIcon } from "@heroicons/react/outline";
import useIsMobile from "../../../hooks/isMobile";

export const CareerSection = () => {

    const isMobile = useIsMobile();

    return (
        <div className={"relative mb-40 mt-32 md:mt-96"} id="careerSection">

            <Bulb/>

            <h2 className="text-2xl font-bold md:mb-5 md:text-4xl">
                Career
            </h2>

            <p className="mb-5 hidden text-sm opacity-30 md:block">
                Hover below or drag cards to see details
            </p>

            {
                isMobile ?
                    <MobileCarousel/>
                    :
                    <DesktopCarousel/>
            }
        </div>
    );
}

export const DetailCard = ({ active, title, from, to, companyUrl, company, description, skills }) => {

    return (
        <div
            className={`${(active) ? "" : "opacity-40"} embla__slide cursor-grab 
            rounded-lg bg-white px-4  
            py-5 transition-all hover:opacity-100 active:cursor-grabbing dark:bg-darkCard md:px-8 md:pb-5 md:pt-8`}>

            <span className="mb-1 flex items-center gap-1">
                <CalendarIcon width={15} className="mb-1 inline-block text-secondary"/>
                {from}
                <span className="text-secondary">→</span>
                {to}
            </span>

            <h2 className="my-2 text-xl font-bold md:text-3xl">
                {title}
            </h2>

            <a href={companyUrl} target="_blank" className="font-medium text-secondary" rel="noopener noreferrer">
                {company}
            </a>

            <div className="mt-4 border-t border-primary/10 dark:border-white/10"/>

            <div className="max-w-[700px] ps-5 pt-4 md:mt-4">
                <ul className="list-disc">
                    {description.split("\n").map(line =>
                        <li key={line} className="mb-2">{line}</li>
                    )}
                </ul>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 md:mt-12 md:flex-nowrap">

                {
                    !!skills?.length && skills.map(({ src, alt }, i) =>
                        <div key={src} className="flex items-center rounded bg-light px-3 py-2 dark:bg-dark/20">
                                <span style={{ width: 17, height: 17 }}>
                                    <img
                                        key={i}
                                        src={src}
                                        alt={`${String(alt)} logo`}
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
    )

}