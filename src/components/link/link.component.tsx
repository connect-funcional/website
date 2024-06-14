'use client';

import NextLink from 'next/link';
import { ComponentProps } from 'react';

import styles from './link.module.scss';

type NextLinkProps = ComponentProps<typeof NextLink>;

export interface LinkProps extends NextLinkProps {
  addLocaleInHref?: boolean;
  current?:
    | boolean
    | 'text-underline-primary-1'
    | 'text-underline-primary-2'
    | 'text-underline-primary-3'
    | 'text-underline-primary-4'
    | 'text-underline-primary-5'
    | 'text-underline-primary-1-i'
    | 'text-underline-primary-2-i'
    | 'text-underline-primary-3-i'
    | 'text-underline-primary-4-i'
    | 'text-underline-primary-5-i'
    | 'text-underline-neutral-1'
    | 'text-underline-neutral-2'
    | 'text-underline-neutral-3'
    | 'text-underline-neutral-4'
    | 'text-underline-neutral-5'
    | 'text-underline-neutral-1-i'
    | 'text-underline-neutral-2-i'
    | 'text-underline-neutral-3-i'
    | 'text-underline-neutral-4-i'
    | 'text-underline-neutral-5-i';
  status?:
    | 'default'
    | 'foreground'
    | 'unset'
    | 'primary'
    | 'neutral'
    | 'positive'
    | 'warning'
    | 'negative'
    | 'info';
  disabled?: boolean;
}

export type LinkPropsWithoutHref = Omit<LinkProps, 'href'>;

/**
 * # Link component
 * > A custom Next.js Link component with extra parameters
 *---
 * @example
 * ```tsx
 * <Link href="/lorem-ipsum" status="positive">Lorem ipsum</Link>
 * ```
 *---
 * @param current - Set current state stylization. __Default: false__
 * @param status - Component stylization status. __Default: "default"__
 * @param disabled - Disabled status. __Default: false__
 */
export const Link = ({
  children,
  className,
  href,
  current = false,
  status = 'default',
  disabled = false,
  ...props
}: LinkProps) => {
  const targetHref = href.toString();

  return (
    <NextLink
      href={targetHref}
      className={`${styles.container}${className ? ` ${className}` : ''}`}
      data-current={current}
      data-status={status}
      data-disabled={disabled}
      {...(disabled && { 'aria-disabled': true })}
      {...props}
    >
      {children}
    </NextLink>
  );
};

Link.displayName = 'Link';
