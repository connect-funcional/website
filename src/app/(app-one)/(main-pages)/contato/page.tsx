import Image from 'next/image';

import { Div, Icon, Link, Title } from '@/components';
import { FacebookSVG, InstagramSVG, WhatsAppSVG } from '@/media/svg';

import styles from './page.module.scss';

export default async function Page() {
  return (
    <div className={styles.container}>
      <Div display="flex-column" gap="2xl">
        <Title.H2 size="2xl">Entre em contato conosco</Title.H2>

        <Div display="flex" flexWrap="wrap" gap="2xl">
          <Link
            href="https://api.whatsapp.com/send?phone=5561999514331"
            target="_blank"
            style={{ textDecoration: 'none' }}
          >
            <Image
              src="/whatsapp.svg"
              alt="Logo do WhatsApp"
              width={50}
              height={50}
              style={{ marginTop: '6px' }}
            />
          </Link>

          <p>
            Agende um treino grátis
            <br />
            <Link
              href="https://api.whatsapp.com/send?phone=5561999514331"
              target="_blank"
              style={{ textDecoration: 'none' }}
            >
              <b>(61) 99951-4331</b>
            </Link>
          </p>
        </Div>
      </Div>

      <Div display="flex-column" gap="2xl">
        <Title.H2 size="2xl">Local</Title.H2>

        <p>
          SGAS 906, CONJUNTO A, BLOCO 6/8
          <br />
          ASA SUL, BRASÍLIA - DF
          <br />
          Entrada pela Faculdade Mackenzie
        </p>

        <p>
          Horário de Funcionamento
          <br />
          Segunda a sexta, das 6h às 12h e das 15h às 21h
          <br />
          Sábado das 8h às 12h
        </p>

        <p>
          <Link
            href="https://maps.app.goo.gl/Rn7QiSQUcseKbEty8"
            target="_blank"
          >
            Abrir no Google Maps
          </Link>
        </p>
      </Div>

      <Div display="flex-column" gap="2xl">
        <Title.H2 size="2xl">Siga-nos</Title.H2>

        <p>Veja fotos, novidades e postagens em nossas redes sociais.</p>

        <Div display="flex" flexWrap="wrap" gap="2xl">
          <Link
            href="https://www.instagram.com/connectfuncional/"
            target="_blank"
            status="foreground"
            className={styles['follow-links']}
          >
            <Div
              status="surface-4"
              display="flex"
              padding="l"
              gap="2xl"
              borderRadius
              style={{ minHeight: '80px' }}
            >
              <Icon>
                <InstagramSVG />
              </Icon>

              <Title.H3>
                Instagram
                <br />
                <i
                  style={{
                    fontSize: 'var(--font-size-m)',
                    color: 'var(--color-neutral-4-i)',
                  }}
                >
                  @connectfuncional
                </i>
              </Title.H3>
            </Div>
          </Link>

          <Link
            href="https://www.facebook.com/ConnectFuncional/"
            target="_blank"
            status="foreground"
            className={styles['follow-links']}
          >
            <Div
              status="surface-4"
              display="flex"
              padding="l"
              gap="2xl"
              borderRadius
              style={{ minHeight: '80px' }}
            >
              <Icon>
                <FacebookSVG />
              </Icon>

              <Title.H3>
                Facebook
                <br />
                <i
                  style={{
                    fontSize: 'var(--font-size-m)',
                    color: 'var(--color-neutral-4-i)',
                  }}
                >
                  ConnectFuncional
                </i>
              </Title.H3>
            </Div>
          </Link>

          <Link
            href="https://api.whatsapp.com/send?phone=5561999514331"
            target="_blank"
            status="foreground"
            className={styles['follow-links']}
          >
            <Div
              status="surface-4"
              display="flex"
              padding="l"
              gap="2xl"
              borderRadius
              style={{ minHeight: '80px' }}
            >
              <Icon>
                <WhatsAppSVG />
              </Icon>

              <Title.H3>
                WhatsApp
                <br />
                <i
                  style={{
                    fontSize: 'var(--font-size-m)',
                    color: 'var(--color-neutral-4-i)',
                  }}
                >
                  (61) 99951-4331
                </i>
              </Title.H3>
            </Div>
          </Link>
        </Div>
      </Div>
    </div>
  );
}
