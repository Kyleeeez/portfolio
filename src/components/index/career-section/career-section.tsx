import React, {useEffect, useState} from "react";
import {Bulb} from "../../bulb";
import {DesktopCarousel} from "./carousel/desktop-carousel";
import {MobileCarousel} from "./carousel/mobile-carousel";
import {CalendarIcon} from "@heroicons/react/outline";
import useIsMobile from "../../../hooks/isMobile";

export const CareerSection = () => {

    const isMobile = useIsMobile();

    return (
        <div className={"mt-32 md:mt-96 mb-40 relative"} id="careerSection">

            <Bulb/>

            <h2 className="font-bold text-2xl md:text-4xl md:mb-5">
                Career
            </h2>

            <p className="text-sm opacity-30 mb-5 hidden md:block">
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


export const DetailCard = ({active, title, from, to, companyUrl, company, description, skills}) => {


    return (
        <div
            className={`${active ? "" : "opacity-40"} hover:opacity-100 transition-opacity 
            bg-white dark:bg-darkCard transition-colors  
            rounded-lg py-5 px-4 md:px-8 md:pt-8 md:pb-5 cursor-grab active:cursor-grabbing embla__slide`}>

            <span className="flex items-center mb-1 gap-1">
                <CalendarIcon width={15} className="text-secondary inline-block mb-1"/>
                {from}
                <span className="text-secondary">→</span>
                {to}
            </span>


            <h2 className="text-xl font-bold md:text-3xl my-2">
                {title}
            </h2>

            <a href={companyUrl} target="_blank" className="text-secondary font-medium" rel="noopener">
                {company}
            </a>

            <div className="border-t border-primary/10 dark:border-white/10 mt-4"/>

            <div className="ps-5 md:mt-4 pt-4 max-w-[700px]">
                <ul className="list-disc">
                    {description.split("\n").map(line =>
                        <li key={line} className="mb-2">{line}</li>
                    )}
                </ul>
            </div>

            <div className="flex flex-wrap md:flex-nowrap gap-2 mt-8 md:mt-12">

                {
                    !!skills?.length && skills.map(({src, alt}, i) =>
                        <div key={src}
                             className="flex items-center rounded px-3 py-2 rounded bg-light dark:bg-dark/20">

                                                            <span style={{width: 17, height: 17}}>
                                                                <img
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
    )


}