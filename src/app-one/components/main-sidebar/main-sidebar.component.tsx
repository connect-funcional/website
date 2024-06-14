'use client';

import { useStore } from '@nanostores/react';
import { usePathname } from 'next/navigation';

import { Link, Icon, Sidebar, Title } from '@/components';
import {
  mainSidebarState,
  toggleMainModalSidebar as toggleModal,
  closeMainModalSidebar as closeModal,
} from '@/state/main-sidebar.state';

import { generateMainMenuData } from '../../data/main-menu-data';
import { MainSidebarButton } from './main-sidebar-button.component';
import styles from './main-sidebar.module.scss';

/**
 * ## MainSidebar component
 * > Main sidebar menu content component
 *---
 * @example
 * ```tsx
 * <MainSidebar />
 * ```
 */
export const MainSidebar = () => {
  const sidebarState = useStore(mainSidebarState);
  const pathname = usePathname().split('/');
  const sectionPathname = pathname[1];
  const mainMenuData = generateMainMenuData();
  const mainSidebarId = 'main-sidebar-menu';

  return (
    <Sidebar.Root
      id={mainSidebarId}
      displaySidebar={sidebarState.isSidebarOpen}
      displayModalSidebar={sidebarState.isModalSidebarOpen}
    >
      <Sidebar.ModalBackground onClick={toggleModal} />

      <Sidebar.LeftContent>
        <div className={styles['bar-container']}>
          <MainSidebarButton />

          <div className={styles['menu-title']}>
            <Title.H2 size="l">Menu</Title.H2>
          </div>
        </div>

        <div className={styles['menu-itens-container']}>
          {mainMenuData.map((menuItem) => (
            <Link
              key={`${menuItem.title}-${menuItem.path}`}
              href={menuItem.path}
              onClick={closeModal}
              status="foreground"
            >
              <div
                className={`${styles['menu-item']}${
                  sectionPathname === menuItem.path.slice(1)
                    ? ` ${styles['current-menu-item']}`
                    : ''
                }`}
              >
                <Icon>{menuItem.icon}</Icon>
                {menuItem.title}
              </div>
            </Link>
          ))}
        </div>
      </Sidebar.LeftContent>
    </Sidebar.Root>
  );
};

MainSidebar.displayName = 'MainSidebar';
