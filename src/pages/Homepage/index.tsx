import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt } from 'react-icons/fa';

import Header from '../../components/Header';
import Article from '../../components/Article';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';

import { Content, News } from './styles';

const Homepage: React.FC = () => {
 return (
  <>
   <Header />
   <Content>
    <Article>
     <News>
      <section>
       <Link to="/welcome">
        <strong>Bem-vindo!</strong>
       </Link>
       <div>
        <FaCalendarAlt />
        2019-10-28
       </div>
       <span>
        A <i>Revista Aufklärung</i> adota o processo de revisão cega pelos pares (double blind peer review) e tem como
        base revisores especializados a partir da base de Currículos da Plataforma Lattes, preferencialmente membros
        ligados à pós-graduação na área.
       </span>
       <Link to="/welcome">Saiba mais...</Link>
      </section>
      <section>
       <Link to="/welcome">
        <strong>Journal Aufklärung is now supported by CAPES/CNPq</strong>
       </Link>
       <div>
        <FaCalendarAlt />
        2018-11-05
       </div>
       <span>
        Journal Aufklärung got APPROVAL in the Public Edict "Chamada CNPq/CAPES No 26/2017 – Programa Editorial"
        [441153/2017-8].
       </span>
       <Link to="/welcome">Saiba mais...</Link>
      </section>
     </News>
    </Article>
    <Sidebar />
   </Content>
   <Footer />
  </>
 );
};

export default Homepage;
