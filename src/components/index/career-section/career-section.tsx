import React from 'react';
import { ExternalLinkIcon } from '@heroicons/react/solid';
import { Bulb } from '../../bulb';
import { DesktopCarousel } from './carousel/desktop-carousel';
import { MobileCarousel } from './carousel/mobile-carousel';
import useIsMobile from '../../../hooks/isMobile';

export const CareerSection = () => {
  const isMobile = useIsMobile();

  return (
    <div className="relative mb-40 mt-32 md:mt-96" id="careerSection">
      <Bulb />
      <h2 className="text-2xl font-bold md:mb-2 md:text-4xl">Career</h2>

      <p className="hidden pb-3 ps-1 text-sm text-white/40 md:block">
        You can click below, scroll, or drag cards to navigate
      </p>

      {isMobile ? <MobileCarousel /> : <DesktopCarousel />}
    </div>
  );
};

export const DetailCard = ({ active, title, from, to, companyUrl, company, description, skills }) => (
  <div
    className={`${active ? '' : 'opacity-40'}
            cursor-grab rounded-lg bg-white px-4
            py-5 pt-7 transition-all hover:opacity-100 active:cursor-grabbing dark:bg-darkCard/50 md:px-8 md:pb-3`}
  >
    <div className="flex justify-between items-start flex-wrap gap-3">
      <div>
        <h2 className="mb-1 text-2xl  font-medium md:text-3xl">{title}</h2>

        <a
          href={companyUrl}
          target="_blank"
          className="font-medium text-secondary *:hover:opacity-50 group"
          rel="noopener noreferrer"
        >
          {company}
          <ExternalLinkIcon
            width={20}
            className="inline-block -translate-x-0.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
          />
        </a>
      </div>
      <span className="flex items-end gap-2 text-sm font-medium lg:text-xl">
        <span className="whitespace-nowrap flex flex-col">
          <span className="text-xs uppercase opacity-50">From</span>
          {from}
        </span>
        <span className="text-secondary">→</span>

        <span className="whitespace-nowrap flex flex-col">
          <span className="text-xs uppercase opacity-50">To</span>
          <span>
            {to}
            {to === 'Current' && <span className="ms-1 animate-pulse text-2xl leading-3 text-secondary">•</span>}
          </span>
        </span>
      </span>
    </div>

    <div className="mt-4 border-t border-primary/10 dark:border-white/10" />

    <div className="max-w-[700px] ps-5 pt-4 md:mt-4">
      <ul className="list-disc">
        {description.split('\n').map((line) => (
          <li key={line} className="mb-2">
            {line}
          </li>
        ))}
      </ul>
    </div>

    <div className="mt-8 md:mt-12">
      <div className="uppercase opacity-50 text-sm mb-2">Tech stack</div>
      <div className="flex flex-wrap gap-2">
        {!!skills?.length &&
          skills.map(({ src, alt }, i) => (
            <div key={src} className="flex items-center rounded bg-light px-3 py-2 dark:bg-dark/20">
              <span style={{ width: 17, height: 17 }}>
                <img key={i} src={src} alt={`${String(alt)} logo`} width={17} height={17} />
              </span>
              <span className="pl-2 opacity-70">{alt}</span>
            </div>
          ))}
      </div>
    </div>
  </div>
);
