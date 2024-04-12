import Agendar from '@/components/Agendar';

import Hero from '@/components/Hero';
import Nutricionista from '@/components/Nutricionista';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <Hero />
      <Agendar />
      <Nutricionista />
    </main>
  );
}
