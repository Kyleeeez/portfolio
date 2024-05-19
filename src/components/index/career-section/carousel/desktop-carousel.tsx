import { careerExperiences } from '../../../../lib/data'
import { CalendarIcon } from '@heroicons/react/outline'
import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { DetailCard } from '../career-section'

export const DesktopCarousel = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0)

    const [emblaRef, emblaApi] = useEmblaCarousel({ axis: 'y', align: 0 })

    const onSelect = useCallback((emblaApi) => {
        if (emblaApi) setActiveIndex(emblaApi.selectedScrollSnap())
    }, [])

    useEffect(() => {
        if (emblaApi) emblaApi.on('select', onSelect)
    }, [emblaApi, onSelect])

    useEffect(() => {
        if (emblaApi) emblaApi.scrollTo(activeIndex)
    }, [activeIndex])

    return (
        <div className='-ms-6 -mt-2 flex gap-10'>
            <div className='w-[200px] shrink-0 gap-x-2 px-3 md:px-0 lg:w-[400px]'>
                {careerExperiences.map((experience, index) => (
                    <PreviewCard
                        key={experience.id}
                        active={index === activeIndex}
                        {...experience}
                        index={index}
                        onCardHover={(i) => {
                            setActiveIndex(i)
                        }}
                    />
                ))}
            </div>

            <div className='relative -my-10 w-full overflow-hidden'>
                <div
                    className='pointer-events-none absolute left-0 top-0 z-10 h-5 w-full bg-gradient-to-b from-light to-transparent dark:from-dark' />
                <div
                    className='pointer-events-none absolute bottom-0 left-0 z-10 h-5 w-full bg-gradient-to-t from-light to-transparent dark:from-dark' />

                <div className='absolute left-0 top-0 h-full w-full py-10'>
                    <div className='embla'>
                        <div className='embla__viewport' ref={emblaRef}>
                            <div className='embla__container'>
                                {careerExperiences.map((experience, i) => (
                                    <div
                                        key={experience.id}
                                        onClick={() => {
                                            setActiveIndex(i)
                                        }}
                                        className={i !== careerExperiences.length ? 'mb-5' : ''}>
                                        <DetailCard {...experience} active={i === activeIndex} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const PreviewCard = ({ index, onCardHover, from, to, title, active, company, companyUrl }) => (
    <div
        className={`
             border-l-2 border-secondary px-5 pb-3  pt-5 transition-opacity
            ${active ? 'bg-white:50 border-l-4 dark:bg-gradient-to-r dark:from-secondary/20 dark:to-darkCard/50 dark:to-10%' : ' bg-white opacity-70 dark:bg-darkCard/20 '} 
            ${index !== careerExperiences.length - 1 ? ' mb-6' : ''}
        `}
        onMouseEnter={() => onCardHover(index)}>
        <span className='mb-1 flex  items-center gap-1 text-sm font-medium lg:text-xl'>
            <CalendarIcon width={20} className={'mb-1 me-1 inline-block shrink-0 text-secondary'} />
            <span className='whitespace-nowrap'>{from}</span>
            <span className='text-secondary'>→</span>

            <span className='whitespace-nowrap'>{to}</span>
        </span>

        <h3 className='mb-4'>{title}</h3>

        <a href={companyUrl} target='_blank' className={'text-sm font-medium text-secondary'} rel='noopener noreferrer'>
            {company}
        </a>
    </div>
)
