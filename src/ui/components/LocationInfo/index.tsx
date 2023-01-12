import { useRouter } from 'next/router';
import { ReactNode } from 'react';

import Link from '@components/custom/Link';

import { Container } from './styles';

interface Props {
    children: ReactNode;
}

const LocationInfo: React.FC<Props> = ({ children }) => {
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
