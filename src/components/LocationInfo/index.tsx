import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const LocationInfo: React.FC = ({ children }) => {
 const url = window.location.pathname;

 return (
  <Container>
   <Link to="/">Início</Link>
   {' / '}
   {url.includes('issues') && (
    <span>
     <Link to="/issues">Arquivos</Link>
    </span>
   )}
   {url.includes('news') && (
    <span>
     <Link to="/news">Notícias</Link>
    </span>
   )}
   {url.includes('about') && (
    <span>
     <Link to="/about">Sobre a Revista</Link>
    </span>
   )}
   {url.includes('editorial_team') && (
    <span>
     <Link to="/editorial_team">Equipe Editorial</Link>
    </span>
   )}
   {url.includes('ficha') && (
    <span>
     <Link to="/ficha">Ficha Catalográfica</Link>
    </span>
   )}
   {url.includes('contact') && (
    <span>
     <Link to="/contact">Contato</Link>
    </span>
   )}
   {url.includes('submissions') && (
    <span>
     <Link to="/submissions">Submissões</Link>
    </span>
   )}
   {url.includes('privacy') && (
    <span>
     <Link to="/privacy">Declarações de Privacidade</Link>
    </span>
   )}
   {children && ' / '}
   {children && <span>{children}</span>}
  </Container>
 );
};

export default LocationInfo;
