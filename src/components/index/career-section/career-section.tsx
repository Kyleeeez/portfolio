import {careerExperiences} from "../../../lib/data";
import {useEffect, useState} from "react";
import {CalendarIcon} from "@heroicons/react/outline";
import useEmblaCarousel from "embla-carousel-react";

export const CareerSection = () => {

    const [activeIndex, setActiveIndex] = useState<number>(0);

    const [isMobile, setIsMobile] = useState(false);


    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);

    const [emblaRef, emblaApi] = useEmblaCarousel({axis: isMobile ? "x" : "y", align: 0});

    useEffect(() => {
        emblaApi && emblaApi.scrollTo(activeIndex);
    }, [activeIndex]);

    return (
        <div className={"mt-80 mb-40"}>


            <h2 className="font-display font-medium text-xl md:text-3xl mb-2">Career</h2>
            <p className="text-sm opacity-30 font-light mb-2">Hover a card to see details</p>

            <div className="flex gap-5">

                {
                    !isMobile &&
                    <div className="min-w-[350px] w-[350px]">
                        {
                            careerExperiences.map((experience, index) => (
                                <PreviewCard key={experience.id} active={index === activeIndex} {...experience}
                                             index={index}
                                             onCardHover={(i) => setActiveIndex(i)}/>
                            ))
                        }
                    </div>
                }

                {
                    isMobile ?
                        <div className="embla-mobile">

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
                        :
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
                                                                           description
                                                                       }, i) => (
                                                    <div key={id}
                                                         className={`bg-white dark:bg-darkCard transition-colors embla__slide rounded-lg p-6 cursor-grab active:cursor-grabbing ${id !== careerExperiences.length ? "mb-5" : ""}`}>

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


                                                    </div>
                                                ))
                                            }
                                        </div>


                                    </div>
                                </div>

                            </div>
                        </div>
                }


            </div>
        </div>
    );
}


const PreviewCard = ({index, onCardHover, from, to, title, active, company, skills, description, companyUrl}) => (
    <div
        className={`bg-white transition-opacity dark:bg-darkCard rounded-l-lg p-4 ${active ? "border-r-2 border-secondary" : "opacity-60"}  ${index !== careerExperiences.length - 1 ? " mb-5" : ""}`}
        onMouseEnter={() => onCardHover(index)}>
            <span className="text-sm font-light flex items-center mb-1 gap-1">
                <CalendarIcon width={15} className="text-secondary inline-block mb-1"/>
                {from}<span className="text-secondary">→</span> {to}
            </span>
        <h3 className="font-medium text-xl mb-3">{title}</h3>
        <a href={companyUrl} target="_blank" className="text-secondary font-medium text-sm" rel="noopener">{company}</a>
    </div>
)