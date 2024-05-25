import React from 'react';
import {
  AtSymbolIcon,
  CurrencyDollarIcon,
  DesktopComputerIcon,
  ExternalLinkIcon,
  OfficeBuildingIcon,
  UsersIcon,
} from '@heroicons/react/solid';
import { Bulb } from '../../bulb';
import { project, projects } from '../../../lib/data';

export const ProjectCard: React.FC<project> = ({
  className,
  title,
  description,
  skills,
  from,
  to,
  platforms,
  userBase,
  premiumBase,
  logo,
  URL,
}: project) => (
  <div
    className={`
            rounded-3xl bg-white p-7 pb-3 relative overflow-hidden border border-white/[3%] dark:bg-darkCard/50 backdrop-blur-lg
            flex flex-col justify-between
     ${className}
    `}
  >
    <div>
      <div className="flex items-center gap-3 mb-5">
        <img src={logo.src} width={70} height={70} alt={logo.alt} className="rounded-2xl" />
        <div>
          <h2 className="mb-3 text-2xl font-medium md:text-3xl">{title}</h2>
          <div className="flex gap-x-4 gap-y-2 overflow-auto md:flex-wrap text-sm md:text-md">
            {URL ? (
              <a
                href={URL}
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
                {platforms}
              </a>
            ) : (
              <div className="flex items-center gap-1 whitespace-nowrap rounded-full bg-light dark:bg-dark/60 px-2 py-0.5">
                <AtSymbolIcon width={20} className="inline-block text-secondary" />
                {platforms}
              </div>
            )}

            {userBase && (
              <div className="*:hover:opacity-50 group flex items-center gap-1 whitespace-nowrap rounded-full bg-light dark:bg-dark/60 px-2 py-0.5">
                <UsersIcon width={20} className="inline-block text-secondary" />
                {userBase}
              </div>
            )}

            {premiumBase && (
              <div className="*:hover:opacity-50 group flex items-center gap-1 whitespace-nowrap rounded-full bg-light dark:bg-dark/60 px-2 py-0.5">
                <CurrencyDollarIcon width={20} className="inline-block text-secondary" />
                {premiumBase}
              </div>
            )}
          </div>
        </div>
      </div>
      <p>{description}</p>
    </div>
    <div>
      <div className="mt-8">
        <div className="uppercase opacity-50 text-xs md:text-sm mb-2">Tech stack</div>
        <div className="flex flex-wrap gap-2">
          {skills?.map(({ src, alt }, i) => (
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
  </div>
);

export const ProjectsSection = () => (
  <div className="relative mt-24">
    <div className="flex items-center mb-8">
      <div className="absolute -left-[2.8rem]">
        <Bulb variant="yellow" />
      </div>
      <h1 className="text-3xl font-bold">Projects</h1>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4">
      <ProjectCard {...projects[0]} className="md:row-span-1 md:col-span-1" />
      <ProjectCard {...projects[1]} className="md:row-span-1 md:col-span-1" />
      <ProjectCard {...projects[2]} className="md:row-span-1 md:col-span-1" />
    </div>
  </div>
);
