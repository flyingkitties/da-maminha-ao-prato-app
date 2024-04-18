import Agendar from '@/components/Agendar';
import Footer from '@/components/Footer';

import Hero from '@/components/Hero';
import Hero2 from '@/components/Hero2';
import Nutricionista from '@/components/Nutricionista';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <Hero2 />
      <Agendar />
      <Nutricionista />
      <Footer />
    </main>
  );
}
