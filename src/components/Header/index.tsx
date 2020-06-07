import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillCaretDown } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';

import logoImg from '../../assets/logo.png';

import { Container, UserNav, Navigation, Dropdown, Search } from './styles';

const Header: React.FC = () => {
 return (
  <Container>
   <UserNav>
    <Link to="/login">Acesso</Link>
   </UserNav>
   <Link to="/">
    <img src={logoImg} alt="Aufklärung - Revista de Filosofia" />
   </Link>
   <Navigation>
    <Link to="/">Início</Link>
    <Link to="/current">Atual</Link>
    <Link to="/archives">Arquivos</Link>
    <Link to="/news">Notícias</Link>
    <Dropdown>
     Sobre
     <AiFillCaretDown />
     <ul>
      <li>
       <Link to="/about">Sobre a revista</Link>
      </li>
      <li>
       <Link to="/editorial_team">Equipe Editorial</Link>
      </li>
      <li>
       <Link to="/index_card">Ficha Catalográfica</Link>
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
    </Dropdown>
    <Link to="/info">Informações</Link>
    <Search>
     <FaSearch />
     Buscar
    </Search>
   </Navigation>
  </Container>
 );
};

export default Header;
