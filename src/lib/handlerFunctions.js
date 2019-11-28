import { pickObjective } from './gameFunctions';
import { randomColorHSL } from './colorFactory';

// When the value of the input changes, update state for text and colors
const textChangedHandler = (
	e,
	loading,
	colors,
	texts,
	objective,
	setObjective,
	setObjectiveReached,
	setText,
	setColors
) => {
	//Play a typingSound on every type
	// typingSound.play();
	// For every event, add a new color to the colors array
	setColors([...colors, randomColorHSL(75, 95, 50, 65)]);
	// Update text state from input (Two Way Binding) ..
	// And compare text string with objective string..
	// Set objective reached when both are similiar
	const text = e.target.value.toUpperCase();
	setText(text);
	if (text !== objective) {
		setObjectiveReached(false);
	} else {
		setObjectiveReached(true);
		pickObjective(loading, texts, setObjective);
		setText('');
	}
};

// const switchLangHandler = (language, setLang) => {
// 	setLang(language);
// };

export { textChangedHandler };
