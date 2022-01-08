import Link from '@link';
import { memo } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';

import { Container, UserNav, Navigation, Dropdown, Search } from './styles';

const Header: React.FC = () => {
 return (
  <Container>
   <UserNav>
    <Link href="/login">Acesso</Link>
   </UserNav>
   <Link href="/">
    <img src="/images/logo.png" alt="Aufklärung - Revista de Filosofia" width={500} height={163} />
   </Link>
   <Navigation>
    <Link href="/">Início</Link>
    <Link href="/issues/current">Atual</Link>
    <Link href="/issues">Arquivos</Link>
    <Link href="/news">Notícias</Link>
    <Dropdown>
     <span>Sobre</span>
     <AiFillCaretDown />
     <ul>
      <Link href="/about">
       <li>Sobre a revista</li>
      </Link>
      <Link href="/editorial_team">
       <li>Equipe Editorial</li>
      </Link>
      <Link href="/index_card">
       <li>Ficha Catalográfica</li>
      </Link>
      <Link href="/contact">
       <li>Contato</li>
      </Link>
      <Link href="/submissions">
       <li>Submissões</li>
      </Link>
      <Link href="/privacy">
       <li>Declaração de Privacidade</li>
      </Link>
     </ul>
    </Dropdown>
    <Link href="/info">Informações</Link>
    <Search>
     <FaSearch />
     Buscar
    </Search>
   </Navigation>
  </Container>
 );
};

export default memo(Header);
