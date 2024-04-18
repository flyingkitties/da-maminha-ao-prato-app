import Image from 'next/image';
import React from 'react';
import wave from '../../public/wave.png';

function Agendar() {
  return (
    <div className="">
      <div className="flexCenter flex-col space-y-5 py-[5%] pb-[2%] px-5 bg-secondary ">
        <h3 className="text-lg md:text-xl text-center text-darkBrown">
          Queres agendar uma consulta de Amamentação?
        </h3>
        <button
          className="bg-terciary text-white py-3 px-5 rounded-md text-xs md:text-sm lg:text-base"
          type="button"
        >
          Agendar consulta
        </button>
      </div>

      <Image
        src={wave}
        alt="wave styling"
        className="w-full "
      />
    </div>
  );
}

export default Agendar;
