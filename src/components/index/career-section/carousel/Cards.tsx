import React from 'react';
import { AtSymbolIcon, DesktopComputerIcon, ExternalLinkIcon, OfficeBuildingIcon } from '@heroicons/react/solid';
import { ChevronRightIcon } from '@heroicons/react/outline';
import { Opt } from '../../../../lib/data';

const AnimatedAbsoluteLeftBorder = ({ active }) => (
  <div
    className={`
            ${
              active
                ? 'transition-none group-hover:duration-100 h-full '
                : 'h-0  cursor-pointer opacity-80 hover:opacity-100 group-hover:transition-all group-hover:ease-in-out '
            }
        top-0 group-hover:h-full group-hover:duration-[2s] w-1 bg-gradient-secondary absolute -left-[1px]`}
  >
    <div className="hidden dark:block absolute w-8 h-full bg-gradient-to-r from-transparent via-secondary/20 to-transparent to -translate-x-1/2 left-1/2" />
  </div>
);

export const PreviewCard = ({ index, onCardHover, from, to, title, active, company, companyUrl, cvMode }) => {
  let timeoutId = null;

  const handleMouseEnter = () => {
    timeoutId = setTimeout(() => {
      if (onCardHover) onCardHover(index);
    }, 2000); // Adjust the delay (in milliseconds) as needed
  };

  const handleMouseLeave = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
  };

  return (
    <div
      className={`
             pb-3 pr-10 ps-8 pt-2  transition-opacity relative group group border border-white/[3%]
            ${
              active
                ? 'bg-white  dark:bg-gradient-to-tl dark:bg-dark dark:from-dark dark:to-secondary/[5%] '
                : 'cursor-pointer  bg-white/70 dark:bg-dark '
            }
            ${cvMode ? ' rounded-none h-full dark:bg-darkCard/50 ' : ' rounded-r-3xl '} 
        `}
      onClick={() => onCardHover && onCardHover(index)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <AnimatedAbsoluteLeftBorder active={active} />

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
            {to === 'Current' ? (
              <span className="ms-1 animate-pulse text-[22px] leading-3 gradient-text-secondary">{to}</span>
            ) : (
              to
            )}
          </div>
        </span>
      </span>

      {!cvMode && <h2 className="my-2 text-lg font-medium">{title}</h2>}

      <ChevronRightIcon
        width={20}
        className={`absolute right-1 top-1/2 -translate-y-1/2 transition-all opacity-0 
      ${active ? 'translate-x-2  ' : ' -translate-x-1 group-hover:opacity-50 group-hover:translate-x-0 '}
      `}
      />
    </div>
  );
};

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
}: Opt<typeof DetailCard, 'cvMode'>) => (
  <div
    className={`${active ? 'dark:from-dark dark:to-secondary/[5%] ' : 'opacity-50 '} hover:opacity-100 
            rounded-3xl bg-white px-4 relative overflow-hidden border border-white/[3%]
            py-5 md:pt-8 backdrop-blur-lg  md:px-8 md:pb-3 transition-opacity
              dark:bg-gradient-to-tr dark:bg-dark/50 
            ${cvMode ? ' rounded-none rounded-r-xl ' : ' cursor-grab active:cursor-grabbing '}
            `}
  >
    {!cvMode && (
      <span className="flex md:hidden items-end gap-2 font-medium mb-5">
        <span className="whitespace-nowrap flex flex-col">
          <span className="text-xs uppercase opacity-50">From</span>
          {from}
        </span>
        <span className="text-secondary">→</span>

        <span className="whitespace-nowrap flex flex-col">
          <span className="text-xs uppercase opacity-50">To</span>
          <span>
            {to === 'Current' ? (
              <span className="text-xl ms-1 animate-pulse leading-3 gradient-text-secondary">{to}</span>
            ) : (
              to
            )}
          </span>
        </span>
      </span>
    )}

    <div className="relative">
      <h2 className="mb-3 text-2xl font-medium md:text-3xl">{title}</h2>

      <div className="flex gap-x-4 gap-y-2 overflow-auto text-sm md:text-md">
        <a
          href={companyUrl}
          target="_blank"
          className="*:hover:opacity-50 group flex items-center gap-1 hover:text-secondary whitespace-nowrap rounded-full bg-light dark:bg-dark/60 px-2 py-0.5"
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

        <div className="*:hover:opacity-50 group flex items-center gap-1 whitespace-nowrap rounded-full bg-light dark:bg-dark/60 px-2 py-0.5">
          <DesktopComputerIcon width={20} className="inline-block text-secondary" />
          {location}
        </div>

        <div className="*:hover:opacity-50 group flex items-center gap-1 whitespace-nowrap rounded-full bg-light dark:bg-dark/60 px-2 py-0.5">
          <OfficeBuildingIcon width={20} className="inline-block text-secondary" />
          {HQ}
        </div>
      </div>

      <div className="mt-4 border-t border-primary/10 dark:border-white/10" />

      <div className="pt-2 mt-2 md:mt-4">
        <p className="mb-3 opacity-75 italic hidden">
          App/tests development, maintaining and ensuring the core functionality of services. My responsibilities also
          include migrating packages from on-premises environments to cloud platforms like AWS. Technical guidance to
          PMs, and designers through estimations, feasibility evaluations, and UX recommendations.
        </p>

        <div className="uppercase opacity-50 text-xs md:text-sm mb-2">Main responsibilities</div>
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
        <div className="uppercase opacity-50 text-xs md:text-sm mb-2">Tech stack</div>
        <div className="flex flex-wrap gap-2">
          {!!skills?.length &&
            skills.map(({ src, alt }, i) => (
              <div key={src} className="flex items-center rounded bg-light px-3 py-2 dark:bg-dark">
                <span style={{ width: 17, height: 17 }}>
                  <img key={`${String(alt)} logo`} src={src} alt={`${String(alt)} logo`} width={17} height={17} />
                </span>
                <span className="pl-2">{alt}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  </div>
);
