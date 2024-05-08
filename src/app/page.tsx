import Agendar from '@/components/Agendar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import InstagramFeed from '@/components/InstagramFeed';
import MainServices from '@/components/MainServices';
import Nutricionista from '@/components/Nutricionista';

export default function Home() {
  return (
    <main>
      <Hero />
      <Agendar />
      <Nutricionista />
      <MainServices />
      <InstagramFeed />
      <Footer />
    </main>
  );
}
