import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronDown, FiSearch } from 'react-icons/fi';

import logoImg from '../../assets/logo.png';

import { Container } from './styles';

const Header: React.FC = () => {
 return (
  <Container>
   <div>
    <Link to="/login">Acesso</Link>
   </div>
   <Link to="/">
    <img src={logoImg} alt="Aufklärung - Revista de Filosofia" />
   </Link>
   <nav>
    <Link to="/">Início</Link>
    <Link to="/current">Atual</Link>
    <Link to="/archives">Arquivos</Link>
    <Link to="/news">Notícias</Link>
    <label>
     Sobre
     <FiChevronDown />
     <ul>
      <li>
       <Link to="/about">Sobre a revista</Link>
      </li>
      <li>
       <Link to="/editorial_team">Equipe Editorial</Link>
      </li>
      <li>
       <Link to="/ficha">Ficha Catalográfica</Link>
      </li>
      <li>
       <Link to="/contact">Contato</Link>
      </li>
      <li>
       <Link to="/submissions">Submissões</Link>
      </li>
      <li>
       <Link to="/privacy">Declaração de Privacidade</Link>
      </li>
     </ul>
    </label>
    <Link to="/info">Informações</Link>
   </nav>
   <button>
    <FiSearch />
    Buscar
   </button>
   <img src={logoImg} alt="Aufklärung - Revista de Filosofia" />
   <img src={logoImg} alt="Aufklärung - Revista de Filosofia" />
   <img src={logoImg} alt="Aufklärung - Revista de Filosofia" />
   <img src={logoImg} alt="Aufklärung - Revista de Filosofia" />
   <img src={logoImg} alt="Aufklärung - Revista de Filosofia" />
   <img src={logoImg} alt="Aufklärung - Revista de Filosofia" />
   <img src={logoImg} alt="Aufklärung - Revista de Filosofia" />
   <img src={logoImg} alt="Aufklärung - Revista de Filosofia" />
  </Container>
 );
};

export default Header;
