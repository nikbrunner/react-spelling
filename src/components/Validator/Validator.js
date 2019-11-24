import React from 'react';
import './Validator.scss';

const Validator = ({ text }) => {
	const validationThreshold = 25;

	return (
		<div className='Validator'>
			{text.length < validationThreshold ? (
				<p style={{ color: 'red', fontSize: '2rem' }}>
					Zu wenige Buchstaben! Du brauchst mindestens{' '}
					{validationThreshold} Buchstaben!
				</p>
			) : (
				<p style={{ color: 'green', fontSize: '2rem' }}>
					Sehr gut! Du hast {text.length} Buchstaben!
				</p>
			)}
		</div>
	);
};

export default Validator;
