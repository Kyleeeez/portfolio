import { careerExperiences } from '../../../../lib/data'
import { CalendarIcon } from '@heroicons/react/outline'
import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

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
