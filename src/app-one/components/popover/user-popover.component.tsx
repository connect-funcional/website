'use client';

import {
  Icon,
  ButtonProps,
  Link,
  PopoverMenu,
  TriggerButtonProps,
} from '@/components';
import { route } from '@/config/route';
import { UserSVG, ExitSVG } from '@/media/svg';

interface UserPopoverProps extends ButtonProps {
  triggerButtonProps?: TriggerButtonProps;
}

/**
 * ## UserPopover component
 * > User menu trigger button and popover
 *---
 * @example
 * ```tsx
 * <UserPopover />
 * ```
 *---
 * @param triggerButtonProps - Popover trigger button props
 */
export const UserPopover = ({
  triggerButtonProps = {
    status: 'default-ghost',
    title: 'Conta de usuário',
    'aria-label': 'Conta de usuário',
  },
}: UserPopoverProps) => (
  <PopoverMenu.Root
    triggerButtonProps={triggerButtonProps}
    triggerButtonContent={
      <Icon>
        <UserSVG />
      </Icon>
    }
  >
    <PopoverMenu.Section
    // header={
    //   <Link href={route.USER} status="foreground">
    //     <Title.H3 size="l">@username</Title.H3>
    //   </Link>
    // }
    >
      {/* <PopoverMenu.Item
        iconComponent={
          <Icon>
            <UserSVG />
          </Icon>
        }
      >
        <Link href={route.USER} status="foreground">
          Perfil
        </Link>
      </PopoverMenu.Item>

      <PopoverMenu.Item
        iconComponent={
          <Icon>
            <GearSVG />
          </Icon>
        }
      >
        <Link href={route.SETTINGS} status="foreground">
          Configurações
        </Link>
      </PopoverMenu.Item> */}

      <PopoverMenu.Item
        iconComponent={
          <Icon>
            <ExitSVG />
          </Icon>
        }
      >
        <Link href={route.LOGIN} status="foreground">
          Sair (logout)
        </Link>
      </PopoverMenu.Item>
    </PopoverMenu.Section>
  </PopoverMenu.Root>
);

UserPopover.displayName = 'UserPopover';
