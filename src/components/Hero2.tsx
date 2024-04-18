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

function Hero2() {
  const [blob, setBlob] = useState(blobs.editable(options));
  const [scrollY, setScrollY] = useState(0);

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
    // Update the blob SVG based on scroll position
    const newBlob = blobs.editable(options);
    setBlob(newBlob);
  }, [scrollY]);

  const props = useSpring({
    svg: blob.children[0].children[0].attributes.d,
  });

  return (
    <div className="relative">
      <div className="flexCenter overflow-x-hidden">
        <Blob svg={props.svg} />
      </div>
    </div>
  );
}

export default Hero2;
