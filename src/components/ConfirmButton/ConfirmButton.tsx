import React from 'react';
import styles from './ConfirmButton.module.scss';

type Prop = {
	children: React.ReactNode;
	handleClick: () => void;
};

function ConfirmButton({ children, handleClick }: Prop) {
	return (
		<button onClick={handleClick} className={styles.confirmButton}>
			{children}
		</button>
	);
}

export default ConfirmButton;
