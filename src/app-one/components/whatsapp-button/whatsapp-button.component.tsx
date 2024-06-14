import Image from 'next/image';
import { forwardRef } from 'react';

import { Link } from '@/components';

import styles from './whatsapp-button.module.scss';

type DivProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const WhatsAppButton = forwardRef<HTMLDivElement, DivProps>(
  ({ ...props }, ref) => (
    <Link
      status="foreground"
      href="https://api.whatsapp.com/send?phone=5561999514331"
      className={styles.link}
    >
      <div ref={ref} className={styles.container} {...props}>
        <Image
          src="/whatsapp-white.svg"
          alt="Logo do WhatsApp"
          width={30}
          height={30}
        />
      </div>
    </Link>
  ),
);

WhatsAppButton.displayName = 'WhatsAppButton';
