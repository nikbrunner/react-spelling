import React from 'react';
import colorCon from 'color';
import './Char.scss';

const Char = ({ char, color, clickedHandler }) => {
	const charStyle = {
		border: ` .25rem solid ${color}`,
		backgroundColor: colorCon(color).rotate(180),
		color: color
	};

	const invisibleCharStyle = {
		visibility: 'hidden'
	};

	return (
		<div
			className='Char'
			style={char === ' ' ? invisibleCharStyle : charStyle}
			onClick={clickedHandler}
		>
			{char}
		</div>
	);
};

export default Char;
