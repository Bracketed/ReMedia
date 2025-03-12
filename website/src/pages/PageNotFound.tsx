import { Gradient } from '@components/Gradient';
import RouteTags from '@components/Meta/RouteTags';
import { useLayoutEffect } from 'react';

export default () => {
	useLayoutEffect(() => {
		const gradient = new Gradient();
		//@ts-ignore
		gradient.initGradient('#gradient-canvas');
	}, []);

	return (
		<div>
			<RouteTags
				Location={'404 Not Found'}
				Description={
					'The specified page could not be found on this website, maybe you typed it incorrectly?'
				}
			/>
			<canvas id='gradient-canvas' data-transition-in='true' width='100%' height='100%' />

			<div
				style={{
					height: '100vh',
					justifyContent: 'center',
					justifyItems: 'center',
					alignItems: 'center',
					alignContent: 'center',
					textAlign: 'center',
					paddingLeft: '15%',
					paddingRight: '15%',
					display: 'flex',
					gap: '100px',
				}}>
				<div style={{ flex: '1', textAlign: 'left' }}>
					<h1
						style={{
							fontFamily: 'Gotham',
							fontWeight: '800',
							fontSize: '300px',
							padding: '0',
							margin: '0',
						}}>
						404
					</h1>
				</div>
				<div style={{ flex: '1', textAlign: 'left' }}>
					<h1
						style={{
							fontFamily: 'Gotham',
							fontWeight: '800',
							padding: '0',
							margin: '0',
						}}>
						That's an Error.
					</h1>
					<p style={{ fontSize: '18px', fontWeight: '600' }}>
						<br />
						Sounds like an error which means we couldn't exactly find the page
						you're looking for, maybe it exists, maybe it doesn't, if it does you
						should probably <a href='/contact'>contact us here</a>, or press the
						button below to return to our homepage.
						<br />
						<br />
						<div style={{ display: 'flex', gap: '20px' }}>
							<button
								style={{ width: '100%', flex: '1' }}
								className='inverted-button'
								onClick={() => (window.location.href = '/')}>
								Go Home
							</button>
						</div>
					</p>
				</div>
			</div>
		</div>
	);
};
