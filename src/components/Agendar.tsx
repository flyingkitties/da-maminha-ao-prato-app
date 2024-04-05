import React from 'react';

function Agendar() {
  return (
    <div className="flexCenter space-x-4 py-[10%] sectionContainer">
      <h3 className="text-brown1 text-xl">
        Queres agendar uma consulta de Amamentação?
      </h3>
      <button
        className="bg-brown1 text-white py-3 px-5 rounded-md"
        type="button"
      >
        Agendar consulta
      </button>
    </div>
  );
}

export default Agendar;
