import { useEffect } from 'react';
import { pickObjective } from './gameFunctions';
import axios from 'axios';

export const useTextsReader = (
	loading,
	setLoading,
	setTexts,
	words,
	setWords,
	lang,
	setObjective,
	setObjectiveReached
) => {
	// Initial read of texts file
	useEffect(() => {
		readTextsFile();
		// eslint-disable-next-line
	}, []);

	// Read texts.json file and populate texts state object
	const readTextsFile = async () => {
		const texts = await axios.get('/texts.json');
		const wordCount = 500;
		const wordsDE = await axios.get('/words.json');
		const wordsEN = await axios.get(
			`https://random-word-api.herokuapp.com/word?key=D5MXW018&number=${wordCount}`
		);

		switch (lang) {
			case 'en':
				setTexts(texts.data.en);
				setWords(wordsEN.data);
				setLoading(false);
				setObjectiveReached(false);
				break;
			case 'de':
				setTexts(texts.data.de);
				setWords(wordsDE.data);
				setLoading(false);
				setObjectiveReached(false);
				break;
			default:
				setTexts(texts.data.en);
				setWords(wordsEN.data);
				setLoading(false);
				setObjectiveReached(false);
				break;
		}
	};

	// Pick a 'word' from the words array in the texts file and set a objective
	useEffect(() => {
		pickObjective(loading, words, setObjective);
		// eslint-disable-next-line
	}, [words]);

	// Read texts file every time lang is changed
	useEffect(() => {
		readTextsFile();
		// eslint-disable-next-line
	}, [lang]);
};
