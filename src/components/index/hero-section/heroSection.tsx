import { ChevronDoubleDownIcon, MailIcon } from '@heroicons/react/solid';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { loader, splineContainer } from './heroSection.module.scss';
import { Bulb } from '../../bulb';
import useIsMobile from '../../../hooks/isMobile';

export const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  const [Spline, setSpline] = useState(null);

  const isMobile = useIsMobile();

  useEffect(() => {
    setSpline(!isMobile ? dynamic(async () => import('@splinetool/react-spline')) : null);
  }, [isMobile]);

  return (
    <>
      <div className="relative -translate-y-4">
        <Bulb />

        <p className="mt-0 pb-0 text-2xl md:mb-2">Hi, I&apos;m</p>
        <h1 className="mb-2 font-display font-semibold text-5xl md:text-[4.5rem]">Francesco Palomba</h1>

        <h2 className="text-md mb-4 font-medium uppercase tracking-[0.1em] text-secondary md:text-[1.24rem]">
          Senior frontend engineer
          <span className="px-1 text-primary dark:text-white">
            &<br className="md:hidden" />
          </span>
          UI designer
        </h2>

        <p className="mb-10 w-full md:text-lg">
          I&apos;m {new Date().getFullYear() - 1995} years old, with{' '}
          <span className="text-secondary">{new Date().getFullYear() - 2016}+ years experience </span>
          in turning my
          <span className="whitespace-nowrap"> designs into clean, robust code.</span>
          <br />
          Curious lifelong learner, I firmly believe in the power of collaboration.
          <br />
          Always looking for the next problem to solve.
          <br />
        </p>

        <div className="flex gap-x-3">
          <button
            className="btn primary"
            aria-label="Read my story"
            onClick={() => {
              document.getElementById('careerSection').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <ChevronDoubleDownIcon className="h-5 w-5" /> My story
          </button>

          <a href="mailto:palomba.fra@gmail.com" className="btn secondary" aria-label="Let's talk">
            <MailIcon className="mr-1 h-5 w-5 opacity-80" /> Let&apos;s talk
          </a>
        </div>
      </div>

      <div className="hidden md:block">
        <div className={splineContainer}>
          <AnimatePresence>
            {!loaded && !isMobile && (
              <motion.div className={loader} exit={{ opacity: 0 }}>
                <img src="/images/lazy-cubes.png" alt="translucid cube" />

                <svg
                  className="animate-spin text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0 }}
            animate={loaded && { opacity: 1 }}
            className="cursor-grab active:cursor-grabbing"
          >
            {Boolean(Spline) && (
              <Spline
                onLoad={() => {
                  setLoaded(true);
                }}
                scene="https://prod.spline.design/pobLkzB1W8D2qzId/scene.splinecode"
              />
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
};
