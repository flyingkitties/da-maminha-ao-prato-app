import { Services } from '@/app/types/Services';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { TiThLarge } from 'react-icons/ti';
import { FaVideo } from 'react-icons/fa';
import Link from 'next/link';

function Tile({ id, image, title, priceOnline, priceHome }: Services) {
  return (
    <div className="relative shadow-md rounded-lg min-w-72 border-2 border-secondary/30 bg-secondary/40">
      <div className="absolute -top-[40px] left-[35%] border border-secondary rounded-full p-3 bg-secondary">
        <Image
          src={image}
          alt={title}
          height={50}
          width={50}
        />
      </div>
      <div className="py-10 px-5">
        <div className="text-center text-lg tracking-wide text-terciary ">
          <h3 className="drop-shadow-xl">{title}</h3>
        </div>
        <FaVideo />
        <p>{priceOnline}</p>
        <p>{priceHome}</p>
        <Link href={`/services/${id}`}>
          <button className="bg-terciary/60 py-2 px-5 rounded-md text-white text-xs">
            Mais Informações
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Tile;
