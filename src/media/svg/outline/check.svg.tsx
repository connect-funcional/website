/**
 * # CheckSVG component
 * > This is an inline SVG as a component
 *---
 * @example
 * ```tsx
 * <CheckSVG />
 * ```
 */
export const CheckSVG = ({
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
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

CheckSVG.displayName = 'CheckSVG';
