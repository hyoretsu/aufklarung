import { useRouter } from 'next/router';
import { ReactNode } from 'react';

import { Section } from './styles';

interface Props {
    children: ReactNode;
}

const News: React.FC<Props> = ({ children }) => {
    const { pathname } = useRouter();

    return <Section pathname={pathname}>{children}</Section>;
};

export default News;
