import {
  ConfigPopover,
  // UserPopover,
  Logo,
  MainSidebar,
  MainSidebarButton,
  TopBar,
  WhatsAppButton,
} from '@/app-one/components';
import { SkipNavigation } from '@/components';

import styles from './layout.module.scss';

interface LayoutProps {
  children: React.ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
  const contentId = 'main';

  return (
    <body>
      <header>
        <TopBar.Root>
          <TopBar.Section>
            <SkipNavigation.Link href={`#${contentId}`}>
              Pular Navegação
            </SkipNavigation.Link>
            <MainSidebarButton />
            <Logo />
          </TopBar.Section>

          <TopBar.Section className={styles['top-bar-controls-section']}>
            <ConfigPopover />
            {/* <UserPopover /> */}
          </TopBar.Section>
        </TopBar.Root>
      </header>

      <div className={styles['page-content']}>
        <aside className={styles['sidebar-content']}>
          <MainSidebar />
        </aside>

        <main id={contentId} className={styles['children-content']}>
          {children}

          <WhatsAppButton />
        </main>
      </div>
    </body>
  );
}
