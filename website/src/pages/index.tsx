import { Gradient } from '@components/Gradient';
import RouteTags from '@components/Meta/RouteTags';
import ImpressBoard from '@content/ImpressBoard.png';
import { Fragment, useLayoutEffect } from 'react';

export default (PageConfig: { Location: string; Description?: string }) => {
	useLayoutEffect(() => {
		const gradient = new Gradient();
		//@ts-ignore
		gradient.initGradient('#gradient-canvas');
	}, []);

	return (
		<Fragment>
			<RouteTags Location={PageConfig.Location} Description={PageConfig.Description} />
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
					<h1>
						Need your slideshow in{' '}
						<span style={{ fontFamily: 'Gotham', fontWeight: '800' }}>ROBLOX</span>?
					</h1>
					<p style={{ fontSize: '18px', fontWeight: '600' }}>
						<br />
						Putting a slideshow into Roblox has never been easy, exporting your
						entire slideshow as PNGs, uploading and titling each and every slide.
						However, with Impress, you can say goodbye to having to do that ever
						again.
						<br />
						<br />
						<div style={{ display: 'flex', gap: '20px' }}>
							<button
								style={{ width: '100%', flex: '1' }}
								className='inverted-button'>
								Sign up
							</button>

							<button
								style={{ width: '100%', flex: '1' }}
								className='inverted-button'>
								Sign in
							</button>
						</div>
					</p>
				</div>
				<div style={{ flex: '1' }}>
					<img
						src={ImpressBoard}
						alt='An Impress board example.'
						style={{ width: '100%' }}
					/>
				</div>
			</div>
		</Fragment>
	);
};
