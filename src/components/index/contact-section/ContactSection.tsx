import React from 'react';
import { MailIcon, UserIcon } from '@heroicons/react/solid';
import { Bulb } from '../../bulb';

export const ContactSection = () => (
  <div className="relative container px-0" id="contactSection">
    <div className="flex h-32">
      <div className="grow rounded-bl-full border-b-2 border-l-2 border-darkCard/20 dark:border-white/10  h-1/2" />
      <div className="w-32 flex">
        <div className="w-1/2 rounded-tr-full border-t-2 border-r-2 border-darkCard/20 dark:border-white/10  h-1/2 self-end -translate-y-0.5" />
      </div>
      <div className="grow" />
    </div>
    <div className="flex -mt-3">
      <div className="grow" />
      <div className="flex flex-col items-center">
        <Bulb light={true} small={true} />
        <h2 className="text-3xl font-bold my-3">Contacts</h2>
        <div className="flex flex-wrap gap-3">
          <div className="rounded-lg bg-white p-5 dark:bg-darkCard/50 relative overflow-hidden">
            <div className="absolute bg-gradient-radial from-secondary/5 to-70% h-[200%] w-3/4 -top-0 -translate-y-1/2 left-1/3 -z-1" />
            <a href="mailto:palomba.fra@gmail.com" className="btn secondary" aria-label="Let's talk">
              <MailIcon className="mr-1 h-5 w-5 opacity-80" /> Email
            </a>
          </div>
          <div className="rounded-lg bg-white p-5 dark:bg-darkCard/50 relative overflow-hidden">
            <div className="absolute bg-gradient-radial from-secondary/5 to-70% h-[200%] w-3/4 -top-0 -translate-y-1/2 left-1/3 -z-1" />
            <a
              href="https://www.linkedin.com/in/francesco-palomba/"
              target="_blank"
              className="btn primary"
              rel="noreferrer"
            >
              <UserIcon className="h-5 w-5" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="grow" />
    </div>
  </div>
);
