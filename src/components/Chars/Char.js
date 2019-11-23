import React from 'react';
import './Char.scss';

const Char = ({ char, clickedHandler }) => {
	const randomColorHSL = (
		saturationMin,
		saturationMax,
		lightnessMin,
		lightnessMax,
	) => {
		const hue = Math.floor(Math.random() * 360 + 1);
		const saturation =
			Math.floor(
				Math.random() * (saturationMax - saturationMin + 1),
			) + saturationMin;
		const lightness =
			Math.floor(
				Math.random() * (lightnessMax - lightnessMin + 1),
			) + lightnessMin;
		return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
	};

	const colors = {
		background: randomColorHSL(75, 95, 50, 65),
		color: randomColorHSL(75, 95, 50, 65),
		border: `5px solid ${randomColorHSL(75, 95, 50, 65)}`,
	};

	return (
		<div
			className='Char'
			style={colors}
			onClick={clickedHandler}
		>
			{char}
		</div>
	);
};

export default Char;
