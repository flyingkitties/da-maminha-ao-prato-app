import Image from 'next/image';
import React from 'react';
import profile from '@/../public/profile.png';
function Hero() {
  return (
    <div className="px-5 md:px-[10%] bg-[#FFF9F1]">
      <div className="grid md:grid-cols-2 py-[10%]">
        {/* title */}
        <div className="flexCenter flex-col space-y-3 md:space-y-5 text-center">
          <h1 className="titleFont text-[#AD7A6B] text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Da Maminha Ao Prato
          </h1>
          <h2 className="text-[#AD7A6B]  handwritten text-lg lg:text-xl">
            Ana Van Der Kellen
          </h2>
        </div>
        {/* Photo */}
        <div className="flexCenter pt-[20%] px-[20%] bg-[#FCC6BB] rounded-t-full">
          <Image
            alt="Ana Keller profile image"
            src={profile}
            className="w-full h-auto border-[10px] border-b-0 border-[#FFF9F1]"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
