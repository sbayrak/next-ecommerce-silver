import '../scss/main.scss';
import Script from 'next/script';
import Layout from '../components/Layout';
import { Provider } from 'next-auth/client';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Provider>
        <Script src='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js'></Script>
        <Component {...pageProps} />{' '}
      </Provider>
    </Layout>
  );
}

export default MyApp;
