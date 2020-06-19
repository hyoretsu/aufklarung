import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaChevronRight } from 'react-icons/fa';

import DefaultTemplate from '../../components/DefaultTemplate';
import Issue from '../../components/Issue';

import { HomepageNews } from './styles';

const Homepage: React.FC = () => {
 useEffect(() => {
  window.scrollTo(0, 0);
 }, []);

 return (
  <DefaultTemplate>
   <HomepageNews>
    <section>
     <Link to="/welcome">
      <h3>Bem-vindo!</h3>
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
      <h3>Journal Aufklärung is now supported by CAPES/CNPq</h3>
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
   <h3>Edição Atual</h3>
   <Issue />
  </DefaultTemplate>
 );
};

export default Homepage;
