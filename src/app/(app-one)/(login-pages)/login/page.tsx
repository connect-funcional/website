import { LoginForm } from '@/app-one/components';

import styles from './page.module.scss';

export const metadata = {
  title: 'Login',
};

export default async function LoginPage() {
  return (
    <div className={styles.page}>
      <LoginForm />
    </div>
  );
}
