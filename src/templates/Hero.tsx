import React, { useEffect, useCallback, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Logo } from './Logo';

export const Hero = () => {
  const heroImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let prevScrollY = 0;

    const handleScroll = () => {
      const heroImage = heroImageRef.current;

      if (heroImage) {
        const { scrollY } = window;

        if (scrollY > prevScrollY) {
          // Scrolling down, hide the image
          heroImage.style.opacity = '0';
        } else {
          // Scrolling up, show the image
          heroImage.style.opacity = '1';
        }

        prevScrollY = scrollY;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [emailInputValue, setEmailInputValue] = useState('');

  const handleEmailInputChange = useCallback((event) => {
    setEmailInputValue(event.target.value);
  }, []);

  const validateEmail = useCallback(
    (event) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(emailInputValue)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
      }
    },
    [emailInputValue]
  );

  return (
    <div className="min-h-screen flex flex-col text-white">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex">
          <Logo xl />
        </div>
        <div className="flex justify-end">
          <a
            className="text-white"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/hoonsubin/energywise-homepage"
          >
            GitHub
          </a>
          <Link href="/">
            <a className="ml-4 text-white">Sign in</a>
          </Link>
        </div>
      </div>
      <main className="container mx-auto px-6 pt-16 flex-1 text-center relative">
        <div className="absolute inset-0 z-0 overflow-hidden rounded-lg">
          <div id="hero-image" className="hero-image" ref={heroImageRef}>
            <div
              className="absolute inset-0 z-0 overflow-hidden rounded-lg"
              style={{ opacity: 0, transform: 'scale(0.8)' }}
            >
              <Image
                src="/assets/images/herobanner.jpg"
                alt="Image description"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="opacity-70"
              />
            </div>
          </div>
        </div>
        <div className="relative z-10">
          <h2 className="text-1xl md:text-2xl lg:text-4xl">The simplest way to get started with your</h2>
          <h1 className="text-3xl md:text-8xl lg:text-10xl font-black uppercase mb-8">
            home EV charging station
          </h1>
          <div className="text-lg md:text-2xl ls:text-3xl py-2 px-4 md:py-4 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 w-fit mx-auto mb-8 rounded-full survey-button">
            <a
              href="https://energywise.solutions/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full rounded-full flex items-center justify-center text-black font-bold text-xl md:text-2xl lg:text-4xl"
              style={{ backgroundColor: '#E4FF1A', padding: '1rem' }}
            >
              Take Survey
            </a>
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
                <a
                  href="mailto:team@energywise.solutions?subject=I'm interested in energywise&body=I would like to learn more about energywise, please keep me updated"
                  className="bg-primary rounded-full md:rounded-tl-none
                  md:rounded-bl-none text-lg md:text-2xl py-4 px-6 md:px-10 lg:py-6
                  lg:px-12 cursor-pointer hover:opacity-75 duration-150 text-black font-bold"
                  style={{ backgroundColor: '#E4FF1A' }}
                  onClick={validateEmail}
                >
                  Join Beta
                </a>
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
