import React from 'react';
import { CarbonNeutralIcon } from '../../assets/icons';
import styles from './CarbonNeutral.module.scss';

function CarbonNeutral() {
	return (
		<div className={styles.carbonNeutral}>
			<CarbonNeutralIcon />
			<p>
				This is a <span>carbon-neutral</span> delivery
			</p>
		</div>
	);
}

export default CarbonNeutral;
