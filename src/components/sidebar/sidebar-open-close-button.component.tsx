import { forwardRef } from 'react';

import { Button, ButtonProps } from '@/components/button/button.component';

import styles from './sidebar-open-close-button.module.scss';

interface SidebarOpenCloseButtonType extends ButtonProps {
  sidebarState: {
    isSidebarOpen: boolean;
    isModalSidebarOpen: boolean;
  };
  toggleSidebarFunction: () => void;
  toggleModalFunction: () => void;
  openSidebarAltMessage: string;
  closeSidebarAltMessage: string;
}

export type SidebarOpenCloseButtonProps = Partial<
  Omit<SidebarOpenCloseButtonType, 'ref'>
>;

/**
 * # SidebarOpenCloseButton component
 * > It creates a button to open and close a sidebar and a modal sidebar
 * - Must be implemented in a file with "use client"
 * - "sidebarState" must be: { isSidebarOpen: boolean; isModalSidebarOpen: boolean }
 *---
 * @example
 * ```tsx
 * <SidebarOpenCloseButton
 *   sidebarState={sidebarState}
 *   toggleSidebarFunction={toggleSidebar}
 *   toggleModalFunction={toggleModal}
 *   openSidebarAltMessage='Open sidebar'
 *   closeSidebarAltMessage='Close sidebar'
 * >
 *   <Icon>
 *     <BarsMenuSVG />
 *   </Icon>
 * </SidebarOpenCloseButton>
 * ```
 *---
 * @param sidebarState - State of sidebar and modal sidebar.
 * @param toggleSidebarFunction - Function to open and close the sidebar.
 * @param toggleModalFunction - Function to open and close the sidebar.
 * @param openSidebarAltMessage - Open sidebar alt message.
 * @param closeSidebarAltMessage - Close sidebar alt message.
 */
export const SidebarOpenCloseButton = forwardRef<
  HTMLButtonElement,
  SidebarOpenCloseButtonType
>(
  (
    {
      sidebarState,
      toggleSidebarFunction,
      toggleModalFunction,
      openSidebarAltMessage,
      closeSidebarAltMessage,
      status = 'default-ghost',
      children,
      ...props
    },
    ref,
  ) => (
    <>
      <Button
        ref={ref}
        status={status}
        className={styles.button}
        title={
          sidebarState.isSidebarOpen
            ? closeSidebarAltMessage
            : openSidebarAltMessage
        }
        aria-label={
          sidebarState.isSidebarOpen
            ? closeSidebarAltMessage
            : openSidebarAltMessage
        }
        onClick={toggleSidebarFunction}
        data-buttontype="sidebar-button"
        aria-expanded={sidebarState.isSidebarOpen}
        {...props}
      >
        {children}
      </Button>

      <Button
        ref={ref}
        status={status}
        className={styles.button}
        title={
          sidebarState.isModalSidebarOpen
            ? closeSidebarAltMessage
            : openSidebarAltMessage
        }
        aria-label={
          sidebarState.isModalSidebarOpen
            ? closeSidebarAltMessage
            : openSidebarAltMessage
        }
        onClick={toggleModalFunction}
        data-buttontype="modal-sidebar-button"
        aria-expanded={sidebarState.isModalSidebarOpen}
        {...props}
      >
        {children}
      </Button>
    </>
  ),
);

SidebarOpenCloseButton.displayName = 'SidebarOpenCloseButton';
