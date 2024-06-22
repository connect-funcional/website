import { forwardRef } from 'react';

import { Link, ThemeImage } from '@/components';

import styles from './logo.module.scss';

type DivProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const Logo = forwardRef<HTMLDivElement, DivProps>(
  ({ ...props }, ref) => (
    <div ref={ref} className={styles.container} {...props}>
      <Link status="foreground" href="/">
        <ThemeImage
          srcLight="/logo-connect-light-bg.png"
          srcDark="/logo-connect-dark-bg.png"
          alt="Logotipo da Connect Funcional"
          className={styles['logo-connect-img']}
          height={40}
          width={146}
          fetchPriority="high"
        />
      </Link>
    </div>
  ),
);

Logo.displayName = 'Logo';
