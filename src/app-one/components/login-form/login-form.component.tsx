'use client';

import { useRouter } from 'next/navigation';
import { DetailedHTMLProps, FormHTMLAttributes } from 'react';

import { Button, Input, Title } from '@/components';
import { regex, route } from '@/config';

import styles from './login-form.module.scss';

interface LoginFormProps
  extends DetailedHTMLProps<
    FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {}

export const LoginForm = ({ className, ...props }: LoginFormProps) => {
  const router = useRouter();

  return (
    <form className={`${styles.form} ${className || ''}`} {...props}>
      <Title.H1 size="2xl">Login</Title.H1>

      <label>
        <span className={styles['label-text']}>E-mail</span>

        <Input
          type="email"
          name="email"
          className={styles.input}
          placeholder="E-mail"
          validationStyles
          required
          pattern={regex.EMAIL}
        />
      </label>

      <label>
        <span className={styles['label-text']}>Senha</span>

        <Input
          type="password"
          name="password"
          className={styles.input}
          placeholder="Senha"
          validationStyles
          required
          pattern={regex.PASSWORD}
        />
      </label>

      <div className={styles['bottom-container']}>
        {/* <Link href={route.FORGOT_PASSWORD}>Esqueci o password</Link> */}

        <Button status="primary" onClick={() => router.push(`${route.HOME}`)}>
          Prosseguir
        </Button>
      </div>
    </form>
  );
};
