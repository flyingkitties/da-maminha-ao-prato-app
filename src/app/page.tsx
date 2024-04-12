import Agendar from '@/components/Agendar';
import Banner from '@/components/Banner';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Nutricionista from '@/components/Nutricionista';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <Banner />
      <Header />
      <Hero />
      <Agendar />
      <Nutricionista />
    </main>
  );
}
