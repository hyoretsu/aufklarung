import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegFilePdf } from 'react-icons/fa';

import Cover from '../../assets/tmp/cover.jpg';

import { Container, Introduction, Section } from './styles';

const Article: React.FC = () => {
 return (
  <Container>
   <Introduction>
    <strong>v. 7 n. Especial (2020): Dossiê Sartre</strong>
    <img src={Cover} alt="Capa da edição" />
    <p>Dossiê Sartre</p>
    <span>Publicado:2020-02-19</span>
   </Introduction>
   <strong>Editorial</strong>
   <Section>
    <Link to="/issue/25/articles/1">Apresentação</Link>
    <p>Claudinei Aparecido de Freitas da Silva</p>
    <span>p.7-10</span>
    <button type="button">
     <FaRegFilePdf />
     PDF
    </button>
   </Section>
   <strong>Artigos</strong>
   <Section>
    <Link to="/issue/25/articles/2">Revolução estética - a livre invenção de espaços de liberdade</Link>
    <p>Luciano Donizetti da Silva</p>
    <span>p.11-24</span>
    <button type="button">
     <FaRegFilePdf />
     PDF
    </button>
   </Section>
   <Section>
    <Link to="/issue/25/articles/3">Filosofia e literatura: em torno de A Náusea</Link>
    <p>Luiza Helena Hilgert</p>
    <span>p.25-38</span>
    <button type="button">
     <FaRegFilePdf />
     PDF
    </button>
   </Section>
   <Section>
    <Link to="/issue/25/articles/4">Les Mouches: liberdade situada e reflexividades em Jean-Paul Sartre</Link>
    <p>Marivania Cristina Bocca, Tiago Soares dos Santos</p>
    <span>p.39-50</span>
    <button type="button">
     <FaRegFilePdf />
     PDF
    </button>
   </Section>
   <Section>
    <Link to="/issue/25/articles/5">A experiência do non-sens em Roquentin: A Náusea sob as lentes da psicanálise</Link>
    <p>Renato Santos</p>
    <span>p.51-64</span>
    <button type="button">
     <FaRegFilePdf />
     PDF
    </button>
   </Section>
   <Section>
    <Link to="/issue/25/articles/6">O caráter nadificador da consciência imaginante</Link>
    <p>Lucas Rodrigues da Fonseca Lopes</p>
    <span>p.65-76</span>
    <button type="button">
     <FaRegFilePdf />
     PDF
    </button>
   </Section>
   <Section>
    <Link to="/issue/25/articles/7">A Fenomenologia de Heidegger e Sartre em suas diferenças</Link>
    <p>Daniela Ribeiro Schneider</p>
    <span>p.77-92</span>
    <button type="button">
     <FaRegFilePdf />
     PDF
    </button>
   </Section>
   <Section>
    <Link to="/issue/25/articles/8">
     Literatura e Humanismo: Fenômenos éticos no confronto entre Sartre e Dostoiévski
    </Link>
    <p>Cristiane Picinini</p>
    <span>p.93-102</span>
    <button type="button">
     <FaRegFilePdf />
     PDF
    </button>
   </Section>
   <Section>
    <Link to="/issue/25/articles/9">O fenômeno da angústia: interfaces entre Graciliano Ramos e Sartre</Link>
    <p>Camila Pacheco Gomes</p>
    <span>p.103-114</span>
    <button type="button">
     <FaRegFilePdf />
     PDF
    </button>
   </Section>
   <Section>
    <Link to="/issue/25/articles/10">
     A estética do movimento: uma leitura sartriana da psicoterapia a partir da arte de Alberto Giacometti
    </Link>
    <p>Georges Daniel Janja Bloc Boris, Daniel Marcio Pereira Melo</p>
    <span>p.115-126</span>
    <button type="button">
     <FaRegFilePdf />
     PDF
    </button>
   </Section>
   <Section>
    <Link to="/issue/25/articles/11">
     El existencialismo de Sartre, origenes y contextos: una lectura a partir de Hannah Arendt
    </Link>
    <p>Gerardo Miguel Nieves-Loja</p>
    <span>p.127-136</span>
    <button type="button">
     <FaRegFilePdf />
     PDF
    </button>
   </Section>
   <Section>
    <Link to="/issue/25/articles/12">Aportes clínicos sartrianos III: método progressivo-regressivo</Link>
    <p>Claudinei Aparecido de Freitas da Silva</p>
    <span>p.137-150</span>
    <button type="button">
     <FaRegFilePdf />
     PDF
    </button>
   </Section>
   <Section>
    <Link to="/issue/25/articles/13">O tempo em Heidegger e Thomas Mann</Link>
    <p>Libanio Cardoso</p>
    <span>p.153-168</span>
    <button type="button">
     <FaRegFilePdf />
     PDF
    </button>
   </Section>
  </Container>
 );
};

export default Article;
