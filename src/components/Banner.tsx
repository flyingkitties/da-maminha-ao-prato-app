import React from 'react';
import { FaEnvelope, FaFacebook, FaPhone } from 'react-icons/fa';
import { PiInstagramLogoFill } from 'react-icons/pi';

function Banner() {
  return (
    <div className="bg-secondary p-2 w-full md: px-5">
      {/* Social media */}
      <div className="flex flex-col md:flex-row justify-end items-center md:col-span-2 text-[10px] sm:text-xs lg:text-sm space-y-3">
        <div className="flexCenter space-x-5 ">
          {/* Phone */}

          <div className="bannerIconDiv p-[6px]">
            <FaPhone className="bannerIcon w-4 h-auto" />
          </div>

          <div className="bannerIconDiv">
            <PiInstagramLogoFill className="bannerIcon " />
          </div>
          <div className="bannerIconDiv">
            <FaFacebook className="bannerIcon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
