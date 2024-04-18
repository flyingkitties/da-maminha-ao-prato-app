import Image from 'next/image';
import React from 'react';
import logo from '@/../public/logo/Logo-2.png';
import { FaEnvelope, FaFacebook, FaPhone, FaRegClock } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { PiInstagramLogoFill } from 'react-icons/pi';
import Link from 'next/link';

function Footer() {
  return (
    <div className="bg-secondary">
      <div className="py-[10%]">
        {/* Logo */}
        <div className="flexCenter">
          <Image
            alt="Logo Da Maminha ao Prato"
            src={logo}
          />
        </div>
        <div className="">
          <div className="">
            {/* Hora de atendimento */}
            <div className="contact">
              <div className="bannerIconDiv p-[6px] bg-secondary element">
                <FaRegClock className="bannerIcon w-4 h-auto" />
              </div>
              <p>Segunda a Sexta das 09:00-17:00</p>
            </div>
            {/* Telefone */}

            <div className="bannerIconDiv p-[6px] element">
              <FaPhone className="footerIcon1Small" />
              <p>+351 935 058 203</p>
            </div>
            {/* Morada */}
            <div className="bannerIconDiv p-[6px] element">
              <FaLocationDot className="footerIconMed" />
              <p>Rua Blah blah blah</p>
            </div>
            {/* Email */}
            <div className="bannerIconDiv p-[6px] element">
              <FaEnvelope className="footerIconMed" />
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
    </div>
  );
}

export default Footer;
