import { Services } from '@/app/types/Services';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { TiThLarge } from 'react-icons/ti';

function Tile({ image, title, priceOnline, priceHome }: Services) {
  return (
    <div className="relative border border-secondary min-w-72">
      <div className="absolute -top-[40px] left-[35%] border border-secondary rounded-full p-3 bg-white">
        <Image
          src={image}
          alt={title}
          height={50}
          width={50}
        />
      </div>
      <div className="pt-10">
        <h3>{title}</h3>
        <p>{priceOnline}</p>
        <p>{priceHome}</p>
      </div>
    </div>
  );
}

export default Tile;
