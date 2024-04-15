import Image from 'next/image';
import React from 'react';
import image1 from '@/../public/image3.png';

function Nutricionista() {
  return (
    <div className="flexCenter sectionContainer text-darkBrown">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 py-[10%] gap-5 lg:gap-10">
        <div className="flexCenter">
          <Image
            alt="Ana Kellen photo"
            src={image1}
            className="w-full h-auto rounded-sm"
          />
        </div>
        <div className="flexCenter flex-col space-y-5  lg:col-span-2">
          <p className="font-semibold text-lg lg:text-xl text-terciary titleFont">
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
