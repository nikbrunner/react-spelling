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

	// Read texts.json and words.json and populate texts and words state object
	const readTextsFile = async () => {
		const texts = await axios.get('/texts.json');
		const words = await axios.get('/words.json');

		switch (lang) {
			case 'en':
				setTexts(texts.data.en);
				setWords(words.data.en);
				setLoading(false);
				setObjectiveReached(false);
				break;
			case 'de':
				setTexts(texts.data.de);
				setWords(words.data.de);
				setLoading(false);
				setObjectiveReached(false);
				break;
			default:
				setTexts(texts.data.en);
				setWords(words.data.en);
				setLoading(false);
				setObjectiveReached(false);
				break;
		}
	};
};
