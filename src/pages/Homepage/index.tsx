import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaChevronRight } from 'react-icons/fa';

import DefaultTemplate from '../../components/DefaultTemplate';
import Article from '../../components/Article';

import { HomepageNews } from './styles';

const Homepage: React.FC = () => {
 return (
  <DefaultTemplate>
   <HomepageNews>
    <section>
     <Link to="/welcome">
      <strong>Bem-vindo!</strong>
     </Link>
     <div>
      <FaCalendarAlt />
      2019-10-28
     </div>
     <p>
      A <i>Revista Aufklärung</i> adota o processo de revisão cega pelos pares (double blind peer review) e tem como
      base revisores especializados a partir da base de Currículos da Plataforma Lattes, preferencialmente membros
      ligados à pós-graduação na área.
     </p>
     <Link to="/welcome">
      Saiba mais...
      <FaChevronRight />
     </Link>
    </section>
    <section>
     <Link to="/">
      <strong>Journal Aufklärung is now supported by CAPES/CNPq</strong>
     </Link>
     <div>
      <FaCalendarAlt />
      2018-11-05
     </div>
     <p>
      Journal Aufklärung got APPROVAL in the Public Edict "Chamada CNPq/CAPES No 26/2017 – Programa Editorial"
      [441153/2017-8].
     </p>
     <Link to="/">
      Saiba mais...
      <FaChevronRight />
     </Link>
    </section>
   </HomepageNews>
   <Article />
  </DefaultTemplate>
 );
};

export default Homepage;
