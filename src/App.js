// Libraries
import React, { useState, useEffect } from 'react';
import { randomColorHSL, paintApp } from './lib/colorFactory';
import axios from 'axios';

// Components
import Validator from './components/Validator/Validator';
import Chars from './components/Chars/Chars';
import Input from './components/Input/Input';
import Header from './components/Header/Header';

// CSS
import './style/App.scss';

const App = () => {
	// Initial input text state
	const [loading, setLoading] = useState(true);
	const [text, setText] = useState('');
	const [colors, setColors] = useState([]);
	const [lang, setLang] = useState('de');
	const [texts, setTexts] = useState({});

	// Read texts file every time lang is changed
	useEffect(() => {
		paintApp();
		readTextsFile();
		// eslint-disable-next-line
	}, [lang]);

	const readTextsFile = async () => {
		const res = await axios.get('./texts.json');
		switch (lang) {
			case 'de':
				setTexts(res.data.de);
				setLoading(false);
				break;
			case 'en':
				setTexts(res.data.en);
				setLoading(false);
				break;
			default:
				setTexts(res.data.de);
				setLoading(false);
				break;
		}
	};

	// When the value of the input changes, update state for text and colors
	const textChangedHandler = e => {
		setText(e.target.value.toUpperCase());
		setColors([...colors, randomColorHSL(75, 95, 50, 65)]);
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
			<Input
				text={text}
				textChangedHandler={textChangedHandler}
			/>
			<Validator loading={loading} text={text} texts={texts} />
			<Chars text={text} setText={setText} colors={colors} />
		</div>
	);
};

export default App;
