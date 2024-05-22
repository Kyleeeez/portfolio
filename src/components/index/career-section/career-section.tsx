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
      <Bulb small={true} />

      <div className="flex justify-between items-end pb-3 ">
        <div>
          <h2 className="text-3xl font-bold md:mb-2 md:text-4xl -mt-1">Career</h2>

          {cvMode ? (
            <p className="hidden ps-1 text-sm text-white/40 md:block">Scroll to navigate</p>
          ) : (
            <p className="hidden ps-1 text-sm text-white/40 md:block">Click, scroll, or drag cards to navigate</p>
          )}
        </div>

        {!isMobile && (
          // eslint-disable-next-line jsx-a11y/label-has-associated-control
          <label className="inline-flex gap-2 items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              checked={cvMode}
              onChange={() => setCvMode((curr) => !curr)}
            />
            <span className="opacity-75">
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
