'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import KUTE from 'kute.js';
import Image from 'next/image';
import profile from '@/../public/profileHero2.png';
import blobs from 'blobs';
import Blob from './Blob';
import { useSpring, animated } from 'react-spring';

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
    <div className="relative h-[80vh] lg:h-[85vh] flexCenter">
      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-x-hidden">
        <Blob svg={props.svg} />
      </div>
      <div className="absolute top-[35%] left-0 right-0 bottom-0 z-10">
        <div className="flex items-center flex-col h-full text-center space-y-5 px-[10%]">
          <h1 className="titleFont text-terciary text-4xl md:text-5xl lg:text-5xl xl:text-7xl">
            Da Maminha Ao Prato
          </h1>
          <h2 className="handwritten text-darkBrown text-xl md:text-2xl xl:text-3xl">
            Ana van der Kellen
          </h2>
        </div>
        <div className="absolute left-5 right-5 bottom-[15%] md:bottom-[25%] z-10 text-xl md:text-2xl lg:text-3xl  text-center text-terciary">
          <h2>Nutrição Materno-infantil e Amamentação</h2>
        </div>
      </div>
    </div>
  );
}

export default Hero;
