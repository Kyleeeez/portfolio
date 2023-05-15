import {careerExperiences} from "../../../lib/data";
import React, {useCallback, useEffect, useState} from "react";
import {CalendarIcon} from "@heroicons/react/outline";
import useEmblaCarousel from "embla-carousel-react";
import {Bulb} from "../../bulb";

export const CareerSection = () => {

    const [activeIndex, setActiveIndex] = useState<number>(0);

    const [isMobile, setIsMobile] = useState(false);

    const [emblaRef, emblaApi] = useEmblaCarousel({axis: isMobile ? "x" : "y", align: 0});

    const onSelect = useCallback((emblaApi) => {
        setActiveIndex(emblaApi.selectedScrollSnap());
    }, [])

    useEffect(() => {
        if (emblaApi) emblaApi.on('select', onSelect)
    }, [emblaApi, onSelect])


    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);


    useEffect(() => {
        emblaApi && emblaApi.scrollTo(activeIndex);
    }, [activeIndex]);

    return (
        <div className={"mt-32 md:mt-96 mb-40 relative"} id="careerSection">


            <Bulb/>

            <h2 className="font-display font-medium text-2xl md:text-4xl mb-5 md:mb-10">
                Career
            </h2>
            <p className="text-sm opacity-30 font-light mb-2 hidden md:block">
                Hover below or drag cards to see details
            </p>

            <div className="flex flex-col md:flex-row gap-2 md:gap-10 -ms-8 -mr-4 md:-ms-10 md:-mr-0">

                {
                    isMobile ?
                        <>

                            <div className="embla-mobile px-3">
                                <div className="embla__viewport-mobile" ref={emblaRef}>


                                    <div className="embla__container-mobile">

                                        {
                                            careerExperiences.map(({
                                                                       id,
                                                                       title,
                                                                       from,
                                                                       to,
                                                                       companyUrl,
                                                                       company,
                                                                       description
                                                                   }) => (
                                                <div key={id}
                                                     className={`embla__slide-mobile bg-white dark:bg-darkCard rounded-lg p-4 cursor-grab active:cursor-grabbing ${id !== careerExperiences.length ? "me-5" : ""}`}>

                                            <span className="text-sm font-light flex items-center mb-1 gap-1">
                                                <CalendarIcon width={15} className="text-secondary inline-block mb-1"/>
                                                {from}<span className="text-secondary">→</span> {to}
                                            </span>


                                                    <h2 className="text-2xl my-2">{title}</h2>

                                                    <a href={companyUrl} target="_blank"
                                                       className="text-secondary text-sm" rel="noopener">{company}</a>


                                                    <p className="mt-4">
                                                        {description}
                                                    </p>


                                                </div>
                                            ))
                                        }
                                    </div>


                                </div>
                            </div>

                            <div className="flex align-start overflow-auto px-3 mt-2 gap-x-2 mx-auto">
                                {
                                    careerExperiences.map((experience, index) => (
                                        <PreviewCardMobile key={experience.id} active={index === activeIndex}
                                                           onCardClick={() => setActiveIndex(index)}/>
                                    ))
                                }
                            </div>
                        </>
                        :
                        <>

                            <div className="px-3 gap-x-2 min-w-[350px] w-[350px]">
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
                                    className="absolute h-10 top-0 left-0 w-full bg-gradient-to-b from-light dark:from-primary to-transparent z-10"/>
                                <div
                                    className="absolute h-10 bottom-0 left-0 w-full bg-gradient-to-t from-light dark:from-primary to-transparent z-10"/>


                                <div className="absolute top-0 left-0 w-full h-full py-10">

                                    <div className="embla">

                                        <div className="embla__viewport" ref={emblaRef}>


                                            <div className="embla__container">

                                                {
                                                    careerExperiences.map(({
                                                                               id,
                                                                               title,
                                                                               from,
                                                                               to,
                                                                               companyUrl,
                                                                               company,
                                                                               description,
                                                                               skills
                                                                           }, i) => (
                                                        <div key={id}
                                                             className={`${activeIndex === i ? "" : "opacity-80"} hover:opacity-100 transition-opacity bg-white dark:bg-darkCard transition-colors embla__slide rounded-lg px-6 pt-6 pb-3 cursor-grab active:cursor-grabbing ${id !== careerExperiences.length ? "mb-9" : ""}`}>

                                                        <span
                                                            className="text-sm font-light flex items-center mb-1 gap-1">
                                                            <CalendarIcon width={15}
                                                                          className="text-secondary inline-block mb-1"/>
                                                            {from}<span className="text-secondary">→</span> {to}
                                                        </span>


                                                            <h2 className="text-2xl font-display my-2">{title}</h2>

                                                            <a href={companyUrl} target="_blank"
                                                               className="text-secondary text-sm font-medium"
                                                               rel="noopener">{company}</a>


                                                            <p className="mt-4 opacity-75 border-t border-white/10 pt-4">
                                                                {description}
                                                            </p>

                                                            <div className="flex gap-x-2 mt-12">

                                                                {
                                                                    !!skills?.length && skills.map(({src, alt}, i) =>
                                                                            <div
                                                                                className="flex items-center rounded px-3 py-2 rounded bg-light dark:bg-primary/20">

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
                                                    ))
                                                }
                                            </div>


                                        </div>
                                    </div>

                                </div>
                            </div>
                        </>
                }


            </div>
        </div>
    );
}


const PreviewCardMobile = ({active, onCardClick}) => (
    <div className={`w-[50px] h-1 transition-colors ${active ? "bg-secondary" : "bg-darkCard"}`}
         onClick={onCardClick}/>
);
const PreviewCard = ({index, onCardHover, from, to, title, active, company, skills, description, companyUrl}) => (
    <div
        className={`bg-white transition-opacity dark:bg-darkCard pt-4 pb-3 px-5 ${active ? "border-r-2 border-secondary" : "opacity-80"}  ${index !== careerExperiences.length - 1 ? " mb-6" : ""}`}
        onMouseEnter={() => onCardHover(index)}>
            <span className="text-sm font-light flex items-center mb-1 gap-1">
                <CalendarIcon width={15} className={"text-secondary inline-block mb-1"}/>
                {from}<span className="text-secondary">→</span> {to}
            </span>

        <h3 className="font-medium text-xl mb-4">{title}</h3>

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


        <a href={companyUrl} target="_blank" className={"text-secondary font-medium text-sm"}
           rel="noopener">{company}</a>

    </div>
)