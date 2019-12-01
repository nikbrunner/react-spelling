import React from 'react';
import Char from './Char';

const Chars = ({ text, setText, colors }) => {
	const charArrayFromText = Array.from(text);

	const chars = charArrayFromText.map((char, index) => (
		<Char
			char={char}
			key={index}
			color={colors[index]}
			clickedHandler={() => deleteChar(index)}
		/>
	));

	const deleteChar = index => {
		const charArrayCopy = [...charArrayFromText];
		charArrayCopy.splice(index, 1);
		const charArrayCopyStringified = charArrayCopy.join('');
		setText(charArrayCopyStringified);
	};

	return (
		<div
			className={`
			Chars 
			grid-with-gap
			px-5 
			lg:px-0
			my-3 
		`}
		>
			{chars}
		</div>
	);
};

export default Chars;
