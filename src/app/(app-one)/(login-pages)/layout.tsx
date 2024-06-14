import { TopBar } from '@/app-one/components';
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
        <TopBar.Root background="none">
          <TopBar.Section>
            <SkipNavigation.Link href={`#${contentId}`}>
              Pular navegação
            </SkipNavigation.Link>
          </TopBar.Section>
        </TopBar.Root>
      </header>

      <div className={styles['page-content']}>
        <main id={contentId} className={styles['children-content']}>
          {children}
        </main>
      </div>
    </body>
  );
}
