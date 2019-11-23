import React from 'react';
import Char from './Char';
import './Chars.scss';

const Chars = ({ text, setText }) => {
	const charArrayFromText = Array.from(text);

	const chars = charArrayFromText.map((char, index) => (
		<Char
			char={char}
			key={index}
			clickedHandler={() => deleteChar(index)}
		/>
	));

	const deleteChar = index => {
		const charArrayCopy = [...charArrayFromText];
		charArrayCopy.splice(index, 1);
		const arrayStringified = charArrayCopy.join('');
		setText(arrayStringified);
	};

	return <div className='Chars'>{chars}</div>;
};

export default Chars;
