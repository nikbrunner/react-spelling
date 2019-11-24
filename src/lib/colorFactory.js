import npmColor from 'color';

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

const baseColor = randomColorHSL(25, 50, 85, 95);

const appColors = {
	bgColor: baseColor,
	fontColor: npmColor(baseColor)
		.rotate(180)
		.darken(0.5)
		.saturate(1)
};

const paintApp = () => {
	document.querySelector('html').style.backgroundColor =
		appColors.bgColor;
	document.querySelector('html').style.color =
		appColors.fontColor;
};

export { randomColorHSL, paintApp };
