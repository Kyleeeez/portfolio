import React, { useState } from 'react';
import { ExternalLinkIcon } from '@heroicons/react/solid';
import { DocumentTextIcon } from '@heroicons/react/outline';
import { Bulb } from '../../bulb';
import { DesktopCarousel } from './carousel/desktop-carousel';
import { MobileCarousel } from './carousel/mobile-carousel';
import useIsMobile from '../../../hooks/isMobile';

export const CareerSection = () => {
  const isMobile = useIsMobile();

  const [cvMode, setCvMode] = useState(false);

  return (
    <div className="relative mb-40 mt-32 md:mt-96" id="careerSection">
      <Bulb />

      <div className="flex justify-between items-end pb-3 ">
        <div>
          <h2 className="text-2xl font-bold md:mb-2 md:text-4xl -mt-1">Career</h2>

          {!cvMode && (
            <p className="hidden ps-1 text-sm text-white/40 md:block">Click, scroll, or drag cards to navigate</p>
          )}
        </div>

        {!isMobile && (
          <label className="inline-flex gap-3 items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              checked={cvMode}
              onChange={() => setCvMode((curr) => !curr)}
            />
            <span>
              <DocumentTextIcon className="h-5 w-5 inline-block mb-1" /> CV view
            </span>
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
          </label>
        )}
      </div>

      {isMobile ? <MobileCarousel /> : <DesktopCarousel cvMode={cvMode} />}
    </div>
  );
};

export const DetailCard = ({ active, title, from, to, companyUrl, company, description, skills, cvMode }) => (
  <div
    className={`${active ? '' : 'opacity-40'}
            rounded-lg bg-white px-4
            py-5 pt-7 hover:opacity-100 active:cursor-grabbing dark:bg-darkCard/50 md:px-8 md:pb-3
            ${cvMode ? ' rounded-none rounded-r-xl' : ' cursor-grab '}
            `}
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
      {!cvMode && (
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
      )}
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
