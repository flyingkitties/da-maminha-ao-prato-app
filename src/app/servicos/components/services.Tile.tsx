import { Services } from '@/app/types/Services';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { TiThLarge } from 'react-icons/ti';
import { FaVideo } from 'react-icons/fa';
import Link from 'next/link';

function Tile({ id, image, title, priceOnline, priceHome }: Services) {
  return (
    <div className="relative shadow-md rounded-lg min-w-72 border-2 border-secondary bg-white ">
      {/* Icon */}
      <div className="absolute -top-[40px] left-[35%] border border-secondary rounded-full p-3 bg-secondary">
        <Image
          src={image}
          alt={title}
          height={50}
          width={50}
        />
      </div>
      {/* Content */}
      <div className="pt-10 pb-5 px-5 grid grid-cols-1 space-y-5 h-full">
        {/* Title */}
        <div className="text-center text-lg tracking-wide text-terciary">
          <h3 className="drop-shadow-xl">{title}</h3>
        </div>
        <div className="space-y-3 flex flex-col justify-end items-center">
          {/* online */}
          <div className="flexCenter">
            <div className="flexCenter space-x-2 text-xs border border-terciary/60 p-1 px-3 rounded-md ">
              <FaVideo className="text-terciary" />
              <p>Disponível online</p>
            </div>
          </div>
          {/* Button */}
          <Link
            className="flex items-end justify-center"
            href={`/services/${id}`}
          >
            <button className="bg-terciary/60 py-2 px-5 rounded-md text-white text-xs">
              Mais Informações
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Tile;
