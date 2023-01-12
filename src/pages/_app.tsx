import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import { IoPersonCircle } from 'react-icons/io5';

import Footer from '@components/Footer';
import Header from '@components/Header';
import Sidebar from '@components/Sidebar';
import Link from '@components/custom/Link';

import { Styling, Content, Body, AdminTopBar, AdminNav } from '@styles/_app';

import { siteName as site_name } from './_document';
import '@public/global.css';
import '@public/fonts.css';

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
    const url = 'http://aufklarung.vercel.app';
    const { pathname } = useRouter();

    return pathname.includes('/admin') ? (
        <>
            <DefaultSeo
                defaultTitle={site_name}
                titleTemplate="%s | Aufklärung"
                dangerouslySetAllPagesToNoIndex
                dangerouslySetAllPagesToNoFollow
            />
            <AdminTopBar>
                <AdminNav>
                    <Link href="/admin/submissions">Submissões</Link>
                    <Link href="/admin/issues">Edições</Link>
                    <Link href="/admin/news">Anúncios</Link>
                    <Link href="/admin/users">Usuários</Link>
                    <Link href="/admin/stats">Estatísticas</Link>
                </AdminNav>
                <button type="button">
                    <IoPersonCircle size="7%" color="#004b6e" />
                </button>
            </AdminTopBar>
            <Component {...pageProps} />
        </>
    ) : (
        <>
            <DefaultSeo
                additionalMetaTags={[{ property: 'og:locale:alternate', content: 'pt_BR' }]}
                defaultTitle={site_name}
                facebook={{ appId: String(process.env.NEXT_PUBLIC_FACEBOOK_APP_ID) }}
                languageAlternates={[{ hrefLang: 'pt-BR', href: `${url}/pt` }]}
                openGraph={{
                    images: [
                        {
                            url: `${url}/images/opengraph.png`,
                            width: 1200,
                            height: 627,
                            alt: site_name,
                        },
                    ],
                    // locale: 'en_US',
                    site_name,
                    type: 'website',
                    url: url + pathname,
                }}
                titleTemplate="%s | Aufklärung"
                twitter={{
                    cardType: 'summary_large_image',
                    handle: `${process.env.NEXT_PUBLIC_SITE_CONTENT_CREATOR}` || '@hyoretsu',
                    site: `${process.env.NEXT_PUBLIC_SITE_OWNER}` || '@hyoretsu',
                }}
            />
            <Styling>
                <Header />
                <Content>
                    <Body>
                        <Component {...pageProps} />
                    </Body>
                    <Sidebar />
                </Content>
                <Footer />
            </Styling>
        </>
    );
};

export default MyApp;
