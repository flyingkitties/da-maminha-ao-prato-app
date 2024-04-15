import Image from 'next/image';
import React from 'react';
import profile from '@/../public/profileHero2.png';
import Link from 'next/link';
function Hero() {
  return (
    <div className="bg-primary pb-10">
      <div className="grid gap-8 md:grid-cols-2 py-16 xl:px-[10%] md:px-[10%] px-5">
        {/* Photo */}

        <div className="flexCenter z-10 md:hidden">
          <Image
            alt="Ana Keller profile image"
            src={profile}
            className="w-full h-auto px-5"
          />
        </div>

        {/* title */}
        <div className="flexCenter flex-col space-y-3 md:space-y-5 text-center">
          <h1 className="titleFont text-terciary text-4xl md:text-4xl lg:text-5xl xl:text-7xl">
            Da Maminha Ao Prato
          </h1>
          <h2 className="handwritten text-darkBrown text-xl md:text-xl lg:text-2xl">
            Ana van der Kellen
          </h2>
        </div>
        {/* Photo */}
        <div className="z-10 hidden md:flexCenter">
          <Image
            alt="Ana Keller profile image"
            src={profile}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
