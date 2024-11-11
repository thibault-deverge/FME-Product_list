import React from 'react';
import styles from './ConfirmButton.module.scss';

type Prop = {
	children: React.ReactNode;
};

function ConfirmButton({ children }: Prop) {
	return <button className={styles.confirmButton}>{children}</button>;
}

export default ConfirmButton;
