import { forwardRef } from 'react';

import styles from './title.module.scss';

export interface TitlePropsWithRef
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  size?: 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl';
  weight?: 'normal' | 'semibold' | 'bold';
}

export type TitleProps = Omit<TitlePropsWithRef, 'ref'>;

const H1 = forwardRef<HTMLHeadingElement, TitlePropsWithRef>(
  ({ size = '2xl', weight = 'normal', children, className, ...props }, ref) => (
    <h1
      ref={ref}
      className={`${styles.container} ${className}`}
      data-size={size}
      data-weight={weight}
      {...props}
    >
      {children}
    </h1>
  ),
);

const H2 = forwardRef<HTMLHeadingElement, TitleProps>(
  ({ size = 'xl', weight = 'normal', children, className, ...props }, ref) => (
    <h2
      ref={ref}
      className={`${styles.container} ${className}`}
      data-size={size}
      data-weight={weight}
      {...props}
    >
      {children}
    </h2>
  ),
);

const H3 = forwardRef<HTMLHeadingElement, TitleProps>(
  ({ size = 'l', weight = 'normal', children, className, ...props }, ref) => (
    <h3
      ref={ref}
      className={`${styles.container} ${className}`}
      data-size={size}
      data-weight={weight}
      {...props}
    >
      {children}
    </h3>
  ),
);

H1.displayName = 'Title.H1';
H2.displayName = 'Title.H2';
H3.displayName = 'Title.H3';

/**
 * # Title element
 * > A custom HTML heading ("h1", "h2", "h3") with extra parameters
 *---
 * @example
 * ```tsx
 * <Title.H1 size="xl">Lorem ipsum</Title>
 * <Title.H2 size="l">Lorem ipsum</Title>
 * <Title.H3 size="m">Lorem ipsum</Title>
 * ```
 *---
 * @param size - Font size. __Default: "l"__
 */
export const Title = { H1, H2, H3 };
