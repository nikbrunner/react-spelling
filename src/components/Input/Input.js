import React from 'react';
import './Input.scss';

const Input = ({ text, textChangedHandler }) => (
	<input
		className={`
			Input 
			bg-white 
			focus:outline-none 
			focus:shadow-outline 
			border 
			border-gray-300 
			rounded-lg 
			py-2 
			px-4 
			my-3 
			block 
			text-center 
			w-full 
			appearance-none 
			leading-normal
		`}
		type='text'
		name='text'
		// todo implement lang for  placeholder
		placeholder='Type something'
		value={text}
		onChange={textChangedHandler}
		autoFocus
	/>
);

export default Input;
