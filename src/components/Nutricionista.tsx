import Image from 'next/image';
import React from 'react';
import image1 from '@/../public/profile/profile-image2.png';

function Nutricionista() {
  return (
    <div className="flexCenter sectionContainer text-darkBrown py-16">
      <div className="grid sm:grid-cols-2 sm:py-[5%] gap-3 lg:gap-10">
        <div className="flexCenter">
          <Image
            alt="Ana Kellen photo"
            src={image1}
            className="w-full h-auto -ml-8 px-[15%] sm:px-0 lg:px-[5%]"
          />
        </div>
        <div className="flexCenter flex-col space-y-5 lg:space-y-10">
          <p className="titleFont title text-center sm:text-left">
            Nutricionista materno-infantil especialista em amamentação.
          </p>
          <p className="p-TextFormat leading-relaxed sm:pr-[5%]">
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
