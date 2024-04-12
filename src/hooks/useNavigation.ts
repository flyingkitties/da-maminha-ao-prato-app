'use client';

import { usePathname } from 'next/navigation';

const routes = [
  {
    name: 'Sobre',
    path: '/sobre',
  },
  {
    name: 'Serviços',
    path: '/servicos',
  },
  {
    name: 'Amamentação',
    path: '/amamentacao',
  },
  {
    name: 'Alimentação infantil',
    path: '/alimentacao-infantil',
  },
  {
    name: 'Agendar',
    path: '/Agendar',
  },
];

function useNavigation() {
  const pathname = usePathname();

  const links = routes.map((route) => {
    return { ...route, isActive: route.path === pathname };
  });

  return { links };
}

export default useNavigation;
