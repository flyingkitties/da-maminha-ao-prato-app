import React from 'react';
import wave from '../../public/waveBottom.png';
import wave2 from '../../public/wave.png';
import Image from 'next/image';

function Feedback() {
  return (
    <div>
      <Image
        src={wave}
        alt="wave styling"
        className="w-full "
      />
      <Image
        src={wave2}
        alt="wave styling"
        className="w-full "
      />
    </div>
  );
}

export default Feedback;
