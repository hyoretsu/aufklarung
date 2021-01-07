import Image from 'next/image';
import Link from 'next/link';
import { AiFillCaretDown } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';

import logoImg from '@assets/logo.png';

import { Container, UserNav, Navigation, Dropdown, Search } from './styles';

const Header: React.FC = () => {
 return (
  <Container>
   <UserNav>
    <Link href="/login">Acesso</Link>
   </UserNav>
   <Link href="/">
    <a>
     <Image src={logoImg} alt="Aufklärung - Revista de Filosofia" width={500} height={145} />
    </a>
   </Link>
   <Navigation>
    <Link href="/">Início</Link>
    <Link href="/current">Atual</Link>
    <Link href="/issues">Arquivos</Link>
    <Link href="/news">Notícias</Link>
    <Dropdown>
     Sobre
     <AiFillCaretDown />
     <ul>
      <li>
       <Link href="/about">Sobre a revista</Link>
      </li>
      <li>
       <Link href="/editorial_team">Equipe Editorial</Link>
      </li>
      <li>
       <Link href="/ficha">Ficha Catalográfica</Link>
      </li>
      <li>
       <Link href="/contact">Contato</Link>
      </li>
      <li>
       <Link href="/submissions">Submissões</Link>
      </li>
      <li>
       <Link href="/privacy">Declaração de Privacidade</Link>
      </li>
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

export default Header;
