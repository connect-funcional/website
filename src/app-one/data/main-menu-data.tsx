import { route } from '@/config';
import { ConnectLogo, DumbbellSVG, MailSVG } from '@/media/svg';
import { MapPinSVG } from '@/media/svg/outline/map-pin.svg';

export interface MainMenuDataItem {
  title: string;
  path: string;
  icon: React.ReactNode;
}

export const generateMainMenuData = (): MainMenuDataItem[] => [
  {
    title: 'A Connect Funcional',
    path: route.HOME,
    icon: <ConnectLogo />,
  },
  {
    title: 'Estrutura',
    path: route.STRUCTURE,
    icon: <MapPinSVG />,
  },
  {
    title: 'Treinamento funcional',
    path: route.SERVICES,
    icon: <DumbbellSVG />,
  },
  // {
  //   title: 'Cursos',
  //   path: route.SERVICES,
  //   icon: <GraduationCapSVG />,
  // },
  // {
  //   title: 'Profissionais',
  //   path: route.TEAM,
  //   icon: <UserSVG />,
  // },
  {
    title: 'Contato',
    path: route.CONTACT,
    icon: <MailSVG />,
  },
];
