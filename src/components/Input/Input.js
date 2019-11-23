import React from 'react';
import './Input.scss';

const Input = ({ text, textChangedHandler }) => (
	<input
		className='Input'
		type='text'
		name='text'
		// placeholder={text}
		value={text}
		onChange={textChangedHandler}
		autoFocus
	/>
);

export default Input;
