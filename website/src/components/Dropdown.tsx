import '@css/dropdown.css';
import { useState } from 'react';
import { IoChevronDown } from 'react-icons/io5';

interface HeaderLink {
	label: string;
	description: string;
	href: string;
	target?: string;
}

export default ({
	content,
	label,
	style,
	keyid,
}: {
	content: Array<HeaderLink>;
	label: string;
	style?: React.CSSProperties;
	keyid: number;
}) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => {
		setIsOpen((prevState) => !prevState);
	};

	return (
		<div
			key={keyid}
			className='menu'
			style={{
				position: 'relative',
				display: 'inline-block',
				marginRight: '25px',
				...style,
			}}>
			<a
				style={{
					color: '#e6e6e6',
					display: 'flex',
					alignItems: 'center',
				}}
				onClick={toggleDropdown}>
				{label}
				<IoChevronDown
					className={`spin-icon ${isOpen ? 'rotate' : ''}`}
					color='#e6e6e6'
					style={{
						height: '15px',
						width: '15px',
						marginLeft: '6px',
					}}
				/>
			</a>
			<div
				className='dropdown-menu'
				style={{
					display: 'grid',
					gridAutoFlow: 'dense',
					gridTemplateRows: 'auto',
					gridTemplateColumns: 'repeat(3, minmax(auto, 1fr))',
					visibility: isOpen ? 'visible' : 'hidden',
					borderBottomColor: '#404040',
					borderBottomWidth: '1px',
					borderBottomStyle: 'solid',
					gap: '10px',
				}}>
				{content.map((item, index: number) => (
					<div
						key={index}
						className='dropdown-div'
						onClick={() => (window.location.href = item.href)}>
						<b style={{ fontSize: '1rem', fontWeight: '600' }}>{item.label}</b>
						<p>{item.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};
