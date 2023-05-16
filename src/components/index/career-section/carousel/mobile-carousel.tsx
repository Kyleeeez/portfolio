import {careerExperiences} from "../../../../lib/data";
import {CalendarIcon} from "@heroicons/react/outline";
import React, {useCallback, useEffect, useState} from "react";
import useEmblaCarousel from "embla-carousel-react";
import {DetailCard} from "../career-section";

export const MobileCarousel = () => {

    const [activeIndex, setActiveIndex] = useState<number>(0);

    const [emblaRef, emblaApi] = useEmblaCarousel({axis: "x", align: 0});

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

        <div className="flex flex-col -mx-6">

            <div className="embla-mobile" ref={emblaRef}>

                <div className="embla__container-mobile">

                    {
                        careerExperiences.map((experience, i) => (
                            <div key={experience.id} onClick={() => setActiveIndex(i)} className="shrink-0 w-[calc(100%-2rem)] ps-3">
                                <DetailCard {...experience} active={true}/>
                            </div>
                        ))
                    }
                </div>

            </div>

            <div className="flex align-start overflow-auto px-3 mt-5 gap-x-2 mx-auto">
                {
                    careerExperiences.map((experience, index) => (
                        <Stepper key={experience.id} active={index === activeIndex}
                                 onCardClick={() => setActiveIndex(index)}/>
                    ))
                }
            </div>
        </div>
    )

}


const Stepper = ({active, onCardClick}) => (
    <div className={`w-[50px] h-1 transition-colors ${active ? "bg-secondary" : "bg-darkCard"}`}
         onClick={onCardClick}/>
);
