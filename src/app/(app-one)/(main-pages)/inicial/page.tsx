import Image from 'next/image';

import { Div, Icon, Link, Title } from '@/components';
import { route } from '@/config';
import { FacebookSVG, InstagramSVG, WhatsAppSVG } from '@/media/svg';

import styles from './page.module.scss';

export default async function Page() {
  return (
    <div className={styles.container}>
      <Div display="flex-column" gap="2xl">
        <Title.H1 size="3xl">A Connect Funcional</Title.H1>

        <Div
          status="surface-3"
          display="flex"
          justifyContent="space-between"
          flexWrap="wrap"
          padding="l"
          gap="2xl"
          borderRadius
        >
          <Div display="flex-column" gap="2xl">
            <p>
              Somos uma empresa de <b>Treinamento Funcional</b> capacitada para
              avaliar e gerenciar treinos físicos, focando no relacionamento
              entre movimento e consciência corporal. Usamos{' '}
              <b>
                as mais modernas técnicas e equipamentos do mercado nacional e
                internacional
              </b>
              , seguindo a evolução do treinamento funcional em todas as suas
              vertentes.
            </p>

            <p>
              Iniciamos o nosso trabalho com uma Avaliação Funcional do
              Movimento e posteriormente apresentamos estratégias de correção,
              evolução de movimento e aquisição de todas as outras valências
              físicas como: força, potência e resistência física. Traçamos metas
              coerentes com a realidade e objetivos dos nossos alunos.
            </p>

            <p>
              Todos os nossos{' '}
              <b>
                profissionais são certificados nas mais renomadas instituições
                de treinamento integrado do mundo
              </b>
              , como: <b>EXOS, FMS e COOPER INSTITUTE</b>.
            </p>
          </Div>

          <div className={styles['small-image-container']}>
            <Image
              src="/photo-001-330px-330px.png"
              alt="Foto de treinamento na Connect Functional"
              width={330}
              height={330}
              className={`${styles.image} ${styles['saturate-image']}`}
            />
          </div>

          <div className={styles['small-image-container']}>
            <Image
              src="/photo-002-330px-330px.jpg"
              alt="Foto da estrutura da Connect Functional"
              width={330}
              height={330}
              className={`${styles.image} ${styles['saturate-image']}`}
            />
          </div>

          <Div display="flex-column" gap="2xl">
            <p>
              Com nosso sistema de avaliação identificamos links frágeis e
              construímos nosso programa para tornar o corpo mais apto aos
              desafios e demandas impostos no dia a dia. A sistematização das
              nossas ações também é algo a se destacar, criamos um{' '}
              <b>
                ambiente propício para avançarmos nos objetivos específicos de
                cada um dos nossos alunos
              </b>
              , sejam eles ligados a melhora de performance no esporte ou na
              aquisição de força, hipertrofia e resistência física ou na
              melhoria da qualidade de vida.
            </p>

            <p>
              Quando nossos alunos se queixam de desconfortos musculares e
              articulares muitas vezes gerados pelas longas rotinas de trabalho
              e por problemas relacionados a má postura ou por lesões
              pré-existentes, também oferecemos um{' '}
              <b>espaço planejado de Terapia Manual</b> devidamente assessorada
              por profissionais capacitados nas várias técnicas oferecidas.
            </p>
          </Div>
        </Div>
      </Div>

      <Div
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        style={{ gap: '90px' }}
      >
        <Div display="flex-column" gap="5xl">
          <Div display="flex-column" gap="2xl">
            <Title.H2 size="2xl">Local</Title.H2>

            <Div display="flex" flexWrap="wrap" gap="2xl">
              <Div display="flex" flexWrap="wrap" gap="5xl">
                <Div display="flex-column" gap="2xl">
                  <p>
                    SGAS 906, conjunto A, bloco 6/8
                    <br />
                    Asa Sul, Brasília - DF
                    <br />
                    Entrada pela Faculdade Mackenzie
                  </p>

                  <p>
                    Horário de Funcionamento
                    <br />
                    Segunda a sexta - 6h às 12h e 15h às 21h
                    <br />
                    Sábado - 8h às 12h
                  </p>
                </Div>
              </Div>

              <Div display="flex-column" gap="2xl">
                <Link href={route.STRUCTURE}>Sobre nossa estrutura</Link>
                <Link
                  href="https://maps.app.goo.gl/4BbWWf8nUTJHUyPc8"
                  target="_blank"
                >
                  Abrir no Google Maps
                </Link>
              </Div>
            </Div>
          </Div>

          <Div display="flex-column" gap="2xl">
            <Title.H2 size="2xl">Entre em contato</Title.H2>

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
        </Div>

        {/* TODO: Here comes the team container */}
      </Div>

      <Div
        status="surface-3"
        display="flex-column"
        padding="l"
        gap="5xl"
        borderRadius
      >
        <Div display="flex-column" gap="2xl">
          <Title.H2 size="2xl">
            Treinamento Funcional na Connect Funcional
          </Title.H2>

          <Div
            display="flex"
            justifyContent="space-between"
            flexWrap="wrap"
            gap="2xl"
          >
            <Div display="flex-column" gap="2xl">
              <p>
                De uma maneira simples e direta, Treinamento Funcional é uma
                forma de exercício físico que capacita o corpo para atividades
                que precisam ser realizadas na nossa rotina diária, por exemplo:
                agachar, avançar, abaixar, puxar, empurrar, levantar e girar. O
                Treinamento Funcional adapta ou desenvolve exercícios que
                permitam aos indivíduos executar as atividades cotidianas com
                melhor qualidade e com menor risco de lesão.
              </p>
            </Div>

            <Div display="flex-column" gap="2xl">
              <p>
                Na Connect Funcional entendemos que nosso corpo trabalha como
                uma unidade integrada onde todos os grupos musculares, fáscia,
                ossos e articulações, trabalham juntos para produzir movimento
                em todas as direções. Outro fato que diferencia nosso trabalho é
                a visão de evolução do movimento baseada na aquisição de
                mobilidade e estabilidade, tratando articulação por articulação,
                dependendo da função de cada uma, e assim melhorando o padrão
                motor no complexo sistema que é o corpo humano e seus
                movimentos.
              </p>
            </Div>
          </Div>
        </Div>

        <Div
          display="flex"
          justifyContent="space-between"
          flexWrap="wrap"
          gap="2xl"
        >
          <Div display="flex-column" gap="2xl">
            <Title.H2 size="2xl">
              O que o treinamento funcional oferece?
            </Title.H2>

            <ul>
              <li>Mobilidade</li>
              <li>Estabilidade</li>
              <li>Equilíbrio</li>
              <li>Força</li>
              <li>Potência</li>
              <li>Controle Motor</li>
              <li>Coordenação</li>
            </ul>
          </Div>

          <Div display="flex-column" gap="2xl">
            <Title.H2 size="2xl">
              Serviços oferecidos pela Connect Funcional
            </Title.H2>

            <ul>
              <li>Aulas Personalizadas Individuais</li>
              <li>
                Aulas Personalizadas em Grupos de no máximo 3 clientes por
                professor
              </li>
              <li>Preparatório para provas físicas</li>
              <li>Consultoria Técnica</li>
              <li>Treinamento Profissional</li>
              <li>Cursos para Educadores Físicos e Fisioterapeutas</li>
            </ul>
          </Div>
        </Div>
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
