import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
 static async getInitialProps(ctx: DocumentContext): Promise<any> {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {
   ctx.renderPage = () =>
    originalRenderPage({
     enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
    });

   const initialProps = await Document.getInitialProps(ctx);
   return {
    ...initialProps,
    styles: (
     <>
      {initialProps.styles}
      {sheet.getStyleElement()}
     </>
    ),
   };
  } finally {
   sheet.seal();
  }
 }

 render(): JSX.Element {
  return (
   <Html>
    <Head>
     <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
     <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
     <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
     <link rel="icon" type="image/png" sizes="192x192" href="favicon/android-chrome-192x192.png" />
     <link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#5bbad5" />
     <link rel="manifest" href="site.webmanifest" />
     <meta name="apple-mobile-web-app-title" content="Aufklärung" />
     <meta name="application-name" content="Aufklärung" />
     <meta name="msapplication-config" content="browserconfig.xml" />
     <meta name="msapplication-TileColor" content="#238b89" />
     <meta name="msapplication-TileImage" content="favicon/mstile-144x144.png" />
     <meta name="theme-color" content="#fff" />
    </Head>
    <body>
     <Main />
     <NextScript />
    </body>
   </Html>
  );
 }
}

export default MyDocument;
