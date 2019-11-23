import React from 'react';
import color from 'color';
import './Char.scss';

const Char = ({ char, clickedHandler }) => {
	const randomColorHSL = (
		saturationMin,
		saturationMax,
		lightnessMin,
		lightnessMax
	) => {
		const hue = Math.floor(Math.random() * 360 + 1);
		const saturation =
			Math.floor(
				Math.random() * (saturationMax - saturationMin + 1)
			) + saturationMin;
		const lightness =
			Math.floor(
				Math.random() * (lightnessMax - lightnessMin + 1)
			) + lightnessMin;
		return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
	};

	const randomColor = randomColorHSL(75, 95, 50, 65);

	const charStyle = {
		border: ` .25rem solid ${randomColor}`,
		backgroundColor: color(randomColor).rotate(180),
		color: randomColor
	};

	const invisibleCharStyle = {
		opacity: 0
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
