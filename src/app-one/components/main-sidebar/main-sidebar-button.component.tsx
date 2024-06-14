'use client';

import { useStore } from '@nanostores/react';

import { Icon, Sidebar, SidebarOpenCloseButtonProps } from '@/components';
import { BarsMenuSVG } from '@/media/svg/';
import {
  mainSidebarState,
  toggleMainSidebar as toggleSidebar,
  toggleMainModalSidebar as toggleModal,
} from '@/state/main-sidebar.state';

interface MainSidebarButtonProps extends SidebarOpenCloseButtonProps {}

/**
 * ## SidebarMenuButton component
 * > Button to open and close the app main menu
 *---
 * @example
 * ```tsx
 * <SidebarMenuButton />
 * ```
 */
export const MainSidebarButton = ({
  sidebarState,
  toggleSidebarFunction = toggleSidebar,
  toggleModalFunction = toggleModal,
  openSidebarAltMessage = 'Abrir sidebar',
  closeSidebarAltMessage = 'Fechar sidebar',
  'aria-controls': ariaControls = 'main-sidebar-menu',
  children,
  ...props
}: MainSidebarButtonProps) => {
  const mainSidebarMenuState = useStore(mainSidebarState);

  return (
    <Sidebar.OpenCloseButton
      sidebarState={sidebarState || mainSidebarMenuState}
      toggleSidebarFunction={toggleSidebarFunction}
      toggleModalFunction={toggleModalFunction}
      openSidebarAltMessage={openSidebarAltMessage}
      closeSidebarAltMessage={closeSidebarAltMessage}
      aria-controls={ariaControls}
      {...props}
    >
      {children || (
        <Icon>
          <BarsMenuSVG />
        </Icon>
      )}
    </Sidebar.OpenCloseButton>
  );
};

MainSidebarButton.displayName = 'MainSidebarButton';
