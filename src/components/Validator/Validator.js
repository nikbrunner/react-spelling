import React from 'react';
import './Validator.scss';

const Validator = ({ text }) => {
	const validationThreshold = 25;

	return (
		<div className='Validator'>
			{text.length < validationThreshold ? (
				<p style={{ color: 'red', fontSize: '2rem' }}>
					Message too short! You need at least{' '}
					{validationThreshold} characters!
				</p>
			) : (
				<p style={{ color: 'green', fontSize: '2rem' }}>
					Message long enough! You have {text.length} characters!
				</p>
			)}
		</div>
	);
};

export default Validator;
