'use client';

import React, { useState } from 'react';
import { SvgBlob } from 'react-svg-blob';

import { getRandomColor, getRandomInt, getRandomPattern } from '../utils/utils';

function Blob2(svg: any) {
  const [previousShapeProps, setPreviousShapeProps] = useState({
    growth: getRandomInt(1, 2),
    edges: getRandomInt(2, 5),
  });

  function generateShapeProps() {
    // Generate new shape props based on previous shape props with random variations
    const newShapeProps = {
      growth: previousShapeProps.growth + getRandomInt(-1, 1), // Randomly adjust growth
      edges: previousShapeProps.edges + getRandomInt(-1, 1), // Randomly adjust edges
    };
    return newShapeProps;
  }

  return (
    <div className="w-full h-auto">
      <SvgBlob
        variant="solid"
        color="#EDCAB7"
        shapeProps={generateShapeProps()}
        d={svg}
      />
    </div>
  );
}

export default Blob2;
