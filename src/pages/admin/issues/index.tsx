import { NextSeo } from 'next-seo';

import { Styling } from '@styles/admin/issues';

const Issues: React.FC = () => {
    return (
        <>
            <NextSeo title="Edições" />
            <Styling />
        </>
    );
};

export default Issues;
