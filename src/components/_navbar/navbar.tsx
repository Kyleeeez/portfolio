import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import useScrollPosition from '@react-hook/window-scroll';
import { Switch } from '../switch/switch';

export const Navbar = () => {
  const { setTheme, resolvedTheme } = useTheme();

  const scrollY = useScrollPosition(60 /* fps */);

  const [lastScroll, setLastScroll] = useState(0);

  const [showNavbar, setShowNavbar] = useState(true);

  const switchTheme = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      setShowNavbar(scrollY <= lastScroll || scrollY < 150);
      setLastScroll(scrollY);

      // Clear the previous timeout if it exists
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      // Set a new timeout to show the navbar after 3 seconds of no scrolling
      timeoutId = setTimeout(() => {
        setShowNavbar(lastScroll > 100);
      }, 3000);
    };

    handleScroll();

    return () => {
      // Clear the timeout when the component unmounts
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [scrollY]);

  return (
    <motion.div
      animate={showNavbar ? { translateY: 0 } : { translateY: -85 }}
      className="fixed left-0 top-0 z-50 w-full border-b bg-light/40 backdrop-blur transition-colors dark:border-white/10 dark:bg-dark/40"
    >
      <div className="container px-4 md:px-0 flex items-center justify-between py-5">
        <Link href="/" legacyBehavior={true}>
          <a aria-label="Francesco Palomba's logo">
            <div className="relative flex h-10 items-center">
              <SVGLogo />

              <motion.div
                className="absolute left-7 hidden pl-3 text-xl md:block font-medium"
                style={{ lineHeight: 1.15 }}
                transition={{ duration: 0.15 }}
                initial={{ opacity: 0 }}
                animate={scrollY > 230 ? { y: 0, opacity: 1 } : { y: 3, opacity: 0 }}
              >
                Francesco
                <br />
                Palomba
              </motion.div>
            </div>
          </a>
        </Link>

        <div className="relative">
          <div className="flex justify-center space-x-10 text-lg">
            <button
              className=" opacity-50 hover:opacity-100"
              onClick={() => {
                document.getElementById('careerSection').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="text-primary dark:text-white">Career</span>
            </button>

            <button
              className=" opacity-50 hover:opacity-100"
              onClick={() => {
                document.getElementById('contactSection').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="text-primary dark:text-white">Contact</span>
            </button>
          </div>
        </div>

        <div />
        <Switch switchTheme={switchTheme} theme={resolvedTheme} />
      </div>
    </motion.div>
  );
};

const SVGLogo = () => (
  <svg
    style={{ minWidth: 30 }}
    width="30"
    height="40"
    viewBox="0 0 39 47"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className="fill-current text-primary dark:text-white"
      attributeName="fill"
      d="M0 47H7.8V41.0162V23.5C7.8 14.8475 14.7844 7.83333 23.4 7.83333H39V5.98383V0H23.4C10.4765 0 0 10.5213 0 23.5V47Z"
    />
    <path
      className="fill-current text-primary dark:text-white"
      attributeName="fill"
      d="M39 15.6667V23.5C39 32.1525 32.0156 39.1667 23.4 39.1667V47H15.6V45.6628V37.0707V31.3333H23.4C27.7078 31.3333 31.2 27.8262 31.2 23.5H23.4H15.6C15.6 19.1738 19.0922 15.6667 23.4 15.6667H36.913H39Z"
    />
  </svg>
);
