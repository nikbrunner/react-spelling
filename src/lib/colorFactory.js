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

const paintApp = () => {
	document.querySelector('html').style.backgroundColor =
		'#fbc531';
};

export { randomColorHSL, paintApp };
