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
				<p className='text-gray-500 text-xl'>
					{texts.validator.error}
				</p>
			) : (
				<p className='text-green-500 text-xl'>
					{texts.validator.success}
				</p>
			)}
		</div>
	);
};

export default Validator;
