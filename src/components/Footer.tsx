import Image from 'next/image';
import React from 'react';
import logo from '@/../public/logo/Logo-2.png';
import { FaEnvelope, FaFacebook, FaPhone, FaRegClock } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { PiInstagramLogoFill } from 'react-icons/pi';
import Link from 'next/link';

function Footer() {
  return (
    <div className=" bg-secondary">
      <div className="grid md:grid-cols-2 py-[10%]">
        {/* Logo */}
        <div className="flexCenter">
          <Image
            alt="Logo Da Maminha ao Prato"
            src={logo}
            className="w-[100px] h-auto"
          />
        </div>
        {/* Info */}
        <div className="">
          {/* Hora de atendimento */}
          <div className="contact">
            <div className="bannerIconDiv p-[6px] bg-secondary element">
              <FaRegClock className="footerIcon" />
            </div>
            <p>Segunda a Sexta das 09:00-17:00</p>
          </div>
          {/* Telefone */}
          <div className="contact">
            <div className="bannerIconDiv p-[6px] bg-secondary element">
              <FaPhone className="footerIcon" />
            </div>
            <p>+351 935 058 203</p>
          </div>
          {/* Morada */}
          <div className="contact">
            <div className="bannerIconDiv p-[6px] bg-secondary element">
              <FaLocationDot className="footerIcon" />
            </div>
            <p>Rua Blah blah blah</p>
          </div>
          {/* Email */}
          <div className="contact">
            <div className="bannerIconDiv p-[6px] bg-secondary element">
              <FaEnvelope className="footerIcon" />
            </div>
            <p>damaminhaaoprato@outlook.pt</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center py-5">
        {/* Socials */}
        <nav className="flex items-center justify-center space-x-5">
          <Link
            href="https://www.facebook.com/atelierdarelacao"
            target="_blank"
            rel="noopener noreferrer"
            className="socialsRing"
            aria-label="o nosso facebook"
          >
            <FaFacebook className="footerSocials" />
          </Link>
          <Link
            href="https://www.instagram.com/atelierdarelacao"
            target="_blank"
            rel="noopener noreferrer"
            className="socialsRing"
            aria-label="o nosso instagram"
          >
            <PiInstagramLogoFill className="footerSocials" />
          </Link>
        </nav>
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
      {/* Copyright */}
      <div className="copyright">
        <p>Copyright © 2024 Atelier da Relação</p>
      </div>
    </div>
  );
}

export default Footer;
