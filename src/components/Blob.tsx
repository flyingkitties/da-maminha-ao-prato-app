import React from 'react';
import { animated } from 'react-spring';

function Blob({ svg }: any) {
  return (
    <svg
      viewBox="0 0 600 600"
      className="ml-[10%] w-full"
      width="600"
      fill="#EDCAB7"
    >
      <g transform="translate(0, 0)">
        <animated.path
          className="w-full"
          d={svg}
        />
      </g>
    </svg>
  );
}

export default Blob;
