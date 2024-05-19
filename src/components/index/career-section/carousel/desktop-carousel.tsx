import { careerExperiences } from '../../../../lib/data'
import React, { useRef, useState } from 'react'
import { DetailCard } from '../career-section'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

export const DesktopCarousel = () => {

    const [slide, setSlide] = useState(0)

    const settings = {
        dots: true,
        vertical: true,
        verticalSwiping: true,
        speed: 300,
        infinite: false,
        slidesToShow: 1.2,
        slidesToScroll: 1,
        beforeChange: (current, next) => {
            setSlide(Math.round(next))
        },
    }
    let sliderRef = useRef(null)

    return (
        <div className='-ms-[53px] -mt-[2px] flex gap-4 ps-7'>
            <div className='mb-3 flex flex-col gap-3 border-white/10'>
                {careerExperiences.map((experience, index) => (
                    <PreviewCard
                        key={experience.id}
                        active={index === slide}
                        {...experience}
                        index={index}
                        onCardHover={(i) => {
                            sliderRef.slickGoTo(i)
                        }}
                    />
                ))}
            </div>
            <div className='slider-container'>
                <Slider {...settings} ref={slider => {
                    sliderRef = slider
                }}>

                    {careerExperiences.map((experience, i) => (
                        <div
                            key={experience.id}
                            className={'w-[500px] pb-4'}
                            onClick={() => sliderRef.slickGoTo(i)}
                        >
                            <DetailCard {...experience} active={slide === i} />
                        </div>
                    ))}

                </Slider>
            </div>

        </div>
    )
}

const PreviewCard = ({ index, onCardHover, from, to, title, active, company, companyUrl }) => (
    <div
        className={`
             border-s-2 border-secondary pb-3 pr-10 ps-5 pt-2  transition-opacity
            ${active ? 'bg-white:50 dark:bg-gradient-to-r dark:from-secondary/20 dark:to-darkCard/50 dark:to-10%' : 'cursor-pointer bg-white opacity-70 dark:bg-darkCard/20  dark:hover:bg-darkCard/50 '} 
            ${index !== careerExperiences.length - 1 ? ' ' : ''}
        `}
        onClick={() => onCardHover(index)}>
        <span className='mb-1 flex  items-end gap-2 text-sm font-medium lg:text-xl'>

            <span className='whitespace-nowrap'>
                <div>
                    <span className='text-xs uppercase opacity-50'>From</span>
                    <br />
                    {from}
                </div>
            </span>
            <span className='text-secondary'>→</span>

            <span className='whitespace-nowrap'>
                <div>
                    <span className='text-xs uppercase opacity-50'>To</span>
                    <br />
                    {to}
                    {to === 'Current' &&
                        <span className='ms-1 animate-pulse text-2xl leading-3 text-secondary'>•</span>}
                </div>
            </span>
        </span>

        <h2 className='my-2 text-lg font-semibold'>
            {title}
        </h2>

    </div>
)
