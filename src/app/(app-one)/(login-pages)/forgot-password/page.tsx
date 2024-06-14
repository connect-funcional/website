import { Link, Title } from '@/components';
import { route } from '@/config/route';

import styles from './page.module.scss';

export const metadata = {
  title: 'Login',
};

export default async function LoginPage() {
  return (
    <div className={styles.page}>
      <Title.H1>Esqueceu a senha?</Title.H1>

      <p>Aqui vem o conteúdo da página.</p>

      <p>
        <Link href={route.LOGIN}>Voltar à página de login</Link>
      </p>
    </div>
  );
}
