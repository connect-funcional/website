import Image, { ImageProps } from 'next/image';

import styles from './theme-image.module.scss';

export interface ThemeImageProps
  extends Omit<ImageProps, 'src' | 'priority' | 'loading'> {
  srcLight: string;
  srcDark: string;
}

/**
 * # ThemeImage element
 *
 * A custom Next Image element with support to themes
 *
 * Note: The default behavior of loading="lazy" ensures that only the
 * correct image is loaded. You cannot use priority or loading="eager"
 * because that would cause both images to load. Instead, you can use
 * fetchPriority="high".
 *---
 * @example
 * ```tsx
 * <ThemeImage
 *   srcLight="/light.png"
 *   srcDark="/dark.png"
 *   alt="Here comes the alt message"
 *   height={40}
 *   width={146} />
 * ```
 *---
 * @param srcLight Image to light themes.
 * @param srcDark Image to dark themes.
 */
export const ThemeImage = ({
  srcLight,
  srcDark,
  alt,
  className,
  ...props
}: ThemeImageProps) => (
  <>
    <Image
      src={srcLight}
      alt={alt}
      className={`${styles.imgLight}${className ? ` ${className}` : ''}`}
      {...props}
    />
    <Image
      src={srcDark}
      alt={alt}
      className={`${styles.imgDark}${className ? ` ${className}` : ''}`}
      {...props}
    />
  </>
);

ThemeImage.displayName = 'ThemeImage';
