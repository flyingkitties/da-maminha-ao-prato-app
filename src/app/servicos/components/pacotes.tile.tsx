import { Packages } from '@/app/types/Packages';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRightLong, FaCheck } from 'react-icons/fa6';
import { RxCross2 } from 'react-icons/rx';

function PackagesTile({
  id,
  title,
  prevPrice,
  price,
  list,
  color,
  borderColor,
  textColor,
}: Packages) {
  return (
    <div
      className={`relative shadow-md rounded-lg lg:min-w-72 border-2 ${borderColor} bg-white h-full`}
    >
      {/* Title */}
      <div className="absolute -top-[25px] left-0 right-0 flexCenter">
        <div className={`p-3 px-5 ${color} rounded-md`}>
          <h3 className="text-white">{title}</h3>
        </div>
      </div>
      {/* Content */}
      <div className="pt-14 pb-5 grid grid-cols-1 space-y-5 h-full">
        {/* Price */}
        <div
          className={`flexCenter space-x-5 text-center text-lg tracking-wide text-white ${color}`}
        >
          <div className="relative p-2 ">
            <RxCross2 className="absolute inset-0 w-auto h-full z-10" />
            <p className="drop-shadow-xl">{prevPrice}</p>
          </div>
          <div className="relative p-2">
            <p className="drop-shadow-xl">{price}</p>
          </div>
        </div>
        <div className="space-y-3 flex flex-col text-xs px-[5%]">
          {/* list */}
          {list.map((item) => (
            <div
              className="flex space-x-2"
              key={item}
            >
              <FaCheck className={`${textColor}`} />
              <p>{item}</p>
            </div>
          ))}
        </div>
        {/* Button */}
        <Link
          className="flexCenter space-x-2 text-xs group"
          href={`/pacotes/${id}`}
        >
          <p className={`${textColor} hidden group-hover:flex`}>
            Mais Informações
          </p>
          <FaArrowRightLong className={`${textColor} w-4 h-auto`} />
        </Link>
      </div>
    </div>
  );
}

export default PackagesTile;
