import Banner from '@content/ImpressBanner.png';
import Logo from '@content/ImpressLogo.svg';
import { Helmet } from 'react-helmet-async';

export default () => (
	<Helmet>
		{/* Standard Head Meta */}
		<meta charSet='utf-8' />
		<meta name='viewport' content='width=device-width, initial-scale=1' />
		<meta httpEquiv='Content-Type' content='text/html; text/css; charset=UTF-8' />
		<link rel='canonical' href='https://impress.jadevelopment.co.uk' />
		<meta httpEquiv='Expires' content='1y' />
		<meta httpEquiv='Pragma' content='1y' />
		<meta httpEquiv='Cache-Control' content='1y' />
		<title>Impress - Need your slideshow in Roblox?</title>
		<meta
			name='description'
			content='Putting a slideshow into Roblox has never been easy, exporting your entire slideshow as PNGs, uploading and titling each and every slide. However, with Impress, you can say goodbye to having to do that ever again.'
		/>

		{/* Social Media Head Meta */}
		<meta property='og:title' content='Impress - Need your slideshow in Roblox?' />
		<meta
			name='og:description'
			content='Putting a slideshow into Roblox has never been easy, exporting your entire slideshow as PNGs, uploading and titling each and every slide. However, with Impress, you can say goodbye to having to do that ever again.'
		/>
		<meta property='og:type' content='website' />
		<meta property='og:site_name' content='Impress by jaDevelopment and Armodia Systems' />
		<meta property='og:url' content={location.href} />
		<meta property='og:locale' content='en_US' />
		<meta property='og:image' content={Banner} />

		{/* Twitter Head Meta */}
		<meta name='twitter:image' content={Banner} />
		<meta name='twitter:card' content='summary_large_image' />
		<meta name='twitter:site' content='@jadevelopment' />
		<meta name='twitter:title' content='Impress - Need your slideshow in Roblox?' />
		<meta name='twitter:alt' content='Impress by jaDevelopment and Armodia Systems' />

		{/* Apple Devices Head Meta */}
		<meta name='apple-mobile-web-app-capable' content='yes' />
		<meta name='apple-mobile-web-app-status-bar-style' content='black-translucent' />
		<meta
			name='apple-mobile-web-app-title'
			content='Impress Slideshows by jaDevelopment and Armodia Systems'
		/>
		<link rel='mask-icon' href={Logo} color='#1c092d' />
		<link rel='apple-touch-icon' href={Logo} />

		{/* Android Devices Head Meta */}
		<meta name='theme-color' content='#1c092d' />
		<meta name='mobile-web-app-capable' content='yes' />

		{/* Windows Devices Head Meta */}
		<meta name='msapplication-TileColor' content='#1c092d' />
		<meta name='msapplication-TileImage' content={Logo} />
		<meta name='msapplication-tap-highlight' content='no' />
	</Helmet>
);
