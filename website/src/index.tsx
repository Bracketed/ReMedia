import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

import Footer from './components/Footer.tsx';
import Header from './components/Headers/Full.tsx';
import Tags from './components/Meta/HeadTags.tsx';
import { AppRoutes } from './Router.tsx';

import './css/application.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<HelmetProvider>
			<Tags />
			<Header />
			<AppRoutes />
			<Footer />
		</HelmetProvider>
	</React.StrictMode>
);
