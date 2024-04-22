import { Services } from '@/app/types/Services';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { TiThLarge } from 'react-icons/ti';

function Tile({ image, title, priceOnline, priceHome }: Services) {
  return (
    <div>
      <div>
        <Image
          src={image}
          alt={title}
          height={500}
          width={500}
        />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{priceOnline}</p>
        <p>{priceHome}</p>
      </div>
    </div>
  );
}

export default Tile;
