// Libraries
import React, { useState, useEffect } from 'react';
// import { Howl } from 'howler';

// Own lib files
import { randomColorHSL, paintApp } from './lib/colorFactory';
import { useTextProcessor } from './lib/customHooks';
import { pickObjective } from './lib/gameFunctions';
// import { textChangedHandler } from './lib/handlerFunctions';

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
	const [score, setScore] = useState(0);
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		let timer = setInterval(() => {
			let newSeconds = seconds + 1;
			console.log(newSeconds);
			setSeconds(newSeconds);
		}, 1000);
		// eslint-disable-next-line;
	}, []);

	// Declare a typing sound
	// 	const typingSound = new Howl({
	// 		src: ['./sounds/click.mp3']
	// 	});

	// init function to set some kind of gameIsRunning state and choose a new word

	paintApp();

	useTextProcessor(
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
		//Play a typingSound on every type
		// typingSound.play();
		// For every event, add a new color to the colors array
		setColors([...colors, randomColorHSL(75, 95, 50, 65)]);
		// Update text state from input (Two Way Binding) ..
		// And compare text string with objective string..
		// Set objective reached when both are similar
		const text = e.target.value.toUpperCase();
		setText(text);
		if (text !== objective) {
			setObjectiveReached(false);
		} else {
			setObjectiveReached(true);
			setScore(score + 1);
			pickObjective(loading, texts, setObjective);
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
				seconds={seconds}
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
