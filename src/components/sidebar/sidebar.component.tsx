import { SidebarOpenCloseButton as OpenCloseButton } from './sidebar-open-close-button.component';
import styles from './sidebar.module.scss';

type SidebarDivProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

interface SidebarRootProps extends SidebarDivProps {
  displaySidebar: boolean;
  displayModalSidebar: boolean;
}

const Root = ({
  children,
  displaySidebar,
  displayModalSidebar,
  className,
  ...props
}: SidebarRootProps) => (
  <div
    className={`${styles['root-container']}${className ? ` ${className}` : ''}`}
    data-displaysidebar={displaySidebar}
    data-displaymodalsidebar={displayModalSidebar}
    {...props}
  >
    {children}
  </div>
);

const ModalBackground = ({
  children,
  className,
  ...props
}: SidebarDivProps) => (
  <div
    className={`${styles['modal-background']}${
      className ? ` ${className}` : ''
    }`}
    {...props}
  >
    {children}
  </div>
);

const LeftContent = ({ children, className, ...props }: SidebarDivProps) => (
  <div
    className={`${styles['left-content-container']}${
      className ? ` ${className}` : ''
    }`}
    {...props}
  >
    {children}
  </div>
);

const RightContent = ({ children, className, ...props }: SidebarDivProps) => (
  <div
    className={`${styles['right-content-container']}${
      className ? ` ${className}` : ''
    }`}
    {...props}
  >
    {children}
  </div>
);

Root.displayName = 'Sidebar.Root';

/**
 * ## Sidebar component
 * > Component to create a sidebar that also turns into a modal sidebar
 * on small screen sizes
 * - Must be implemented in a client component
 *---
 * @example
 * ```tsx
 * <Sidebar.Root>
 *   <Sidebar.ModalBackground onClick={toggleModal} />
 *   <Sidebar.LeftContent>
 *     <Sidebar.OpenCloseButton
 *       // button options...
 *     />
 *     // sidebar content comes here...
 *   <Sidebar.LeftContent />
 * </Sidebar.Root>
 * ```
 *
 *---
 * ### Sidebar.Root
 * - Wraps all component elements
 *
 *---
 * ### Sidebar.ModalBackground
 * - Fills the screen with a semi-transparent component
 * - By clicking on it the modal sidebar is closed
 * @example
 * ```tsx
 * <Sidebar.ModalBackground onClick={toggleModal} />
 * ```
 *
 *---
 * ### Sidebar.OpenCloseButton
 * - It creates a button to open and close a sidebar and a modal sidebar
 * - "sidebarState" must be: { isSidebarOpen: boolean; isModalSidebarOpen: boolean }
 * @example
 * ```tsx
 * <Sidebar.OpenCloseButton
 *   sidebarState={sidebarState}
 *   toggleSidebarFunction={toggleSidebar}
 *   toggleModalFunction={toggleModal}
 *   openSidebarAltMessage='Open sidebar'
 *   closeSidebarAltMessage='Close sidebar'
 * >
 *   <Icon>
 *     <BarsMenuSVG />
 *   </Icon>
 * </Sidebar.OpenCloseButton>
 * ```
 * @param sidebarState - State of sidebar and modal sidebar.
 * @param toggleSidebarFunction - Function to open and close the sidebar.
 * @param toggleModalFunction - Function to open and close the sidebar.
 * @param openSidebarAltMessage - Open sidebar alt message.
 * @param closeSidebarAltMessage - Close sidebar alt message.
 *
 *---
 * ### Sidebar.LeftContent
 * - Shows the content of the modal sidebar on the left side of the screen
 *
 *---
 * ### Sidebar.RightContent
 * - Shows the content of the modal sidebar on the right side of the screen
 */
export const Sidebar = {
  Root,
  ModalBackground,
  LeftContent,
  RightContent,
  OpenCloseButton,
};
