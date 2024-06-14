import { BorderRadius } from '../props/border-radius.type';
import { Display } from '../props/display.type';
import { FlexWrap } from '../props/flex-wrap.type';
import { JustifyContent } from '../props/justify-content.type';
import {
  Sizes,
  SizesColumnRowObject,
  SizesSidesObject,
} from '../props/sizes.type';
import styles from './div.module.scss';

type HTMLDivElementProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export interface DivProps extends HTMLDivElementProps {
  status?:
    | 'unset'
    | 'surface-1'
    | 'surface-2'
    | 'surface-3'
    | 'surface-4'
    | 'ghost'
    | 'over';
  display?: Display;
  justifyContent?: JustifyContent;
  flexWrap?: FlexWrap;
  padding?: Sizes | SizesSidesObject;
  margin?: Sizes | SizesSidesObject;
  gap?: Sizes | SizesColumnRowObject;
  borderRadius?: BorderRadius;
}

/**
 * # Div component
 * > HTML "div" element with custom proprieties
 *---
 * @example
 * ```tsx
 * <Div>
 *   // Here comes the content...
 * </Div>
 * ```
 *---
 * @param status - Component stylization status. __Default: 'unset'__
 * @param display - CSS "display" combine with other props. __Default: 'flex-column'__
 * @param justifyContent - Justify content. __Default: 'unset'__
 * @param flexWrap - Flex wrap. __Default: 'unset'__
 * @param padding - Padding spaces. __Default: 'unset'__
 * @param margin - Margin spaces. __Default: 'unset'__
 * @param gap - Gap spaces. __Default: 'm'__
 * @param borderRadius - Border radius. __Default: 'unset'__
 */
export const Div = ({
  children,
  className,
  status = 'unset',
  display = 'flex-column',
  justifyContent = 'unset',
  flexWrap = 'unset',
  padding = 'unset',
  margin = 'unset',
  gap = 'm',
  borderRadius = 'unset',
  ...props
}: DivProps) => (
  <div
    className={`${styles.container}${className ? ` ${className}` : ''}`}
    data-status={status}
    data-display={display}
    data-justifycontent={justifyContent}
    data-flexwrap={flexWrap}
    data-padding={typeof padding === 'string' ? padding : undefined}
    data-paddingtop={
      padding instanceof Object && 'top' in padding ? padding.top : undefined
    }
    data-paddingbottom={
      padding instanceof Object && 'bottom' in padding
        ? padding.bottom
        : undefined
    }
    data-paddingleft={
      padding instanceof Object && 'left' in padding ? padding.left : undefined
    }
    data-paddingright={
      padding instanceof Object && 'right' in padding
        ? padding.right
        : undefined
    }
    data-margin={typeof margin === 'string' ? margin : undefined}
    data-margintop={
      margin instanceof Object && 'top' in margin ? margin.top : undefined
    }
    data-marginbottom={
      margin instanceof Object && 'bottom' in margin ? margin.bottom : undefined
    }
    data-marginleft={
      margin instanceof Object && 'left' in margin ? margin.left : undefined
    }
    data-marginright={
      margin instanceof Object && 'right' in margin ? margin.right : undefined
    }
    data-gap={typeof gap === 'string' ? gap : undefined}
    data-columngap={
      gap instanceof Object && 'column' in gap ? gap.column : undefined
    }
    data-rowgap={gap instanceof Object && 'row' in gap ? gap.row : undefined}
    data-borderradius={borderRadius}
    {...props}
  >
    {children}
  </div>
);

Div.displayName = 'Div';
