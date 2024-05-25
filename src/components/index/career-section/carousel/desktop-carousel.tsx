import { careerExperiences } from '../../../../lib/data';
import React, { useEffect, useRef, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { RemoveScroll } from 'react-remove-scroll';
import { DetailCard, PreviewCard } from './Cards';

export const DesktopCarousel = ({ cvMode }) => {
  const [slide, setSlide] = useState(0);
  const [enableBlock, setEnableBlock] = useState(false);
  const settings = {
    dots: true,
    vertical: true,
    verticalSwiping: true,
    speed: 300,
    infinite: false,
    slidesToShow: 1.2,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      setSlide(Math.round(next));
    },
  };
  let sliderRef = useRef(null);

  useEffect(() => {
    if (!cvMode) setSlide(0);
  }, [cvMode]);

  if (cvMode)
    return (
      <div className="-ms-[55px] -mt-[2px] ps-7 gap-3">
        {careerExperiences.map((experience, index) => (
          <div className="mb-5 flex">
            <div className="w-[300px]">
              <PreviewCard cvMode={cvMode} key={experience.id} active={true} {...experience} index={index} />
            </div>
            <div className="border-r-white/10 border-r bg-darkCard/50 py-5" />
            <div className="flex-grow">
              <DetailCard cvMode={cvMode} {...experience} active={true} />
            </div>
          </div>
        ))}
      </div>
    );

  const removeScrollOptions = {
    className: 'slider-container',
    removeScrollBar: false,
    enabled: enableBlock,
    onMouseEnter: () => {
      setEnableBlock(true);
    },
    onMouseLeave: () => {
      setEnableBlock(false);
    },
    onWheel: (e) => {
      if (e.deltaY > 0) {
        sliderRef.slickNext();
        if (slide === careerExperiences.length - 1) setEnableBlock(false);
        else setEnableBlock(true);
      } else {
        sliderRef.slickPrev();
        if (slide === 0) setEnableBlock(false);
        else setEnableBlock(true);
      }
    },
  };

  return (
    <div className="-ms-[55px] -mt-[2px] flex ps-7 gap-3">
      <div className="mb-3 flex flex-col gap-3 border-white/10">
        {careerExperiences.map((experience, index) => (
          <PreviewCard
            key={experience.id}
            active={index === slide}
            {...experience}
            index={index}
            onCardHover={(i) => {
              if (sliderRef) sliderRef.slickGoTo(i);
            }}
          />
        ))}
      </div>
      <RemoveScroll {...removeScrollOptions}>
        <div className="relative">
          <div className="absolute h-10 w-full bottom-0 z-50 bg-gradient-to-t from-light dark:from-[#06081d] dark:to-100% pointer-events-none" />
          <Slider
            {...settings}
            ref={(slider) => {
              sliderRef = slider;
            }}
          >
            {careerExperiences.map((experience, i) => (
              <div key={experience.id} className="mb-4" onClick={() => sliderRef.slickGoTo(i)}>
                <DetailCard {...experience} active={slide === i} />
              </div>
            ))}
          </Slider>
        </div>
      </RemoveScroll>
    </div>
  );
};
