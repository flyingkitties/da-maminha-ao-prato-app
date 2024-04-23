import { Services } from '@/app/types/Services';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { TiThLarge } from 'react-icons/ti';
import { FaVideo } from 'react-icons/fa';
import Link from 'next/link';

function Tile({ id, image, title, priceOnline, priceHome }: Services) {
  return (
    <div className="relative shadow-md rounded-lg lg:min-w-72 border border-terciary/60 bg-white ">
      {/* Icon */}
      <div className="absolute -top-[40px] left-0 right-0 flexCenter ">
        <div className="bg-white">
          <div className="bg-terciary/70 rounded-full">
            <Image
              src={image}
              alt={title}
              height={80}
              width={80}
              className="p-4"
            />
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="pt-14 pb-5 px-5 grid grid-cols-1 space-y-5 h-full">
        {/* Title */}
        <div className="text-center text-lg tracking-wide text-terciary">
          <h3 className="drop-shadow-xl">{title}</h3>
        </div>
        <div className="space-y-3 flex flex-col justify-end items-center">
          {/* online */}
          <div className="flexCenter">
            <div className="flexCenter space-x-2 text-xs border border-terciary/70 py-1 px-3 rounded-md ">
              <FaVideo className="text-terciary/70" />
              <p className="text-lightBrown">Disponível online</p>
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
