import { Packages } from '@/app/types/Packages';
import React from 'react';
import PackagesTile from './pacotes.tile';
import { packages } from '@/app/data/packages';

function Pacotes() {
  return (
    <div className="py-10 px-5 md:px-[5%] xl:px-[10%]">
      <h1 className="text-center titleFont text-terciary text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
        Pacotes
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
        {packages.map(
          ({
            id,
            title,
            prevPrice,
            price,
            list,
            color,
            borderColor,
            textColor,
          }: Packages) => (
            <PackagesTile
              id={id}
              key={id}
              title={title}
              prevPrice={prevPrice}
              price={price}
              list={list}
              color={color}
              borderColor={borderColor}
              textColor={textColor}
            />
          ),
        )}
      </div>
    </div>
  );
}

export default Pacotes;
