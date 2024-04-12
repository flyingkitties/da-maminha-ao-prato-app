import React from 'react';
import Tile from './services.Tile';

function Services() {
  const servicos = [
    { name: 'Preparar a amamentação na gravidez ', icon: '', price: '' },
  ];
  return (
    <div>
      <div className="bg-primary px-5 md:px-[5%] xl:px-[10%]">
        <div className="py-10">
          <h1 className="text-center titleFont text-terciary text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Os meus serviços
          </h1>
          <div>
            {servicos.map((service) => (
              <Tile key={service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
