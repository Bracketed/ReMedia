import { AnnouncementBanner, AnnouncementLevel } from '@components/Banner';
import Dropdown from '@components/Dropdown';
import Link from '@components/Links/Link';
import Links from '@configuration/HeaderNavLinks.json';
import jaDevelopmentLogo from '@content/jaDevelopmentLogoSVG.svg?react';
import { CSSProperties, Fragment } from 'react';

interface HeaderLink {
	label: string;
	description: string;
	href: string;
	target?: string;
}

interface HeaderProps {
	title: string;
	content?: Array<HeaderLink>;
	href?: string;
	target?: string;
}

const NavigationLinks: Array<HeaderProps> = Links;

const Logo = jaDevelopmentLogo as React.FunctionComponent<
	React.SVGProps<SVGSVGElement> & {
		title?: string;
		titleId?: string;
		desc?: string;
		descId?: string;
	}
>;

export default () => {
	const sectionStyle: CSSProperties = {
		flex: '1',
		display: 'flex',
		justifyContent: 'left',
	};

	return (
		<Fragment>
			<header
				style={{
					zIndex: '30',
					width: '100%',
					position: 'fixed',
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					height: '53px',
					color: '#e6e6e6',
					backgroundColor: '#171717',
					borderBottomColor: '#404040',
					borderBottomWidth: '1px',
					borderBottomStyle: 'solid',
				}}>
				<div
					style={{
						...sectionStyle,
						alignItems: 'center',
						textAlign: 'left',
						justifyContent: 'flex-start',
						paddingLeft: '100px',
					}}>
					<a href='/'>
						<Logo height='30px' fill='#e6e6e6' />
					</a>
					<div
						style={{
							height: '1.5em',
							borderInlineStart: '2px solid #d2d2d2',
							marginInlineStart: '.5rem',
							display: 'inline-block',
							backgroundColor: 'white',
							marginLeft: '27px',
						}}></div>
					<a
						href='/'
						style={{
							marginLeft: '27px',
							fontWeight: '600',
							fontSize: '1.25em',
							color: '#e6e6e6',
						}}>
						Impress
					</a>
					<div
						style={{
							marginLeft: '27px',
							display: 'flex',
							textAlign: 'left',
							whiteSpace: 'nowrap',
							alignItems: 'center',
						}}>
						{NavigationLinks.map((LinkProperties: HeaderProps, index: number) => {
							if (LinkProperties.href)
								return (
									<Link
										href={LinkProperties.href}
										key={index}
										style={{
											textAlign: 'center',
											marginRight: '27px',
											display: 'inline-block',
											color: '#e6e6e6',
										}}>
										{LinkProperties.title}
									</Link>
								);

							if (LinkProperties.content && !LinkProperties.href)
								return (
									<Dropdown
										keyid={index}
										content={LinkProperties.content}
										label={LinkProperties.title}
									/>
								);
						})}
					</div>
				</div>
				<div
					style={{
						...sectionStyle,
						textAlign: 'right',
						justifyContent: 'flex-end',
						paddingRight: '100px',
						gap: '20px',
					}}>
					<a href='/signin'>Invite</a>
					<a href='/signin'>Sign in</a>
				</div>
			</header>
			<AnnouncementBanner msg={undefined} level={AnnouncementLevel.NOTICE} />
		</Fragment>
	);
};
