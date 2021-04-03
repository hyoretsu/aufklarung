import { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyle from 'styles/global';

import '../assets/fonts';

import DefaultTemplate from 'components/DefaultTemplate';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
 return (
  <>
   <GlobalStyle />
   <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <title>Aufklärung - Revista de Filosofia</title>
   </Head>
   <DefaultTemplate>
    <Component {...pageProps} />
   </DefaultTemplate>
  </>
 );
};

export default MyApp;
