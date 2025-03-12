import Links from '@configuration/FooterNavLinks.json';
import Image from '@content/UK.svg?react';
import Link from './Links/Link';

interface FooterLink {
	label: string;
	href: string;
	target?: string;
}

const NavigationLinks: Array<FooterLink> = Links;

const Logo = Image as React.FunctionComponent<
	React.SVGProps<SVGSVGElement> & {
		title?: string;
		titleId?: string;
		desc?: string;
		descId?: string;
	}
>;

export default () => {
	return (
		<footer
			style={{
				height: 'auto',
				paddingTop: '48px',
				paddingBottom: '28px',
				textDecoration: 'none',
				textAlign: 'left',
				marginTop: 'auto',
				borderTopColor: '#404040',
				borderTopWidth: '1px',
				borderTopStyle: 'solid',
			}}>
			<div style={{ display: 'flex' }}>
				<div
					style={{
						flex: '1',
						justifyContent: 'flex-start',
						display: 'flex',
						gap: '25px',
						fontSize: '14px',
						textAlign: 'center',
					}}>
					{NavigationLinks.map((FooterProps, id) => (
						<Link href={FooterProps.href} key={id}>
							{FooterProps.label}
						</Link>
					))}
				</div>
				<div
					style={{
						flex: '1',
						justifyContent: 'flex-end',
						display: 'flex',
						gap: '25px',
						fontSize: '14px',
						textAlign: 'center',
					}}>
					<a href='https://jadevelopment.co.uk'>
						© jaDevelopment and Armodia Systems {new Date().getFullYear()}
					</a>
				</div>
			</div>
			<p
				style={{
					margin: '0',
					padding: '0',
					fontSize: '14px',
					textAlign: 'center',
					paddingTop: '28px',
				}}>
				Designed by ninjaninja140 in London, England
				<Logo
					fill='#e6e6e6'
					height='15px'
					style={{
						marginLeft: '10px',
						verticalAlign: 'middle',
					}}
				/>
			</p>
		</footer>
	);
};
