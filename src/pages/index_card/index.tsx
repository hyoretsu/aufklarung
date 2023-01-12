import { NextSeo } from 'next-seo';

import LocationInfo from '@components/LocationInfo';
import Link from '@components/custom/Link';

import IndexCardSvg from '@assets/indexCard.svg';

import { Styling } from '@styles/index_card';

const description = 'Ficha contendo os dados bibliográficos da Revista Aufklärung.';
const title = 'Ficha Catalográfica';

const IndexCard: React.FC = () => {
    return (
        <>
            <NextSeo description={description} openGraph={{ description, title }} title={title} />
            <LocationInfo>{title}</LocationInfo>
            <Styling>
                <IndexCardSvg />
                <Link href="/images/indexCard.png">Deseja baixar uma cópia?</Link>
            </Styling>
        </>
    );
};

export default IndexCard;
