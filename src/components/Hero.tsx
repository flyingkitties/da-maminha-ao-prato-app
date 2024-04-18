import Image from 'next/image';
import React from 'react';
import profile from '@/../public/profileHero2.png';
import Link from 'next/link';
function Hero() {
  return (
    <div className="bg-primary pb-10 lg:pb-0">
      <div className="grid gap-8 md:grid-cols-2 py-10 sm:py-16 lg:py-[5%] xl:py-[2%] md:px-[10%] px-5">
        {/* Photo mobile view*/}
        <div className="flexCenter z-10 md:hidden">
          <Image
            alt="Ana Keller profile image"
            src={profile}
            className="w-56 md:w-full h-auto"
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
        {/* Photo desktop view*/}
        <div className="z-10 hidden md:flexCenter">
          <Image
            alt="Ana Keller profile image"
            src={profile}
            className="w-full h-auto p-[5%]"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
