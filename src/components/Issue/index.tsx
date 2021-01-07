import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaRegFilePdf } from 'react-icons/fa';

import DownloadedCover from '@assets/tmp/cover-19.80b0e3ab.png';
import OriginalCover from '@assets/tmp/cover-19.png';
import RenamedOriginalCover from '@assets/tmp/cover-20.png';
import RenamedDownloadedCover from '@assets/tmp/cover-21.png';
import ReformattedCover from '@assets/tmp/scover-19.jpg';

import { Container, Introduction, Section } from './styles';

const CoverFromSite = 'https://periodicos.ufpb.br/public/journals/83/cover_issue_2445_pt_BR.jpg';
const CoverFromPreviousNonNextCommitSameFileAsOriginalCover =
 'https://aufklarung-dev.herokuapp.com/static/media/cover-19.80b0e3ab.png';

const Issue: React.FC = () => {
 const { pathname } = useRouter();

 return (
  <Container>
   {pathname === '/' && <span>v. 7 n. Especial (2020): Dossiê Sartre</span>}
   <Introduction>
    <Link href="/issues/19">
     <a>
      <Image src={DownloadedCover} alt="Capa da edição" width={455} height={614} />
     </a>
    </Link>
    <Image src={ReformattedCover} alt="Capa da edição" width={455} height={614} />
    <Image src={OriginalCover} alt="Capa da edição" width={455} height={614} />
    <Image src={RenamedOriginalCover} alt="Capa da edição" width={455} height={614} />
    <Image src={RenamedDownloadedCover} alt="Capa da edição" width={455} height={614} />
    <Image src={CoverFromSite} alt="Capa da edição" width={455} height={614} />
    <Image src={CoverFromPreviousNonNextCommitSameFileAsOriginalCover} alt="Capa da edição" width={455} height={614} />
    <span>Dossiê Sartre</span>
    <span>
     <strong>Publicado: </strong>
     <span>2020-02-19</span>
    </span>
   </Introduction>
   <strong>Editorial</strong>
   <Section>
    <p>
     <Link href="/issues/19/articles/1">Apresentação</Link>
    </p>
    <div>
     <p>Claudinei Aparecido de Freitas da Silva</p>
     <span>p.7-10</span>
    </div>

    <button type="button">
     <FaRegFilePdf />
     PDF
    </button>
   </Section>
   <strong>Artigos</strong>
   <Section>
    <p>
     <Link href="/issues/19/articles/2">Revolução estética - a livre invenção de espaços de liberdade</Link>
    </p>
    <div>
     <p>Luciano Donizetti da Silva</p>
     <span>p.11-24</span>
    </div>
    <button type="button">
     <FaRegFilePdf />
     PDF
    </button>
   </Section>
   <Section>
    <p>
     <Link href="/issues/19/articles/3">Filosofia e literatura: em torno de A Náusea</Link>
    </p>
    <div>
     <p>Luiza Helena Hilgert</p>
     <span>p.25-38</span>
    </div>
    <button type="button">
     <FaRegFilePdf />
     PDF
    </button>
   </Section>
   <Section>
    <p>
     <Link href="/issues/19/articles/4">Les Mouches: liberdade situada e reflexividades em Jean-Paul Sartre</Link>
    </p>
    <div>
     <p>Marivania Cristina Bocca, Tiago Soares dos Santos</p>
     <span>p.39-50</span>
    </div>
    <button type="button">
     <FaRegFilePdf />
     PDF
    </button>
   </Section>
   <Section>
    <p>
     <Link href="/issues/19/articles/5">
      A experiência do non-sens em Roquentin: A Náusea sob as lentes da psicanálise
     </Link>
    </p>
    <div>
     <p>Renato Santos</p>
     <span>p.51-64</span>
    </div>
    <button type="button">
     <FaRegFilePdf />
     PDF
    </button>
   </Section>
   <Section>
    <p>
     <Link href="/issues/19/articles/6">O caráter nadificador da consciência imaginante</Link>
    </p>
    <div>
     <p>Lucas Rodrigues da Fonseca Lopes</p>
     <span>p.65-76</span>
    </div>
    <button type="button">
     <FaRegFilePdf />
     PDF
    </button>
   </Section>
   <Section>
    <p>
     <Link href="/issues/19/articles/7">A Fenomenologia de Heidegger e Sartre em suas diferenças</Link>
    </p>
    <div>
     <p>Daniela Ribeiro Schneider</p>
     <span>p.77-92</span>
    </div>
    <button type="button">
     <FaRegFilePdf />
     PDF
    </button>
   </Section>
   <Section>
    <p>
     <Link href="/issues/19/articles/8">
      Literatura e Humanismo: Fenômenos éticos no confronto entre Sartre e Dostoiévski
     </Link>
    </p>
    <div>
     <p>Cristiane Picinini</p>
     <span>p.93-102</span>
    </div>
    <button type="button">
     <FaRegFilePdf />
     PDF
    </button>
   </Section>
   <Section>
    <p>
     <Link href="/issues/19/articles/9">O fenômeno da angústia: interfaces entre Graciliano Ramos e Sartre</Link>
    </p>
    <div>
     <p>Camila Pacheco Gomes</p>
     <span>p.103-114</span>
    </div>
    <button type="button">
     <FaRegFilePdf />
     PDF
    </button>
   </Section>
   <Section>
    <p>
     <Link href="/issues/19/articles/10">
      A estética do movimento: uma leitura sartriana da psicoterapia a partir da arte de Alberto Giacometti
     </Link>
    </p>
    <div>
     <p>Georges Daniel Janja Bloc Boris, Daniel Marcio Pereira Melo</p>
     <span>p.115-126</span>
    </div>
    <button type="button">
     <FaRegFilePdf />
     PDF
    </button>
   </Section>
   <Section>
    <p>
     <Link href="/issues/19/articles/11">
      El existencialismo de Sartre, origenes y contextos: una lectura a partir de Hannah Arendt
     </Link>
    </p>
    <div>
     <p>Gerardo Miguel Nieves-Loja</p>
     <span>p.127-136</span>
    </div>
    <button type="button">
     <FaRegFilePdf />
     PDF
    </button>
   </Section>
   <Section>
    <p>
     <Link href="/issues/19/articles/12">Aportes clínicos sartrianos III: método progressivo-regressivo</Link>
    </p>
    <div>
     <p>Claudinei Aparecido de Freitas da Silva</p>
     <span>p.137-150</span>
    </div>
    <button type="button">
     <FaRegFilePdf />
     PDF
    </button>
   </Section>
   <Section>
    <p>
     <Link href="/issues/19/articles/13">O tempo em Heidegger e Thomas Mann</Link>
    </p>
    <div>
     <p>Libanio Cardoso</p>
     <span>p.153-168</span>
    </div>
    <button type="button">
     <FaRegFilePdf />
     PDF
    </button>
   </Section>
  </Container>
 );
};

export default Issue;
