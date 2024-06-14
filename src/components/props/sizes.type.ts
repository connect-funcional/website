export type Sizes =
  | '5xl'
  | '4xl'
  | '3xl'
  | '2xl'
  | 'xl'
  | 'l'
  | 'm'
  | 's'
  | 'xs'
  | '2xs'
  | '3xs'
  | 'unset';

export interface SizesSidesObject {
  top?: Sizes;
  bottom?: Sizes;
  left?: Sizes;
  right?: Sizes;
}

export interface SizesColumnRowObject {
  column?: Sizes;
  row?: Sizes;
}
