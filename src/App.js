// Libraries
import React, { useState, useEffect } from 'react';
import { Howl } from 'howler';

// Own lib files
import { randomColorHSL, paintApp } from './lib/colorFactory';
import { useTextsReader } from './lib/customHooks';
import { pickObjective } from './lib/gameFunctions';

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
	const [input, setText] = useState('');
	const [words, setWords] = useState([]);
	const [colors, setColors] = useState([]);
	const [lang, setLang] = useState('en');
	const [texts, setTexts] = useState({});
	const [objective, setObjective] = useState('');
	const [objectiveReached, setObjectiveReached] = useState(
		false
	);
	const [score, setScore] = useState(0);

	// Declare sounds
	const typingSound = new Howl({
		src: ['/sounds/click.mp3'],
		volume: 1.5,
		onplayerror: function() {
			typingSound.once('unlock', function() {
				typingSound.play();
			});
		}
	});
	const objectiveReachedSound = new Howl({
		src: ['/sounds/kaching.mp3'],
		volume: 0.35,
		onplayerror: function() {
			objectiveReachedSound.once('unlock', function() {
				objectiveReachedSound.play();
			});
		}
	});

	// Paint app on load
	useEffect(() => {
		paintApp();
	}, []);

	// Use custom hook to read text data
	useTextsReader(
		loading,
		setLoading,
		setTexts,
		words,
		setWords,
		lang,
		setObjective,
		setObjectiveReached
	);

	// When the value of the input changes, update state for text and colors
	const inputChangedHandler = e => {
		//Play a typingSound on every type
		typingSound.play();
		// For every event, add a new color to the colors array
		setColors([...colors, randomColorHSL(75, 95, 50, 65)]);
		// Update text state from input (Two Way Binding) ..
		// And compare text string with objective string..
		// Set objective reached when both are similar
		const currentInput = e.target.value.toUpperCase();
		setText(currentInput);
		if (currentInput !== objective) {
			setObjectiveReached(false);
			// todo else if currentInput.length === objective.length play sad sound
		} else {
			setObjectiveReached(true);
			objectiveReachedSound.play();
			setScore(score + 1);
			pickObjective(loading, words, setObjective);
			setText('');
		}
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
				score={score}
				lang={lang}
				switchLangHandler={switchLangHandler}
			/>
			<Objective loading={loading} objective={objective} />
			<Input
				input={input}
				texts={texts}
				inputChangedHandler={inputChangedHandler}
			/>
			<Message
				loading={loading}
				texts={texts}
				objectiveReached={objectiveReached}
			/>
			<Chars input={input} setText={setText} colors={colors} />
		</div>
	);
};

export default App;
