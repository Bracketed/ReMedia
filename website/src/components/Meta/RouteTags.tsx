import { Helmet } from 'react-helmet-async';

interface PageConfig {
	Location: string;
	Description?: string;
}

export default (RouteConfig: PageConfig) => {
	let RouteDesc =
		'Putting a slideshow into Roblox has never been easy, exporting your entire slideshow as PNGs, uploading and titling each and every slide. However, with Impress, you can say goodbye to having to do that ever again.';
	if (RouteConfig.Description) RouteDesc = RouteConfig.Description;

	return (
		<Helmet>
			<title>{`${RouteConfig.Location} - Impress`}</title>
			<meta charSet='utf-8' />
			<meta itemProp='description' content={RouteDesc} />
			<meta itemProp='og:description' content={RouteDesc} />
			<meta property='og:title' content={`${RouteConfig.Location} - Impress`} />
			<meta name='apple-mobile-web-app-title' content={`${RouteConfig.Location} - Impress`} />
			<meta name='twitter:title' content={`${RouteConfig.Location} - Impress`} />
		</Helmet>
	);
};
