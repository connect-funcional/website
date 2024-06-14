'use client';

import { Icon, ButtonProps, PopoverMenu } from '@/components';
import { GearSVG } from '@/media/svg';

import { ThemePopoverMenuItens } from './theme-popover-menu-itens.component';

interface ConfigPopoverProps extends ButtonProps {
  //
}

/**
 * ## ConfigPopover component
 * > Config menu trigger button and popover
 *---
 * @example
 * ```tsx
 * <ConfigPopover />
 * ```
 */
export const ConfigPopover = ({
  status = 'default-ghost',
  title = 'Configurações rápidas',
  'aria-label': ariaLabel = 'Configurações rápidas',
}: ConfigPopoverProps) => (
  <PopoverMenu.Root
    triggerButtonProps={{
      status,
      title,
      'aria-label': ariaLabel,
    }}
    triggerButtonContent={
      <Icon>
        <GearSVG />
      </Icon>
    }
  >
    <PopoverMenu.Section header="Tema do site">
      <ThemePopoverMenuItens />
    </PopoverMenu.Section>
  </PopoverMenu.Root>
);

ConfigPopover.displayName = 'ConfigPopover';
