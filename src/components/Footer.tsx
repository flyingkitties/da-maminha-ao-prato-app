import Image from 'next/image';
import React from 'react';
import logo from '@/../public/logo/Logo-2.png';
import { FaEnvelope, FaFacebook, FaPhone, FaRegClock } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { PiInstagramLogoFill } from 'react-icons/pi';
import Link from 'next/link';

function Footer() {
  return (
    <div>
      <div className="sectionContainer">
        <div className="grid md:grid-cols-2 py-[10%] md:py-[5%]">
          {/* Logo */}
          <div className="flexCenter">
            <Image
              alt="Logo Da Maminha ao Prato"
              src={logo}
              className="w-[100px] h-auto"
            />
          </div>
          {/* Info */}
          <div className="space-y-2 pt-10 md:pt-0 px-[10%]">
            {/* Hora de atendimento */}
            <div className="contact">
              <FaRegClock className="footerIcon" />

              <p>Segunda a Sexta das 09:00-17:00</p>
            </div>
            {/* Telefone */}
            <div className="contact">
              <FaPhone className="footerIcon" />

              <p>+351 935 058 203</p>
            </div>
            {/* Morada */}
            <div className="contact">
              <FaLocationDot className="footerIcon" />

              <p>Rua Blah blah blah</p>
            </div>
            {/* Email */}
            <div className="contact">
              <FaEnvelope className="footerIcon" />

              <p>damaminhaaoprato@outlook.pt</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center pb-5">
          {/* Socials */}
          <div className="flexCenter space-x-5 ">
            <div className="bannerIconDiv bg-white">
              <PiInstagramLogoFill className="bannerIcon" />
            </div>
            <div className="bannerIconDiv bg-white">
              <FaFacebook className="bannerIcon" />
            </div>
          </div>
        </div>
        {/* Terms and privacy */}
        <div className="termsAndprivacyBox">
          <Link href="/termos-e-condicoes">
            <p className="sm:px-5">Termos e Condições</p>
          </Link>
          <p>|</p>
          <Link href="/politica-de-privacidade">
            <p className="sm:px-5">Política de Privacidade</p>
          </Link>
        </div>
      </div>
      {/* Copyright */}
      <div className="copyright">
        <p>Copyright © 2024 Da Maminha Ao Prato</p>
      </div>
    </div>
  );
}

export default Footer;
