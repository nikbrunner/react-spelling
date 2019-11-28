const pickObjective = (loading, texts, setObjective) => {
	if (!loading) {
		const words = texts.words;
		setObjective(
			words[
				Math.floor(Math.random() * words.length)
			].toUpperCase()
		);
	}
};

export { pickObjective };
