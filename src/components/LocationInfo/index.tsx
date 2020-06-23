import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Container } from './styles';

const LocationInfo: React.FC = ({ children }) => {
 const { pathname } = useLocation();

 return (
  <Container>
   <span>
    <Link to="/">Início</Link>
   </span>
   {' / '}
   {pathname.includes('issues') && (
    <span>
     <Link to="/issues">Arquivos</Link>
    </span>
   )}
   {pathname.includes('news') && (
    <span>
     <Link to="/news">Notícias</Link>
    </span>
   )}
   {pathname.includes('about') && (
    <span>
     <Link to="/about">Sobre a Revista</Link>
    </span>
   )}
   {pathname.includes('editorial_team') && (
    <span>
     <Link to="/editorial_team">Equipe Editorial</Link>
    </span>
   )}
   {pathname.includes('ficha') && (
    <span>
     <Link to="/ficha">Ficha Catalográfica</Link>
    </span>
   )}
   {pathname.includes('contact') && (
    <span>
     <Link to="/contact">Contato</Link>
    </span>
   )}
   {pathname.includes('submissions') && (
    <span>
     <Link to="/submissions">Submissões</Link>
    </span>
   )}
   {pathname.includes('privacy') && (
    <span>
     <Link to="/privacy">Declarações de Privacidade</Link>
    </span>
   )}
   {pathname.includes('login') && (
    <span>
     <Link to="/login">Acesso</Link>
    </span>
   )}
   {children && ' / '}
   {children && <span>{children}</span>}
  </Container>
 );
};

export default LocationInfo;
