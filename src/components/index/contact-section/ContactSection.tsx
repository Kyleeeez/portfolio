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
        <div className="relative z-10">
          <Bulb />
        </div>

        <div className="flex flex-col z-0 gap-2 items-center -mt-5 rounded-3xl bg-white p-7 md:px-28 border border-white/[3%] dark:bg-darkCard/50 backdrop-blur-sm">
          <h2 className="text-3xl font-bold mb-3">Contacts</h2>
          <div className="flex flex-wrap gap-3">
            <div className="">
              <a href="mailto:palomba.fra@gmail.com" className="btn secondary" aria-label="Let's talk">
                <MailIcon className="mr-1 h-5 w-5 opacity-80" /> Email
              </a>
            </div>
            <div className="">
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
      </div>
      <div className="grow" />
    </div>
  </div>
);
