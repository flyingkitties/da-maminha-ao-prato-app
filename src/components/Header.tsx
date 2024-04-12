'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { cn } from '@/utils/cn';
import logo from '@/../public/logo/Logo-2.png';
import useNavigation from '@/hooks/useNavigation';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

function Header() {
  const [nav, setNav] = useState<boolean>(false);
  const { links } = useNavigation();
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between p-2 px-5 md:px-10 bg-primary">
      {/* Logo */}
      <div className="flexCenter">
        <Image
          alt="Logo Da Maminha ao Prato"
          src={logo}
          height={50}
          width={50}
        />
      </div>
      {/* Nav */}
      <div
        aria-label="Menu"
        onClick={() => setNav(!nav)}
        onKeyDown={() => setNav(!nav)}
        role="button"
        tabIndex={0}
        className="absolute right-5 z-30 lg:hidden"
      >
        {nav ? (
          <FaTimes className="h-7 w-auto xs:h-8" />
        ) : (
          <FaBars className="h-7 w-auto xs:h-8" />
        )}
      </div>
      {/* Nav - Mobile */}
      {nav && (
        <div className="">
          <ul className="absolute left-0 top-0 z-20 flex h-screen w-full flex-col items-center justify-center text-center bg-primary">
            <div className="absolute bottom-0 left-0 right-0 z-30 h-[20%]" />
            {links.map(({ name, path, isActive }) => (
              <li
                key={path}
                className={cn(
                  'cursor-pointer px-4 py-6 text-4xl capitalize',
                  isActive && 'text-terciary hover:text-terciary/70',
                )}
              >
                <Link
                  aria-label="Menu"
                  onClick={() => setNav(!nav)}
                  href={path}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* Nav - Desktop */}
      <nav className=" lg:flexCenter hidden lg:text-base xl:text-lg">
        <ul className="flexCenter space-x-2 lg:space-x-5">
          {links.map(({ name, path, isActive }) => (
            <li key={path}>
              <Link
                href={path}
                className={cn(
                  'cursor-pointer p-2 px-4 transition-all duration-75 ',
                  isActive && 'text-terciary hover:text-terciary/70',
                )}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
