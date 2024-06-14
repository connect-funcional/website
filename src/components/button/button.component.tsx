import { forwardRef } from 'react';

import { BorderRadius } from '../props/border-radius.type';
import styles from './button.module.scss';

export interface ButtonPropsWithRef
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  status?:
    | 'default'
    | 'default-ghost'
    | 'default-outline'
    | 'primary'
    | 'primary-ghost'
    | 'primary-outline'
    | 'neutral'
    | 'neutral-ghost'
    | 'neutral-outline'
    | 'positive'
    | 'positive-ghost'
    | 'positive-outline'
    | 'warning'
    | 'warning-ghost'
    | 'warning-outline'
    | 'negative'
    | 'negative-ghost'
    | 'negative-outline'
    | 'info'
    | 'info-ghost'
    | 'info-outline'
    | 'plain-link'
    | 'plain-foreground'
    | 'plain-unset'
    | 'plain-primary'
    | 'plain-neutral'
    | 'plain-positive'
    | 'plain-warning'
    | 'plain-negative'
    | 'plain-info';
  current?:
    | boolean
    | 'bg-semitransparent-1'
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
    | 'text-underline-neutral-5-i'
    | 'left-line-primary-1'
    | 'left-line-primary-2'
    | 'left-line-primary-3'
    | 'left-line-primary-4'
    | 'left-line-primary-5'
    | 'left-line-primary-1-i'
    | 'left-line-primary-2-i'
    | 'left-line-primary-3-i'
    | 'left-line-primary-4-i'
    | 'left-line-primary-5-i'
    | 'left-line-neutral-1'
    | 'left-line-neutral-2'
    | 'left-line-neutral-3'
    | 'left-line-neutral-4'
    | 'left-line-neutral-5'
    | 'left-line-neutral-1-i'
    | 'left-line-neutral-2-i'
    | 'left-line-neutral-3-i'
    | 'left-line-neutral-4-i'
    | 'left-line-neutral-5-i';
  fullWidth?: boolean;
  borderRadius?: BorderRadius;
}

export type ButtonProps = Omit<ButtonPropsWithRef, 'ref'>;

/**
 * # Button element
 * > A custom HTML button with extra parameters
 *---
 * @example
 * ```tsx
 * <Button status="negative">Lorem ipsum</Button>
 * ```
 *---
 * @param status - Component stylization status. __Default: "default"__
 * @param current - Set current state stylization. __Default: false__
 * @param fullWidth - If true, the component size will be full width. __Default: false__
 * @param borderRadius - Border radius. __Default: true__
 */
export const Button = forwardRef<HTMLButtonElement, ButtonPropsWithRef>(
  (
    {
      children,
      className,
      type = 'button',
      status = 'default',
      current = false,
      fullWidth = false,
      borderRadius = true,
      ...props
    },
    ref,
  ) => (
    <button
      ref={ref}
      type={type}
      className={`${styles.container}${className ? ` ${className}` : ''}`}
      data-status={status}
      data-current={current}
      data-fullwidth={fullWidth}
      data-borderradius={
        status === 'plain-link' ||
        status === 'plain-foreground' ||
        status === 'plain-unset' ||
        status === 'plain-primary' ||
        status === 'plain-neutral' ||
        status === 'plain-positive' ||
        status === 'plain-warning' ||
        status === 'plain-negative' ||
        status === 'plain-info'
          ? false
          : borderRadius
      }
      {...props}
    >
      {children}
    </button>
  ),
);

Button.displayName = 'Button';
