/**
 * ## RegEx
 * @param EMAIL - Email format
 * @param PASSWORD - Minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character.
 */
export const regex = {
  // eslint-disable-next-line prettier/prettier, no-useless-escape
  EMAIL:
    "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/",
  PASSWORD: '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$',
} as const;
