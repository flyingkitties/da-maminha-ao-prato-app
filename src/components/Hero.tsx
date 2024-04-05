import Image from 'next/image';
import React from 'react';
import profile from '@/../public/profile.png';
function Hero() {
  return (
    <div className="relative bg-[#FFF9F1] min-h-screen -mt-16">
      <div className="absolute bg-peach top-[60%] left-0 right-0 bottom-0 " />
      <div className="grid md:grid-cols-2 gap-10 md:p-[10%] md:pt-[15%] md:pb-0 xl:px-[15%] px-5 ">
        {/* title */}
        <div className="flexCenter flex-col space-y-3 md:space-y-5 text-center pb-10">
          <h1 className="titleFont text-[#AD7A6B] text-3xl md:text-4xl lg:text-5xl xl:text-7xl">
            Da Maminha Ao Prato
          </h1>
          <h2 className="text-[#AD7A6B] handwritten text-lg md:text-xl lg:text-2xl">
            Ana van der Kellen
          </h2>
        </div>
        {/* Photo */}
        <div className="flexCenter p-[10px] bg-peach m-[15%] z-10">
          <Image
            alt="Ana Keller profile image"
            src={profile}
            className="w-full h-auto border-[10px] border-[#FFF9F1]"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
