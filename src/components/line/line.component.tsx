import styles from './line.module.scss';

// export interface LineProps
//   extends React.DetailedHTMLProps<
//     React.HTMLAttributes<HTMLHRElement>,
//     HTMLHRElement
//   > {
//   // ...
// }

export type LineProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHRElement>,
  HTMLHRElement
>;

/**
 * # Line element
 * > A custom HTML `<hr />`
 *---
 * @example
 * ```tsx
 * <Line />
 * ```
 */
export const Line = ({ className, ...props }: LineProps) => (
  <hr
    className={`${styles.container}${className ? ` ${className}` : ''}`}
    {...props}
  />
);

Line.displayName = 'Line';
