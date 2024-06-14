/**
 * # WhatsAppSVG component
 * > This is an inline SVG as a component
 *---
 * @example
 * ```tsx
 * <WhatsAppSVG />
 * ```
 */
export const WhatsAppSVG = ({
  viewBox = '0 0 24 24',
  fill = 'currentColor',
  strokeWidth = '0',
  strokeLinecap = 'round',
  strokeLinejoin = 'round',
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox}
    strokeLinecap={strokeLinecap}
    strokeLinejoin={strokeLinejoin}
    fill={fill}
    strokeWidth={strokeWidth}
    {...props}
  >
    <path d="M17.002 13.583c-.04-.02-1.551-.764-1.82-.86a1.045 1.045 0 00-.351-.078c-.205 0-.376.102-.51.301-.15.225-.607.759-.748.918-.019.021-.044.047-.06.047-.013 0-.246-.097-.317-.127-1.621-.705-2.851-2.398-3.02-2.683-.024-.041-.025-.06-.026-.06a.486.486 0 01.09-.104c.081-.082.17-.19.257-.293.04-.05.082-.099.122-.145.125-.146.18-.259.245-.39l.034-.068a.705.705 0 00-.02-.663c-.036-.071-.674-1.611-.742-1.773-.163-.39-.379-.572-.678-.572-.028 0 0 0-.117.005-.142.006-.915.108-1.256.323-.363.228-.976.957-.976 2.237 0 1.153.732 2.241 1.046 2.655l.043.062c1.203 1.757 2.702 3.059 4.222 3.666 1.463.584 2.156.652 2.55.652 0 0 0 0 0 0 .166 0 .298-.013.415-.025l.074-.007c.506-.045 1.616-.62 1.87-1.322.198-.553.25-1.158.118-1.377-.09-.15-.247-.224-.445-.32z" />
    <path d="M12.213 1.673c-5.613 0-10.18 4.533-10.18 10.104 0 1.802.482 3.566 1.396 5.11L1.68 22.043a.27.27 0 00.337.343l5.378-1.71a10.249 10.249 0 004.818 1.202c5.613 0 10.18-4.532 10.18-10.102 0-5.571-4.567-10.104-10.18-10.104zm0 18.102a8.065 8.065 0 01-4.437-1.323.269.269 0 00-.23-.032l-2.693.857.87-2.566a.27.27 0 00-.038-.245 7.89 7.89 0 01-1.535-4.69c0-4.41 3.617-7.998 8.063-7.998 4.446 0 8.063 3.588 8.063 7.999 0 4.41-3.617 7.998-8.063 7.998z" />
  </svg>
);

WhatsAppSVG.displayName = 'WhatsAppSVG';