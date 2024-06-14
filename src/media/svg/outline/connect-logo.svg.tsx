/**
 * # ConnectLogo component
 * > This is an inline SVG as a component
 *---
 * @example
 * ```tsx
 * <ConnectLogo />
 * ```
 */
export const ConnectLogo = ({
  width = '25',
  height = '25',
  viewBox = '0 0 24 24',
  fill = 'none',
  stroke = 'currentColor',
  strokeWidth = '1.6',
  strokeLinecap = 'round',
  strokeLinejoin = 'round',
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox={viewBox}
    fill={fill}
    stroke={stroke}
    strokeWidth={strokeWidth}
    strokeLinecap={strokeLinecap}
    strokeLinejoin={strokeLinejoin}
    {...props}
  >
    <g fill="currentColor" fillRule="evenodd">
      <path
        d="M170.602 152.012c-17.311-4.453-43.39 5.986-58.25 23.317-14.858 17.33-12.87 34.99 4.442 39.443 3.42.88 7.182 1.176 11.131.955a74.894 74.894 0 01-2.457-10.743c-.078-.019-.156-.037-.233-.057-14.62-3.76-18.204-16.45-8.007-28.344 10.197-11.894 30.314-18.487 44.934-14.726 14.618 3.76 18.203 16.45 8.006 28.344-7.368 8.594-19.916 14.42-31.827 15.572.005 2.681.248 5.41.709 8.11 13.13-3.513 26.738-11.633 35.993-22.428 14.859-17.33 12.87-34.99-4.441-39.443z"
        transform="translate(-21.498 -34.661) scale(.22992)"
      />
      <path
        d="M129.703 181.81c-6.588 16.616.498 43.798 15.83 60.713 15.33 16.914 33.1 17.156 39.688.54 5.37-13.543 1.655-34.103-8.202-50.404l-.241.284a64.975 64.975 0 01-3.066 3.33c5.684 11.544 7.088 26.368 2.8 37.181-5.564 14.032-18.604 15.997-29.125 4.39-10.52-11.609-14.539-32.394-8.975-46.426 5.564-14.032 18.604-15.997 29.125-4.39.4.441.789.897 1.17 1.363a25.949 25.949 0 002.639-3.776 61.787 61.787 0 00-1.954-2.266c-15.33-16.914-33.1-17.156-39.689-.54z"
        transform="translate(-21.498 -34.661) scale(.22992)"
      />
    </g>
  </svg>
);

ConnectLogo.displayName = 'ConnectLogo';
