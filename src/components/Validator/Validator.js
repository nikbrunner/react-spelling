import React from 'react';
import Spinner from '../Spinner/Spinner';

import './Validator.scss';

const Validator = ({ text, texts, loading }) => {
	const validationThreshold = 25;

	return loading ? (
		<Spinner />
	) : (
		<div className='Validator'>
			{text.length < validationThreshold ? (
				<p style={{ color: 'red', fontSize: '2rem' }}>
					{texts.validator.error}
				</p>
			) : (
				<p style={{ color: 'green', fontSize: '2rem' }}>
					{texts.validator.success}
				</p>
			)}
		</div>
	);
};

export default Validator;
