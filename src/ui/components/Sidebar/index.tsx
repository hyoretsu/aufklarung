import { memo } from 'react';

import Link from '@components/custom/Link';

import Button from '../Button';
import { Container } from './styles';

const Sidebar: React.FC = () => {
    return (
        <Container>
            <strong>Navegar</strong>
            <Link href="/submissions">
                <Button>Enviar Submissão</Button>
            </Link>
        </Container>
    );
};

export default memo(Sidebar);
