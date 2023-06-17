import React, { useEffect, useCallback, useState, useRef } from 'react';

import { motion, useViewportScroll } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import ReactGA from 'react-ga';
import { FiChevronDown } from 'react-icons/fi';
import { useMediaQuery } from 'react-responsive';

import { Logo } from './Logo';

ReactGA.initialize('G-C6VDJ5GJVS');

const Hero: React.FC = () => {
  const heroImageRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useViewportScroll();
  const [showScrollButton, setShowScrollButton] = useState(true);
  const [surveyWindow, setSurveyWindow] = useState<Window | null>(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [emailInputValue, setEmailInputValue] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const heroImage = heroImageRef.current;
      const scrollPosition = scrollY.get();

      if (heroImage) {
        if (scrollPosition > 0) {
          heroImage.style.opacity = '0';
        } else {
          heroImage.style.opacity = '1';
        }
      }

      setShowScrollButton(scrollPosition > 0.01);
    };

    scrollY.onChange(handleScroll);

    return () => {
      scrollY.clearListeners();
    };
  }, [scrollY]);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  const handleEmailInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmailInputValue(event.target.value);
    },
    []
  );

  const validateEmail = useCallback(
    (event: React.FormEvent) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(emailInputValue)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
      }
    },
    [emailInputValue]
  );

  const openSurveyPopup = () => {
    const width = 800;
    const height = 600;
    const left = window.innerWidth / 2 - width / 2;
    const top = window.innerHeight / 2 - height / 2;

    const newSurveyWindow = window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLSeIyYyHaHuQaF5UmlyT-HlWWsHyGgonRSfgtNLhdQ88JcKEaw/viewform?embedded=true',
      '_blank',
      `width=${width},height=${height},left=${left},top=${top}`
    );

    setSurveyWindow(newSurveyWindow);
  };

  useEffect(() => {
    const handleSurveyCompletion = (event: MessageEvent) => {
      if (event.data === 'surveyCompleted' && surveyWindow) {
        surveyWindow.close();
        alert('Redirecting to Energywise...');
        window.location.href = 'https://energywise.solutions/';
      }
    };

    window.addEventListener('message', handleSurveyCompletion);

    return () => {
      window.removeEventListener('message', handleSurveyCompletion);
    };
  }, [surveyWindow]);

  return (
    <div className="min-h-screen flex flex-col text-white">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex">
          <Logo xl />
        </div>
        <div className="flex justify-end">
          <motion.a
            className="text-white"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.9 }}
            href="https://github.com/hoonsubin/energywise-homepage"
          >
            GitHub
          </motion.a>
          <Link href="/">
            <a className="ml-4 text-white">Sign in</a>
          </Link>
        </div>
      </div>
      <main className="container mx-auto px-6 pt-16 flex-1 text-center relative">
        <div className="absolute inset-0 z-0 overflow-hidden rounded-lg">
          <div id="hero-image" className="hero-image">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 z-0 overflow-hidden rounded-lg"
              ref={heroImageRef}
            >
              <Image
                src="/assets/images/herobanner.jpg"
                alt="Image description"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="opacity-70"
              />
            </motion.div>
            <div
              className={`${
                isMobile
                  ? 'fixed bottom-4 right-4 md:hidden'
                  : 'absolute bottom-8 left-1/2 transform -translate-x-1/2'
              }`}
            >
              <motion.button
                className="flex items-center justify-center bg-white rounded-full p-2 hover:opacity-75 duration-150"
                style={{ backgroundColor: '#E4FF1A' }}
                onClick={scrollToContent}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: showScrollButton ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FiChevronDown className="text-black w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </div>
        <div className="relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-1xl md:text-2xl lg:text-4xl"
          >
            The simplest way to get started with your
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-3xl md:text-8xl lg:text-10xl font-black uppercase mb-8"
          >
            home EV charging station
          </motion.h1>
          <div className="text-lg md:text-2xl ls:text-3xl py-2 px-4 md:py-4 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 w-fit mx-auto mb-8 rounded-full survey-button">
            <motion.button
              onClick={openSurveyPopup}
              className="block w-full h-full rounded-full flex items-center justify-center text-black font-bold text-xl md:text-2xl lg:text-4xl"
              style={{ backgroundColor: '#E4FF1A', padding: '1rem' }}
              whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.9 }}
            >
              Take Survey
            </motion.button>
          </div>
          <form action="------" method="post" target="_blank">
            <div className="flex flex-col md:flex-row justify-center items-center mb-4">
              <input
                placeholder="Your email address"
                type="email"
                id="email"
                name="member[email]"
                className="text-lg md:text-2xl placeholder:text-gray-400 placeholder-italic py-4 px-6 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10
                focus:bg-opacity-20 duration-150 rounded-full md:rounded-tr-none md:rounded-br-none mb-4 md:mb-0 outline-none"
                value={emailInputValue}
                onChange={handleEmailInputChange}
              />
              <div className="flex-shrink-0">
                <motion.div
                  whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.a
                    href="mailto:team@energywise.solutions?subject=I'm interested in energywise&body=I would like to learn more about energywise, please keep me updated"
                    className="bg-primary rounded-full md:rounded-tl-none md:rounded-bl-none text-lg md:text-2xl py-4 px-6 md:px-10 lg:py-6 lg:px-12 cursor-pointer text-black font-bold"
                    style={{ backgroundColor: '#E4FF1A' }}
                    onClick={validateEmail}
                  >
                    <span className="inline-block hover:scale-110 transition-transform">
                      Join Beta
                    </span>
                  </motion.a>
                </motion.div>
              </div>
            </div>

            <div className="opacity-75 italic">
              By subscribing, you agree with Energywise{' '}
              <a
                target="_blank"
                href="https://energywise.solutions/privacy"
                className="hover:opacity-80 duration-150"
                rel="noreferrer"
              >
                T&amp;C
              </a>{' '}
              and{' '}
              <a
                target="_blank"
                href="https://energywise.solutions/"
                className="hover:opacity-80 duration-150"
                rel="noreferrer"
              >
                Privacy Policy
              </a>
              .
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Hero;
