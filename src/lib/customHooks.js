import { useEffect } from 'react';
import axios from 'axios';

const useTextsProcessing = (
	loading,
	setLoading,
	texts,
	setTexts,
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
		const res = await axios.get('./texts.json');
		switch (lang) {
			case 'de':
				setTexts(res.data.de);
				setLoading(false);
				setObjectiveReached(false);
				break;
			case 'en':
				setTexts(res.data.en);
				setLoading(false);
				setObjectiveReached(false);
				break;
			default:
				setTexts(res.data.de);
				setLoading(false);
				setObjectiveReached(false);
				break;
		}
	};

	// Pick a 'word' from the words array in the texts file and set a objective
	useEffect(() => {
		if (!loading) {
			const words = texts.words;
			setObjective(
				words[
					Math.floor(Math.random() * words.length)
				].toUpperCase()
			);
		}
		// eslint-disable-next-line
	}, [texts]);

	// Read texts file every time lang is changed
	useEffect(() => {
		readTextsFile();
		// eslint-disable-next-line
	}, [lang]);
};

export { useTextsProcessing };
