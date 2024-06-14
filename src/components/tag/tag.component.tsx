import { forwardRef } from 'react';

import styles from './tag.module.scss';

interface TagPropsWithRef
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  > {
  status?:
    | 'default'
    | 'neutral'
    | 'primary'
    | 'secondary'
    | 'positive'
    | 'warning'
    | 'negative'
    | 'info'
    | 'received'
    | 'pending'
    | 'emphasis'
    | 'sent'
    | 'active'
    | 'current'
    | 'new'
    | 'success'
    | 'error'
    | 'rejected'
    | 'declined'
    | 'discreet'
    | 'inactive';
}

export type TagProps = Omit<TagPropsWithRef, 'ref'>;

/**
 * # Tag element
 * > A context-customizable tag container element
 *---
 * @example
 * ```tsx
 * <Tag status="positive">Lorem ipsum</Tag>
 * ```
 *---
 * @param status - Component stylization status. __Default: "default"__
 */
export const Tag = forwardRef<HTMLSpanElement, TagPropsWithRef>(
  ({ status = 'default', children, className, ...props }, ref) => (
    <span
      ref={ref}
      className={`${styles.container} ${className}`}
      data-status={status}
      {...props}
    >
      {children}
    </span>
  ),
);

Tag.displayName = 'Tag';
