import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ title, description, children }) => {
	return (
		<>
			<Head>
				<title>{title ? `${title} - Marka İsmi` : 'Marka İsmi'}</title>
				{description && <meta name='description' content={description}></meta>}
			</Head>
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
