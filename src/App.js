import React, { useState } from 'react';
import Validator from './components/Validator/Validator';
import Chars from './components/Chars/Chars';
import Input from './components/Input/Input';
import Header from './components/Header/Header';
import './App.scss';

const App = () => {
	const [text, setText] = useState('Hallo! 😃');

	const textChangedHandler = e =>
		setText(e.target.value.toUpperCase());

	return (
		<div className='App'>
			<Header />
			<Input
				text={text}
				textChangedHandler={textChangedHandler}
			/>
			<Validator text={text} />
			<Chars text={text} setText={setText} />
		</div>
	);
};

export default App;
