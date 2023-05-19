import {careerExperiences} from "../../../../lib/data";
import React, {useState} from "react";
import {DetailCard} from "../career-section";

export const MobileCarousel = () => {

    const [activeIndex, setActiveIndex] = useState<number>(0);

    const onScroll = (e) => {
        const scrollWidth = e.currentTarget.scrollWidth;
        const scrollX = e.currentTarget.scrollLeft;
        const innerWidth = e.currentTarget.clientWidth;

        const scrollPercentage = (scrollX / (scrollWidth - innerWidth)) * 100;

        const quarter = Math.floor(scrollPercentage / 25) + 1;

        setActiveIndex(quarter - 1);

    }

    return (

        <div className="-mx-6">


            <div className="flex align-start overflow-auto px-3 ms-4 my-3 gap-x-2 mx-auto">
                {
                    careerExperiences.map((experience, index) => (
                        <Stepper key={experience.id} active={index === activeIndex} />
                    ))
                }
            </div>

            <div onScroll={onScroll} className="snap-x flex overflow-auto snap-mandatory">

                {
                    careerExperiences.map((experience, i) => (
                        <div key={experience.id} className="w-[calc(100vw-3rem)] px-3 shrink-0 snap-start">
                            <DetailCard {...experience} active={true}/>
                        </div>
                    ))
                }

            </div>
        </div>
    )

}


const Stepper = ({active}) => (
    <div className={`w-[50px] h-1 transition-colors ${active ? "bg-secondary" : "bg-darkCard/10 dark:bg-darkCard"}`}/>
);
