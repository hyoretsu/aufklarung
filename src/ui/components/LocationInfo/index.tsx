import Link from '@link';
import { useRouter } from 'next/router';

import { Container } from './styles';

const LocationInfo: React.FC = ({ children }) => {
 const { pathname } = useRouter();

 return (
  <Container>
   <Link href="/">Início</Link>
   <span> / </span>
   {pathname.match(/\/issues.+/) && (
    <span>
     <Link href="/issues">Arquivos / </Link>
    </span>
   )}
   <span>{children}</span>
  </Container>
 );
};

export default LocationInfo;
