import React from 'react';

function Agendar() {
  return (
    <div className="flexCenter flex-col space-y-5 py-[10%] pb-28 md:pb-[15%] bg-secondary box px-5">
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
  );
}

export default Agendar;
