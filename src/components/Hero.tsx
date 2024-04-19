'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import KUTE from 'kute.js';
import Image from 'next/image';
import profile from '@/../public/profileHero2.png';
import blobs from 'blobs';
import Blob from './Blob';
import { useSpring, animated } from 'react-spring';
import { FaFacebook, FaPhone } from 'react-icons/fa';
import { PiInstagramLogoFill } from 'react-icons/pi';

const options = {
  complexity: 0.3,
  contrast: 0.6,
  guides: true,
  size: 500,
  color: '#EDCAB7',
};

function Hero() {
  const [blob, setBlob] = useState(blobs.editable(options));
  const [scrollY, setScrollY] = useState(0);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const threshold = 30; // Adjust this value to control the threshold for blob change

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Update the blob SVG only if the scroll position crosses the threshold
    if (Math.abs(scrollY - prevScrollY) >= threshold) {
      const newBlob = blobs.editable(options);
      setBlob(newBlob);
      setPrevScrollY(scrollY);
    }
  }, [scrollY]);

  const props = useSpring({
    svg: blob.children[0].children[0].attributes.d,
  });
  return (
    <div className="relative h-[90vh] flexCenter -mt-10 md:mt-0">
      {/* Blob */}
      <div className="absolute -top-10 left-0 right-0 bottom-0 overflow-x-hidden">
        <Blob svg={props.svg} />
      </div>
      {/* Info */}
      <div className="z-10">
        <div className="flex items-center flex-col h-full text-center space-y-[25%] sm:space-y-[15%] md:space-y-[40%] lg:space-y-[50%] px-[10%] md:px-[15%] lg:px-[15%]">
          <h1 className="titleFont text-terciary text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Da Maminha Ao Prato
          </h1>
          <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl text-center text-darkBrown px-[5%] xs:px-[10%] md:px-[5%] lg:px-[3%]">
            Nutrição Materno-infantil e Amamentação
          </h2>
        </div>
        <div className="absolute left-5 right-5 bottom-[10%] md:bottom-[5%] z-10">
          {/* Socials */}
          <div className="flexCenter space-x-5 ">
            {/* Phone */}
            <div className="bannerIconDiv p-[6px] xl:p-[10px]">
              <FaPhone className="bannerIcon w-4 xl:w-6 h-auto" />
            </div>
            <div className="bannerIconDiv">
              <PiInstagramLogoFill className="bannerIcon " />
            </div>
            <div className="bannerIconDiv">
              <FaFacebook className="bannerIcon" />
            </div>
          </div>
          <div className="flexCenter pt-[5%]">
            <h2 className="handwritten text-xl md:text-2xl lg:text-3xl xl:4xl text-terciary ">
              Ana van der Kellen
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
