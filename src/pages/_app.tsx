import { AppProps } from 'next/app';
import Head from 'next/head';

import DefaultTemplate from 'components/DefaultTemplate';

import '../assets/fonts';
import '../styles/global.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
 return (
  <>
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
