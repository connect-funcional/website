import styles from './icon.module.scss';

export interface IconProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  status?:
    | 'default'
    | 'foreground'
    | 'primary-1'
    | 'primary-2'
    | 'primary-3'
    | 'primary-4'
    | 'primary-5'
    | 'primary-1-i'
    | 'primary-2-i'
    | 'primary-3-i'
    | 'primary-4-i'
    | 'primary-5-i'
    | 'neutral-1'
    | 'neutral-2'
    | 'neutral-3'
    | 'neutral-4'
    | 'neutral-5'
    | 'neutral-1-i'
    | 'neutral-2-i'
    | 'neutral-3-i'
    | 'neutral-4-i'
    | 'neutral-5-i'
    | 'positive-1'
    | 'positive-2'
    | 'positive-3'
    | 'positive-4'
    | 'positive-5'
    | 'positive-1-i'
    | 'positive-2-i'
    | 'positive-3-i'
    | 'positive-4-i'
    | 'positive-5-i'
    | 'warning-1'
    | 'warning-2'
    | 'warning-3'
    | 'warning-4'
    | 'warning-5'
    | 'warning-1-i'
    | 'warning-2-i'
    | 'warning-3-i'
    | 'warning-4-i'
    | 'warning-5-i'
    | 'negative-1'
    | 'negative-2'
    | 'negative-3'
    | 'negative-4'
    | 'negative-5'
    | 'negative-1-i'
    | 'negative-2-i'
    | 'negative-3-i'
    | 'negative-4-i'
    | 'negative-5-i'
    | 'info-1'
    | 'info-2'
    | 'info-3'
    | 'info-4'
    | 'info-5'
    | 'info-1-i'
    | 'info-2-i'
    | 'info-3-i'
    | 'info-4-i'
    | 'info-5-i';
}

/**
 * # Icon component
 * > Component to wrap icon
 *---
 * @example
 * ```tsx
 * <Icon status="neutral">
 *    // SVG image comes here
 * </Icon>
 * ```
 *---
 * @param status - Component stylization status. __Default: "default"__
 */
export const Icon = ({
  status = 'default',
  children,
  className,
  ...props
}: IconProps) => (
  <div
    className={`${styles.container}${className ? ` ${className}` : ''}`}
    data-status={status}
    {...props}
  >
    {children}
  </div>
);

Icon.displayName = 'Icon';
