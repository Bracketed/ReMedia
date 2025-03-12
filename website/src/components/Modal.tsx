import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { useKey } from 'react-use';
import '../css/modal.css';

interface options {
	isOpen: boolean;
	onClose: any;
	children: any;
	dismissible?: boolean;
	style?: React.CSSProperties;
}

const Modal = ({ isOpen, onClose, children, style, dismissible = false }: options) => {
	if (dismissible) useKey('Escape', onClose);

	const modalVariants = {
		hidden: { opacity: 0, y: '-50%', transition: { ease: 'easeOut' } },
		visible: { opacity: 1, y: '0%', transition: { ease: 'easeOut' } },
	};

	const overlayVariants = {
		hidden: { backdropFilter: 'blur(0px)', transition: { ease: 'easeOut' } },
		visible: { backdropFilter: 'blur(20px)', transition: { ease: 'easeOut' } },
	};

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					className='modal-overlay'
					initial='hidden'
					animate='visible'
					exit='hidden'
					variants={overlayVariants}
					onClick={dismissible ? undefined : onClose}>
					<motion.div
						className='modal-content'
						style={{
							...style,
							zIndex: '2',
							color: '#e6e6e6',
							paddingLeft: '35px',
							paddingRight: '35px',
						}}
						onClick={(event) => event.stopPropagation()}
						variants={modalVariants}>
						{dismissible ? undefined : (
							<span className='close-button' onClick={onClose}>
								&times;
							</span>
						)}
						{children}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Modal;
