import { Packages } from '@/app/types/Packages';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function PackagesTile({ id, title, prevPrice, price, list }: Packages) {
  return (
    <div className="relative shadow-md rounded-lg lg:min-w-72 border border-terciary/60 bg-white ">
      {/* Content */}
      <div className="pt-14 pb-5 px-5 grid grid-cols-1 space-y-5 h-full">
        {/* Title */}
        <div className="text-center text-lg tracking-wide text-terciary">
          <h3 className="drop-shadow-xl">{title}</h3>
        </div>
        <div className="space-y-3 flex flex-col justify-end items-center">
          {/* online */}
          <div className="flexCenter"></div>
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

export default PackagesTile;
