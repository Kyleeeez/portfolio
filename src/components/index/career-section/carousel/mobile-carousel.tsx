import { careerExperiences } from "../../../../lib/data";
import React, { useState } from "react";
import { DetailCard } from "../career-section";

export const MobileCarousel = () => {

    const [activeIndex, setActiveIndex] = useState<number>(0);

    const onScroll = (e) => {
        const scrollWidth = e.currentTarget.scrollWidth;
        const scrollX = e.currentTarget.scrollLeft;
        const innerWidth = e.currentTarget.clientWidth;

        const scrollPercentage = (scrollX / (scrollWidth - innerWidth)) * 100;

        const quarter = Math.floor(scrollPercentage / 25) + 1;

        setActiveIndex(Math.min(quarter - 1, 3));

    }

    return (

        <div className="-mx-6">

            <div className="align-start mx-auto my-3 ms-4 flex gap-x-2 overflow-auto px-3">

                {
                    careerExperiences.map((experience, index) => (
                        <Stepper key={experience.id} active={index === activeIndex}/>
                    ))
                }
            </div>

            <div onScroll={onScroll} className="flex snap-x snap-mandatory overflow-auto">

                {
                    careerExperiences.map((experience) => (
                        <div key={experience.id} className="w-[calc(100vw-3rem)] shrink-0 snap-start px-3">
                            <DetailCard {...experience} active={true}/>
                        </div>
                    ))
                }

            </div>
        </div>
    )

}

const Stepper = ({ active }) => (
    <div className={`h-1 w-[50px] transition-colors ${active ? "bg-secondary" : "bg-darkCard/10 dark:bg-darkCard"}`}/>
);
