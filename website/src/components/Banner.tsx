import { useEffect, useRef, useState } from 'react';

enum AnnouncementLevel {
	NOTICE = '28, 9, 45',
	URGENT_NOTICE = '237, 66, 69',
	WARNING = '254, 231, 92',
}

function getIcon(type: AnnouncementLevel) {
	switch (type) {
		case AnnouncementLevel.NOTICE: {
			return (
				<svg width={25} height={15} aria-hidden='true' viewBox='0 0 950 950'>
					<path
						d='M805.89,218.11c-38.16-38.16-82.61-68.13-132.1-89.06C622.53,107.37,568.1,96.38,512,96.38s-110.53,10.99-161.79,32.67  c-49.49,20.93-93.94,50.9-132.1,89.06c-38.16,38.16-68.13,82.61-89.06,132.1C107.37,401.47,96.38,455.9,96.38,512  s10.99,110.53,32.67,161.79c20.93,49.49,50.9,93.94,89.06,132.1c38.16,38.16,82.61,68.13,132.1,89.06  c51.26,21.68,105.69,32.67,161.79,32.67s110.53-10.99,161.79-32.67c49.49-20.93,93.94-50.9,132.1-89.06  c38.16-38.16,68.13-82.61,89.06-132.1c21.68-51.26,32.67-105.69,32.67-161.79s-10.99-110.53-32.67-161.79  C874.02,300.72,844.05,256.27,805.89,218.11z M577.03,750.44H446.97v-50H487V506.78h-31v-50h81v243.66h40.03V750.44z M512,283.56  c29.94,0,54.29,24.36,54.29,54.29c0,29.94-24.35,54.29-54.29,54.29s-54.29-24.35-54.29-54.29  C457.71,307.92,482.06,283.56,512,283.56z'
						fill='#000000'
					/>
				</svg>
			);
		}
		case AnnouncementLevel.URGENT_NOTICE: {
			return (
				<svg width={25} height={15} aria-hidden='true' viewBox='0 0 950 950'>
					<path
						d='M805.1,217.9c-38.07-38.06-82.39-67.94-131.75-88.82C622.24,107.46,567.95,96.5,512,96.5s-110.24,10.96-161.35,32.58  c-49.36,20.88-93.68,50.76-131.75,88.82c-38.06,38.07-67.94,82.39-88.82,131.75C108.46,400.76,97.5,455.05,97.5,511  s10.96,110.24,32.58,161.35c20.88,49.36,50.76,93.68,88.82,131.75c38.07,38.06,82.39,67.94,131.75,88.82  c51.11,21.62,105.4,32.58,161.35,32.58s110.24-10.96,161.35-32.58c49.36-20.88,93.68-50.76,131.75-88.82  c38.06-38.07,67.94-82.39,88.82-131.75c21.62-51.11,32.58-105.4,32.58-161.35s-10.96-110.24-32.58-161.35  C873.04,300.29,843.16,255.97,805.1,217.9z M512,727.5c-24.81,0-45-20.19-45-45s20.19-45,45-45s45,20.19,45,45  S536.81,727.5,512,727.5z M557,356.49c0,14.77-0.75,29.71-2.23,44.41l-15.79,157.2c-1.4,13.91-13,24.4-26.98,24.4  s-25.58-10.49-26.98-24.4l-15.79-157.2c-1.48-14.7-2.23-29.64-2.23-44.41V315.2c0-11.41,9.29-20.7,20.7-20.7h48.6  c11.41,0,20.7,9.29,20.7,20.7V356.49z'
						fill='#000000'
					/>
				</svg>
			);
		}
		case AnnouncementLevel.WARNING: {
			return (
				<svg width={25} height={15} aria-hidden='true' viewBox='0 0 950 950'>
					<path
						d='M805.1,217.9c-38.07-38.06-82.39-67.94-131.75-88.82C622.24,107.46,567.95,96.5,512,96.5s-110.24,10.96-161.35,32.58  c-49.36,20.88-93.68,50.76-131.75,88.82c-38.06,38.07-67.94,82.39-88.82,131.75C108.46,400.76,97.5,455.05,97.5,511  s10.96,110.24,32.58,161.35c20.88,49.36,50.76,93.68,88.82,131.75c38.07,38.06,82.39,67.94,131.75,88.82  c51.11,21.62,105.4,32.58,161.35,32.58s110.24-10.96,161.35-32.58c49.36-20.88,93.68-50.76,131.75-88.82  c38.06-38.07,67.94-82.39,88.82-131.75c21.62-51.11,32.58-105.4,32.58-161.35s-10.96-110.24-32.58-161.35  C873.04,300.29,843.16,255.97,805.1,217.9z M512,727.5c-24.81,0-45-20.19-45-45s20.19-45,45-45s45,20.19,45,45  S536.81,727.5,512,727.5z M557,356.49c0,14.77-0.75,29.71-2.23,44.41l-15.79,157.2c-1.4,13.91-13,24.4-26.98,24.4  s-25.58-10.49-26.98-24.4l-15.79-157.2c-1.48-14.7-2.23-29.64-2.23-44.41V315.2c0-11.41,9.29-20.7,20.7-20.7h48.6  c11.41,0,20.7,9.29,20.7,20.7V356.49z'
						fill='#000000'
					/>
				</svg>
			);
		}
	}
}

function AnnouncementBanner({ msg, level }: { msg: string | undefined; level: AnnouncementLevel | undefined }) {
	if (!msg || !level) return undefined;

	const [isDismissed, setIsDismissed] = useState(false);
	const sectionRef = useRef<HTMLDivElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (sectionRef.current) {
				const rect = sectionRef.current.getBoundingClientRect();
				const windowHeight = window.innerHeight || document.documentElement.clientHeight;

				if (rect.top <= windowHeight - 100) setIsVisible(true);
			}
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll();

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const handleDismiss = () => setIsDismissed(true);
	if (isDismissed) return null;

	return (
		<div
			ref={sectionRef}
			className={`fade-slide-up ${isVisible ? 'visible' : ''}`}
			style={{
				display: 'flex',
				position: 'fixed',
				width: '100%',
				justifyContent: 'space-between',
				alignItems: 'center',
				height: '30px',
				paddingTop: '10px',
				paddingBottom: '10px',
				fontSize: '18px',
				marginTop: '91px',
				backdropFilter: 'blur(5px)',
				backgroundColor: `rgba(${level},.8)`,
				color: 'black',
			}}>
			<div style={{ flex: 1, display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
				{getIcon(level)}
				<b style={{ marginRight: '5px' }}>Latest Announcements:</b>
				{msg}
			</div>
			<a onClick={handleDismiss} style={{ cursor: 'pointer', marginRight: '10px' }}>
				<svg width={30} height={12} aria-hidden='true' viewBox='0 0 100 100'>
					<path
						fill='#000000'
						d='M63,50l29.2-29.2c3.7-3.7,3.7-9.5,0.1-13.1  c-3.6-3.6-9.5-3.5-13.1,0.1L50,37L20.8,7.8c-3.7-3.7-9.5-3.7-13.1-0.1c-3.6,3.6-3.5,9.5,0.1,13.1L37,50L7.8,79.2  c-3.7,3.7-3.7,9.5-0.1,13.1c3.6,3.6,9.5,3.5,13.1-0.1L50,63l29.2,29.2c3.7,3.7,9.5,3.7,13.1,0.1c3.6-3.6,3.5-9.5-0.1-13.1L63,50z'
					/>
				</svg>
			</a>
		</div>
	);
}

export { AnnouncementBanner, AnnouncementLevel };
