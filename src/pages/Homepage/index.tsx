import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaChevronRight } from 'react-icons/fa';

import DefaultTemplate from '../../components/DefaultTemplate';
import Issue from '../../components/Issue';

import { HomepageNews } from './styles';

const Homepage: React.FC = () => {
 return (
  <DefaultTemplate>
   <HomepageNews>
    <section>
     <h3>
      <Link to="/welcome">Bem-vindo!</Link>
     </h3>
     <div>
      <FaCalendarAlt />
      <span>2019-10-28</span>
     </div>
     <p>
      A <i>Revista Aufklärung</i> adota o processo de revisão cega pelos pares (double blind peer review) e tem como
      base revisores especializados a partir da base de Currículos da Plataforma Lattes, preferencialmente membros
      ligados à pós-graduação na área.
     </p>
     <Link to="/welcome">
      <span>Saiba mais</span>
      <FaChevronRight />
     </Link>
    </section>
    <section>
     <h3>
      <Link to="/news/24">Journal Aufklärung is now supported by CAPES/CNPq</Link>
     </h3>
     <div>
      <FaCalendarAlt />
      <span>2018-11-05</span>
     </div>
     <p>
      Journal Aufklärung got APPROVAL in the Public Edict "Chamada CNPq/CAPES No 26/2017 – Programa Editorial"
      [441153/2017-8].
     </p>
     <Link to="/news/24">
      <span>Saiba mais</span>
      <FaChevronRight />
     </Link>
    </section>
   </HomepageNews>
   <h3>Edição Atual</h3>
   <Issue />
  </DefaultTemplate>
 );
};

export default Homepage;
