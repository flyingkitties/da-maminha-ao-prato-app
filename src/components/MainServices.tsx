import React from 'react';
import icon1 from '../../public/Icons/icons8-breastfeeding-64.png';
import Image from 'next/image';

function MainServices() {
  return (
    <div className="grid grid-cols-2 sectionContainer space-x-5 text-center">
      <div className="relative py-5 px-10 rounded-xl space-y-3 bg-white">
        <div className="absolute -inset-1 bg-secondary/60 blur-lg -z-10" />
        <p className="text-terciary text-lg md:text-xl">Amamentação</p>
        <button className="bg-secondary text-white px-3">Saber mais</button>
      </div>
      <div className="relative py-5 px-10 rounded-xl space-y-3 bg-white">
        <div className="absolute -inset-1 bg-secondary/60 blur-lg -z-10" />
        <p className="text-terciary text-lg md:text-xl">Alimentação Infantil</p>
        <button className="bg-secondary text-white px-3">Saber mais</button>
      </div>
    </div>
  );
}

export default MainServices;
