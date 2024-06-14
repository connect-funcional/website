'use client';

import { useRouter } from 'next/navigation';

import { Button, ButtonProps } from './button.component';

export interface GoToButtonProps extends ButtonProps {
  href: string;
  onClick?: () => void;
}

/**
 * # GoToButton component
 * > The app's custom Button component with the extra functionality of
 * redirecting to a new route.
 *---
 * @example
 * ```tsx
 * <GoToButton href="/lorem-ipsum">Lorem ipsum</Link>
 * ```
 *---
 * @param href - Path to redirect (required)
 */
export const GoToButton = ({
  children,
  href,
  onClick: customOnClick,
  ...props
}: GoToButtonProps) => {
  const router = useRouter();

  const handleOnClick = (customOnClick?: () => void) => {
    if (customOnClick) customOnClick();
    router.push(href);
  };

  return (
    <Button onClick={() => handleOnClick(customOnClick)} {...props}>
      {children}
    </Button>
  );
};

GoToButton.displayName = 'GoToButton';
