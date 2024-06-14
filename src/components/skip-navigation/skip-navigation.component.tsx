import styles from './skip-navigation.module.scss';

type AnchorProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

const Link = ({ className, children, ...props }: AnchorProps) => (
  <a
    className={`${styles['skip-navigation']}${
      className ? ` ${className}` : ''
    }`}
    {...props}
  >
    {children}
  </a>
);

Link.displayName = 'SkipNavigation.Link';

/**
 * # SkipNavigation component
 * > Component that only appears with keyboard focus and when clicked
 * escapes navigation menus and sends the user's keyboard focus to the
 * page's content.
 *---
 * @example
 * ```tsx
 * <SkipNavigation.Link href="#main">
 *   Skip navigation
 * </SkipNavigation.Link>
 * ```
 *---
 * @param href - Path to the page's content id (required)
 */
export const SkipNavigation = { Link };
