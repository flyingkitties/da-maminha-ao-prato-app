import React from 'react';
import Tile from './services.Tile';
import icon1 from '../../../../public/serviceIcons/icon1.png';
import { services } from '../../data/services';
import { Services } from '@/app/types/Services';

function ServicesGallery() {
  return (
    <div>
      <div className="px-5 md:px-[5%] xl:px-[10%]">
        <div className="py-10">
          <h1 className="text-center titleFont text-terciary text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Os meus serviços
          </h1>
          <div>
            {services.map((service: Services) => (
              <Tile
                key={service.title}
                title={service.title}
                image={service.image}
                alt={service.title}
                priceOnline={service.priceOnline}
                priceHome={service.priceHome}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesGallery;
