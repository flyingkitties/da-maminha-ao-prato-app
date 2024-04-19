import Image from 'next/image';
import React from 'react';
import image1 from '@/../public/profile/profile-image1.png';

function Nutricionista() {
  return (
    <div className="flexCenter sectionContainer text-darkBrown py-16">
      <div className="grid md:grid-cols-2 sm:py-[5%] gap-5 lg:gap-10">
        <div className="flexCenter">
          <Image
            alt="Ana Kellen photo"
            src={image1}
            className="w-full h-auto px-[15%] sm:px-0 lg:px-[5%]"
          />
        </div>
        <div className="flexCenter flex-col space-y-5 lg:space-y-10">
          <p className="font-semibold text-lg lg:text-xl xl:text-2xl text-terciary titleFont text-center md:text-left">
            Nutricionista materno-infantil especialista em amamentação.
          </p>
          <p className="p-TextFormat">
            Ofereço orientação especializada em nutrição materno-infantil e
            apoio à amamentação para mães que desejam garantir o melhor começo
            de vida para o seu bebé.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Nutricionista;
