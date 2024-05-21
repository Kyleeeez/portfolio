import React from 'react';
import {
  AtSymbolIcon,
  BriefcaseIcon,
  DesktopComputerIcon,
  ExternalLinkIcon,
  LocationMarkerIcon,
  OfficeBuildingIcon,
} from '@heroicons/react/solid';
import { GlobeAltIcon } from '@heroicons/react/outline';

export const PreviewCard = ({ index, onCardHover, from, to, title, active, company, companyUrl, cvMode }) => (
  <div
    className={`
             border-s-2 border-secondary pb-3 pr-10 ps-5 pt-2  transition-opacity
            ${
              active
                ? 'bg-white:50 dark:bg-gradient-to-r dark:from-secondary/20 dark:to-darkCard/50 dark:to-10%'
                : 'cursor-pointer bg-white opacity-80 dark:bg-darkCard/20  hover:opacity-100'
            }
            ${cvMode ? ' rounded-none h-full  dark:from-darkCard/50' : ''} 
        `}
    onClick={() => onCardHover && onCardHover(index)}
  >
    <span className="mb-1 flex font-medium items-end gap-2 text-sm lg:text-xl">
      <span className="whitespace-nowrap">
        <div>
          <span className="text-xs uppercase opacity-50">From</span>
          <br />
          {from}
        </div>
      </span>
      <span className="text-secondary">→</span>

      <span className="whitespace-nowrap">
        <div>
          <span className="text-xs uppercase opacity-50">To</span>
          <br />
          {to}
          {to === 'Current' && <span className="ms-1 animate-pulse text-2xl leading-3 text-secondary">•</span>}
        </div>
      </span>
    </span>

    {!cvMode && <h2 className="my-2 text-lg font-medium">{title}</h2>}
  </div>
);

export const DetailCard = ({
  active,
  title,
  from,
  to,
  companyUrl,
  company,
  description,
  location,
  skills,
  cvMode,
  HQ,
}) => (
  <div
    className={`${active ? '' : 'opacity-40'}
            rounded-lg bg-white px-4
            py-5 pt-8 hover:opacity-100 dark:bg-darkCard/50 md:px-8 md:pb-3 transition-opacity
            ${cvMode ? ' rounded-none rounded-r-xl' : ' cursor-grab active:cursor-grabbing '}
            `}
  >
    <div className="flex justify-between items-start flex-wrap gap-3">
      <div>
        <h2 className="mb-3 text-2xl font-medium md:text-3xl">{title}</h2>

        <div className="flex gap-x-4 flex-wrap">
          <a
            href={companyUrl}
            target="_blank"
            className="text-lg *:hover:opacity-50 group flex items-center gap-1 hover:text-secondary"
            rel="noopener noreferrer"
          >
            <AtSymbolIcon
              width={20}
              className="inline-block text-secondary group-hover:-translate-y-2 group-hover:opacity-0 transition-all"
            />

            <ExternalLinkIcon
              width={20}
              className="absolute translate-y-1 hidden md:block opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all "
            />
            {company}
          </a>

          <div className="text-lg *:hover:opacity-50 group flex items-center gap-1">
            <DesktopComputerIcon width={20} className="inline-block text-secondary" />
            {location}
          </div>

          <div className="text-lg *:hover:opacity-50 group flex items-center gap-1">
            <OfficeBuildingIcon width={20} className="inline-block text-secondary" />
            {HQ}
          </div>
        </div>
      </div>
      {!cvMode && (
        <span className="flex md:hidden items-end gap-2 text-sm font-medium lg:text-xl">
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

    <div className="pt-2 md:mt-4">
      <p className="mb-3 opacity-75 italic hidden">
        App/tests development, maintaining and ensuring the core functionality of services. My responsibilities also
        include migrating packages from on-premises environments to cloud platforms like AWS. Technical guidance to PMs,
        and designers through estimations, feasibility evaluations, and UX recommendations.
      </p>

      <div className="uppercase opacity-50 text-sm mb-2">Main responsibilities</div>
      <ul className="ps-5 list-disc marker:text-secondary">
        {description.split('\n').map((line) => (
          <li key={line} className="mb-2">
            {line}
          </li>
        ))}
      </ul>
    </div>

    <p className="hidden">Crucial activities</p>

    <div className="mt-8 md:mt-12">
      <div className="uppercase opacity-50 text-sm mb-2">Tech stack</div>
      <div className="flex flex-wrap gap-2">
        {!!skills?.length &&
          skills.map(({ src, alt }, i) => (
            <div key={src} className="flex items-center rounded bg-light px-3 py-2 dark:bg-dark/50">
              <span style={{ width: 17, height: 17 }}>
                <img key={i} src={src} alt={`${String(alt)} logo`} width={17} height={17} />
              </span>
              <span className="pl-2">{alt}</span>
            </div>
          ))}
      </div>
    </div>
  </div>
);
