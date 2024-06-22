import Image from 'next/image';

import { Div, Title } from '@/components';

import styles from './page.module.scss';

export default async function Page() {
  return (
    <div className={styles.container}>
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
              De uma maneira simples e direta, Treinamento Funcional é uma forma
              de exercício físico que capacita o corpo para atividades que
              precisam ser realizadas na nossa rotina diária, por exemplo:
              agachar, avançar, abaixar, puxar, empurrar, levantar e girar. O
              Treinamento Funcional adapta ou desenvolve exercícios que permitam
              aos indivíduos executar as atividades cotidianas com melhor
              qualidade e com menor risco de lesão.
            </p>

            <p>
              Na Connect Funcional entendemos que nosso corpo trabalha como uma
              unidade integrada onde todos os grupos musculares, fáscia, ossos e
              articulações, trabalham juntos para produzir movimento em todas as
              direções. Outro fato que diferencia nosso trabalho é a visão de
              evolução do movimento baseada na aquisição de mobilidade e
              estabilidade, tratando articulação por articulação, dependendo da
              função de cada uma, e assim melhorando o padrão motor no complexo
              sistema que é o corpo humano e seus movimentos.
            </p>
          </Div>

          <Div display="flex-column" gap="2xl">
            <div className={styles['small-image-container']}>
              <Image
                src="/photo-003-330px-330px.png"
                alt="Foto de treinamento na Connect Funcional"
                width={330}
                height={330}
                className={styles.image}
              />
            </div>
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
    </div>
  );
}
