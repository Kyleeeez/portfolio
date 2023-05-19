import {careerExperiences} from "../../../../lib/data";
import {CalendarIcon} from "@heroicons/react/outline";
import React, {useCallback, useEffect, useState} from "react";
import useEmblaCarousel from "embla-carousel-react";
import {DetailCard} from "../career-section";

export const DesktopCarousel = () => {

    const [activeIndex, setActiveIndex] = useState<number>(0);

    const [emblaRef, emblaApi] = useEmblaCarousel({axis: "y", align: 0});

    const onSelect = useCallback((emblaApi) => {
        setActiveIndex(emblaApi.selectedScrollSnap());
    }, [])

    useEffect(() => {
        if (emblaApi) emblaApi.on('select', onSelect)
    }, [emblaApi, onSelect])

    useEffect(() => {
        emblaApi && emblaApi.scrollTo(activeIndex);
    }, [activeIndex]);


    return (
        <div className="flex gap-10 -ms-6 -mt-2">

            <div className="px-3 md:px-0 gap-x-2 min-w-[400px] w-[400px]">
                {
                    careerExperiences.map((experience, index) => (
                        <PreviewCard key={experience.id} active={index === activeIndex} {...experience}
                                     index={index}
                                     onCardHover={(i) => setActiveIndex(i)}/>
                    ))
                }
            </div>

            <div className="w-full relative overflow-hidden -mt-10 -mb-10">
                <div
                    className="absolute h-5 top-0 left-0 w-full bg-gradient-to-b from-light dark:from-dark to-transparent z-10 pointer-events-none"/>
                <div
                    className="absolute h-5 bottom-0 left-0 w-full bg-gradient-to-t from-light dark:from-dark to-transparent z-10 pointer-events-none"/>


                <div className="absolute top-0 left-0 w-full h-full py-10">

                    <div className="embla">

                        <div className="embla__viewport" ref={emblaRef}>


                            <div className="embla__container">

                                {
                                    careerExperiences.map((experience, i) => (
                                        <div key={experience.id} onClick={() => setActiveIndex(i)}
                                             className={i !== careerExperiences.length ? "mb-5" : ""}
                                        >
                                            <DetailCard {...experience} active={i === activeIndex} />
                                        </div>
                                    ))
                                }
                            </div>


                        </div>
                    </div>

                </div>
            </div>
        </div>
    )

}


const PreviewCard = ({index, onCardHover, from, to, title, active, company, companyUrl}) => (
    <div className={`
             border-l-2 border-secondary bg-white transition-opacity dark:bg-dark pt-5 pb-3 px-5 
            ${active ? "dark:bg-gradient-to-r dark:from-secondary/20 dark:to-50% dark:to-darkCard/50" : "opacity-60"} 
            ${index !== careerExperiences.length - 1 ? " mb-6" : ""}
        `}
        onMouseEnter={() => onCardHover(index)}>
            <span className="font-medium text-xl  flex items-center mb-1 gap-1">
                <CalendarIcon width={20} className={"text-secondary inline-block mb-1 me-1"}/>
                {from}<span className="text-secondary">→</span> {to}
            </span>

        <h3 className="mb-4">{title}</h3>

        {

            /*
        <div className="flex items-center gap-x-3 mb-1">

            {
                !!skills?.length && skills.map(({src, alt}, i) =>
                    <img
                        key={i}
                        src={src}
                        alt={alt + " logo"}
                        width={14}
                        height={14}
                    />
                )
            }
        </div>


             */

        }


        <a href={companyUrl} target="_blank" className={"text-secondary font-medium text-sm"} rel="noopener">{company}</a>

    </div>
)