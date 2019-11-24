import React from 'react';
import npmColor from 'color';
import './Char.scss';

const Char = ({ char, color, clickedHandler }) => {
	const charStyle = {
		borderColor: color,
		backgroundColor: npmColor(color).rotate(180),
		color: color
	};

	const invisibleCharStyle = {
		visibility: 'hidden'
	};

	return (
		<div
			className={`
				Char 
				flex-grow
				inline-block
				text-2xl
				md:text-5xl
				font-bold
				text-center
				w-2/12
				rounded
				md:rounded-lg
				border-solid
				border-2
				uppercase
				cursor-pointer
				`}
			style={char === ' ' ? invisibleCharStyle : charStyle}
			onClick={clickedHandler}
		>
			{char}
		</div>
	);
};

export default Char;
