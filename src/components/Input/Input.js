import React from 'react';

const Input = ({
	loading,
	text,
	setText,
	colors,
	setColors,
	texts,
	objective,
	setObjective,
	setObjectiveReached,
	textChangedHandler
}) => (
	<input
		className={`
			Input 
			bg-white 
			focus:outline-none 
			focus:shadow-outline 
			border 
			border-gray-300 
			md:rounded-lg 
			py-2 
			px-4 
			my-3 
			block 
			text-center 
			text-gray-900
			text-2xl
			w-full 
			appearance-none 
			leading-normal
			shadow
		`}
		type='text'
		name='text'
		placeholder={texts.inputPlaceholder}
		value={text}
		onChange={textChangedHandler}
		autoFocus
	/>
);

export default Input;
