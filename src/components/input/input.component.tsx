import styles from './input.module.scss';

interface InputPropsWithRef
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  validationStyles?: boolean;
  status?: 'unset' | 'valid' | 'invalid';
}

export type InputProps = Omit<InputPropsWithRef, 'ref'>;

/**
 * # Input element
 * > A custom HTML input element with extra parameters
 *---
 * @example
 * ```tsx
 * <Input
 *   type="email"
 *   placeholder="example@email.com"
 *   validationStyles
 *   required
 *   pattern="[A-Za-z0-9._+-]+@[A-Za-z0-9 -]+\.[a-z]{2,}"
 * />
 * ```
 *---
 * @param validationStyles - Automatic set the validation status styles by RegEx pattern. __Default: true__
 * @param status - Manually set validation status styles. __Default: 'unset'__
 */
export const Input = ({
  className,
  validationStyles = true,
  status = 'unset',
  placeholder = ' ',
  ...props
}: InputPropsWithRef) => (
  <input
    className={`${styles.container}${className ? ` ${className}` : ''}`}
    data-validationstyles={validationStyles}
    data-status={status}
    placeholder={placeholder}
    {...props}
  />
);

Input.displayName = 'Input';
