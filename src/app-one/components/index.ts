//
// ISSUE IMPORTING CLIENT COMPONENT
// For now it is not possible to export client components using "*",
// like this:  export * from './button/button.component';
// It is necessary to destructure.
// ISSUE LINK: https://github.com/vercel/next.js/issues/41940
// ERROR MESSAGE: Unsupported Server Component type: undefined
//

export { LoginForm } from './login-form/login-form.component';

export { MainSidebar } from './main-sidebar/main-sidebar.component';
export { MainSidebarButton } from './main-sidebar/main-sidebar-button.component';

export { Logo } from './logo/logo.component';

export { ConfigPopover } from './popover/config-popover.component';
export { UserPopover } from './popover/user-popover.component';
export { ThemePopoverMenuItens } from './popover/theme-popover-menu-itens.component';

export { TopBar } from './top-bar/top-bar.component';

export { WhatsAppButton } from './whatsapp-button/whatsapp-button.component';
