'use client';

import { useEffect, useState } from 'react';

import {
  Button,
  ButtonProps as ButtonComponentProps,
  PopoverMenu,
  PopoverMenuItemProps,
} from '@/components';
import { themeKeys, Theme } from '@/config';
import { getThemeFromClient, setThemeFromClient } from '@/theme';

interface ButtonProps extends ButtonComponentProps {
  onClick?: () => void;
}

interface ThemePopoverMenuItemProps {
  popoverMenuItemProps?: PopoverMenuItemProps;
  buttonProps?: ButtonProps;
}

/**
 * # ThemePopoverMenuItens component
 * > Buttons with popover menu itens to change the current theme
 *---
 * @example
 * ```tsx
 * <PopoverMenuItens />
 * ```
 *---
 * @param buttonProps - "Button" component props
 * @param popoverMenuItemProps - "PopoverMenu.Item" component props
 */
export const ThemePopoverMenuItens = ({
  buttonProps = {
    status: 'plain-foreground',
    fullWidth: true,
  },
  popoverMenuItemProps,
}: ThemePopoverMenuItemProps) => {
  const [componentThemeCurrentState, setComponentCurrentThemeState] = useState<
    null | string
  >(null);

  useEffect(() => {
    const themeName = getThemeFromClient();
    setComponentCurrentThemeState(themeName);
  }, []);

  const setTheme = ({ targetTheme }: { targetTheme: Theme }) => {
    setComponentCurrentThemeState(targetTheme);
    setThemeFromClient(targetTheme);
  };

  return (
    <>
      {themeKeys.ALL_THEMES.map((theme) => (
        <Button
          key={theme}
          onClick={() => {
            if (buttonProps.onClick) buttonProps.onClick();
            setTheme({ targetTheme: theme });
          }}
          {...buttonProps}
        >
          <PopoverMenu.Item
            displayCheckIcon={componentThemeCurrentState === theme}
            {...popoverMenuItemProps}
          >
            {theme === 'dark' ? 'Escuro' : theme === 'light' ? 'Claro' : theme}
          </PopoverMenu.Item>
        </Button>
      ))}
    </>
  );
};

ThemePopoverMenuItens.displayName = 'ThemePopoverMenuItem';
