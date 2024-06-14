import Image from 'next/image';

import { Div, Link, Title } from '@/components';

import styles from './page.module.scss';

export default async function Page() {
  return (
    <div className={styles.container}>
      <Div display="flex-column" gap="2xl">
        {/* <Title.H1 size="3xl">Estrutura</Title.H1> */}

        <div className={styles['big-image-container']}>
          <Image
            src="/photo-004-600px-500px.jpeg"
            alt="Foto do estabelecimento"
            width={600}
            height={500}
            className={styles['big-image']}
          />
        </div>
      </Div>

      <Div display="flex" flexWrap="wrap" style={{ gap: '70px' }}>
        <Div display="flex-column" gap="2xl">
          <Title.H2 size="2xl">Endereço</Title.H2>

          <p>
            SGAS 906, CONJUNTO A, BLOCO 6/8
            <br />
            ASA SUL, BRASÍLIA - DF
            <br />
            Entrada pela Faculdade Mackenzie
          </p>
        </Div>

        <Div display="flex-column" gap="2xl">
          <Title.H2 size="2xl">Horário de Funcionamento</Title.H2>
          <p>
            Segunda a sexta, das 6h às 12h e das 15h às 21h
            <br />
            Sábado das 8h às 12h
          </p>
        </Div>
      </Div>

      <Div display="flex" flexWrap="wrap" style={{ gap: '70px' }}>
        <Div display="flex-column" gap="2xl">
          <Title.H2 size="2xl">Agende a sua visita</Title.H2>

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
              Faça um treino gratuito conosco
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
          <Title.H2 size="2xl">Mapa</Title.H2>

          <Div display="flex" flexWrap="wrap" gap="2xl">
            <Link
              href="https://maps.app.goo.gl/4BbWWf8nUTJHUyPc8"
              target="_blank"
              style={{ textDecoration: 'none' }}
            >
              <Image
                src="/map-50px.png"
                alt="Ícone de mapa"
                width={50}
                height={50}
                style={{ marginTop: '6px' }}
              />
            </Link>

            <p>
              Veja nossa localização no Google Maps
              <br />
              <Link
                href="https://maps.app.goo.gl/4BbWWf8nUTJHUyPc8"
                target="_blank"
                style={{ textDecoration: 'none' }}
              >
                <b>Abrir Google Maps</b>
              </Link>
            </p>
          </Div>
        </Div>
      </Div>
    </div>
  );
}
