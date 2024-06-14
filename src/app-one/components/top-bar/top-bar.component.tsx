import styles from './top-bar.module.scss';

type DivProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

interface RootBarProps extends DivProps {
  background?: 'default' | 'surface-3' | 'none';
}

const Root = ({
  children,
  className,
  background = 'default',
  ...props
}: RootBarProps) => (
  <div
    className={`${styles['root-container']}${className ? ` ${className}` : ''}`}
    data-background={background}
    {...props}
  >
    {children}
  </div>
);

const Section = ({ children, className, ...props }: DivProps) => (
  <div
    className={`${styles['section-container']}${
      className ? ` ${className}` : ''
    }`}
    {...props}
  >
    {children}
  </div>
);

Root.displayName = 'TopBar.Root';
Section.displayName = 'TopBar.Section';

/**
 * # TopBar component
 * > Component to create bar
 *---
 * @example
 * ```tsx
 * <TopBar.Root>
 *   <TopBar.Section>
 *     // content...
 *   </TopBar.Section>
 *
 *   <TopBar.Section>
 *     // content...
 *   </TopBar.Section>
 * </TopBar.Root>
 * ```
 *
 *---
 * ### TopBar.Root
 * - Wraps all component elements
 * @param background - Background variation. __Default: "default"__
 *
 *---
 * ### TopBar.Section
 * - Wraps and divides content sections
 */
export const TopBar = { Root, Section };
