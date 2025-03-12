import { Gradient } from '@components/Gradient';
import RouteTags from '@components/Meta/RouteTags';
import Modal from '@components/Modal';
import { useEffect, useLayoutEffect, useState } from 'react';
import { FaDiscord } from 'react-icons/fa';
import { SiRoblox } from 'react-icons/si';
import { useCookie } from 'react-use';

const Links: Array<{ label: string; href: string }> = [
	{
		href: 'https://jadevelopment.co.uk/pages/terms-of-service',
		label: 'Terms',
	},
	{
		href: 'https://en.help.roblox.com/hc/en-us/articles/203313410',
		label: 'Upload Guidelines',
	},
];

export default (PageConfig: { Location: string; Description?: string }) => {
	const [showModal, setShowModal] = useState<boolean>(false);
	const [cookies, setCookie] = useCookie('.Impress-CookiesAgreed');

	useEffect(() => {
		if (!cookies || cookies === null || cookies === '' || cookies === 'false' || !(cookies === 'true'))
			setShowModal(true);
	}, []);

	useLayoutEffect(() => {
		const gradient = new Gradient();
		//@ts-ignore
		gradient.initGradient('#gradient-canvas');
	}, []);

	return (
		<div>
			<RouteTags Location={PageConfig.Location} Description={PageConfig.Description} />
			<canvas id='gradient-canvas' data-transition-in='true' width={1920} height={600} />
			<Modal
				isOpen={showModal}
				onClose={() => setShowModal(false)}
				dismissible
				style={{
					backgroundColor: '#171717',
					borderRadius: '.6rem',
					width: '600px',
					height: 'auto',
					boxShadow: 'var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)',
					padding: '40px 80px',
				}}>
				<h1
					style={{
						fontSize: '35px',
						textAlign: 'left',
						marginTop: '0',
						marginBottom: '20px',
					}}>
					Some Cookies, perhaps?
				</h1>
				<p style={{ fontFamily: 'SegoeUI', marginBottom: '35px' }}>
					Impress needs to use cookies in your browser, but we can't do this without
					permission. You can read our full cookie policy{' '}
					<a
						href='https://jadevelopment.co.uk/pages/cookie-policy'
						style={{ color: 'currentcolor', textDecoration: 'underline' }}>
						here
					</a>{' '}
					to fully understand what we do with cookies in your browser. Alternatively, you
					can read our quick overview of how Impress specifically utilises cookies in your
					browser. <br /> <br /> Impress utilises cookies to provide you with an
					easy-to-use experience of saving your login per-session. This allows you to come
					back at any time to Impress without having to log in every time you need to
					access your dashboard.
				</p>
				<div style={{ display: 'flex', gap: '10px' }}>
					<button
						style={{ flex: '1' }}
						onClick={() =>
							(window.location.href =
								'https://jadevelopment.co.uk/pages/cookie-policy')
						}>
						Learn More
					</button>
					<button
						style={{ flex: '1' }}
						onClick={() => {
							setShowModal(false);
							setCookie('true', {
								secure: true,
								domain:
									process.env.NODE_ENV === 'development' ||
									process.env.NODE_ENV === 'test'
										? 'localhost'
										: 'impress.jadevelopment.co.uk',
								sameSite: 'strict',
							});
						}}>
						OK
					</button>
				</div>
			</Modal>
			<div style={{ height: '100vh' }}>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						textAlign: 'left',
						height: 'auto',
						minHeight: '100vh',
					}}>
					<div
						style={{
							backgroundColor: '#171717',
							borderRadius: '.6rem',
							width: '500px',
							height: 'auto',
							color: '#e3e3e3',
							padding: '30px 30px',
						}}>
						<h1
							style={{
								fontSize: '30px',
								textAlign: 'left',
								marginTop: '25px',
								marginBottom: '5px',
							}}>
							Welcome aboard!
						</h1>
						<p style={{ fontSize: '16px', opacity: '0.6', marginTop: '0' }}>
							Sign up to Impress.
						</p>
						<br />
						<button
							style={{
								width: '100%',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}
							onClick={() =>
								(location.href = `https://discord.com/oauth2/authorize?client_id=1124056390449758388&response_type=code&redirect_uri=${location.origin}%2Fsignin&scope=identify+guilds+openid+applications.commands.permissions.update`)
							}>
							<FaDiscord
								style={{
									width: '30px',
									height: '30px',
									marginRight: '10px',
									verticalAlign: 'middle',
								}}
							/>
							Sign up with Discord
						</button>
						<button
							style={{
								marginTop: '10px',
								marginBottom: '30px',
								width: '100%',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}
							onClick={() =>
								(location.href = `https://discord.com/oauth2/authorize?client_id=1124056390449758388&response_type=code&redirect_uri=${location.origin}%2Fsignin&scope=identify+guilds+openid+applications.commands.permissions.update`)
							}>
							<SiRoblox
								style={{
									width: '30px',
									height: '30px',
									marginRight: '10px',
									verticalAlign: 'middle',
								}}
							/>
							Sign up with Roblox
						</button>
						<p style={{ margin: '0', marginBottom: '7px' }}>
							Already have an account?{' '}
							<a
								href='/signin'
								style={{
									color: '#e3e3e3',
									textDecoration: 'underline',
								}}>
								Sign in!
							</a>
						</p>
					</div>
					<div
						style={{
							marginTop: '20px',
							display: 'flex',
							color: '#e3e3e3',
							width: '500px',
						}}>
						<div
							style={{
								justifyContent: 'flex-start',
								textAlign: 'left',
								flex: '2',
								alignItems: 'left',
								fontSize: '14px',
							}}>
							<a href='' style={{ color: '#e3e3e3' }}>
								© jaDevelopment and Armodia. {new Date().getFullYear()}
							</a>
						</div>
						<div
							style={{
								justifyContent: 'flex-end',
								textAlign: 'right',
								flex: '1.5',
								alignItems: 'right',
								display: 'flex',
								fontSize: '14px',
								gap: '25px',
							}}>
							{Links.map((Link) => (
								<a
									href={Link.href}
									style={{
										color: '#e3e3e3',
									}}>
									{Link.label}
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
