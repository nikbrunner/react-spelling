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
			flex 
			flex-row 
			flex-wrap 
			flex-gap 
			justify-center 
			px-5 
			md:px-0
		`}
		>
			{chars}
		</div>
	);
};

export default Chars;
