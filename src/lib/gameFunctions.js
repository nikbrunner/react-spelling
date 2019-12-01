const pickObjective = (loading, words, setObjective) => {
	if (!loading) {
		setObjective(
			words[
				Math.floor(Math.random() * words.length)
			].toUpperCase()
		);
	}
};

export { pickObjective };
