/**
 * # XSVG component
 * > This is an inline SVG as a component
 *---
 * @example
 * ```tsx
 * <XSVG />
 * ```
 */
export const XSVG = ({
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
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

XSVG.displayName = 'XSVG';
