// Libraries
import React, { useState } from 'react';
import { randomColorHSL, paintApp } from './lib/colorFactory';
import { useTextsProcessing } from './lib/customHooks';

// Components
import Header from './components/Header/Header';
import Objective from './components/Objective/Objective';
import Input from './components/Input/Input';
import Message from './components/Message/Message';
import Chars from './components/Chars/Chars';

// CSS
import './style/App.scss';

const App = () => {
	// Initial input text state
	const [loading, setLoading] = useState(true);
	const [text, setText] = useState('');
	const [colors, setColors] = useState([]);
	const [lang, setLang] = useState('de');
	const [texts, setTexts] = useState({});
	const [objective, setObjective] = useState('');
	const [objectiveReached, setObjectiveReached] = useState(
		false
	);

	paintApp();

	useTextsProcessing(
		loading,
		setLoading,
		texts,
		setTexts,
		lang,
		setObjective,
		setObjectiveReached
	);

	// When the value of the input changes, update state for text and colors
	const textChangedHandler = e => {
		// For every event, add a new color to the colors array
		setColors([...colors, randomColorHSL(75, 95, 50, 65)]);
		// Update text state from input (Two Way Binding) ..
		// And compare text string with objective string..
		// Set objective reached when both are similiar
		const text = e.target.value.toUpperCase();
		setText(text);
		text !== objective
			? setObjectiveReached(false)
			: setObjectiveReached(true);
	};

	// Function to switch languages
	const switchLangHandler = language => {
		setLang(language);
	};

	return (
		<div className='App container mx-auto'>
			<Header
				loading={loading}
				texts={texts}
				lang={lang}
				switchLangHandler={switchLangHandler}
			/>
			<Objective loading={loading} objective={objective} />
			<Input
				text={text}
				texts={texts}
				textChangedHandler={textChangedHandler}
			/>
			<Message
				loading={loading}
				texts={texts}
				objectiveReached={objectiveReached}
			/>
			<Chars text={text} setText={setText} colors={colors} />
		</div>
	);
};

export default App;
