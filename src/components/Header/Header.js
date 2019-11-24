import React from 'react';
import Spinner from '../Spinner/Spinner';
import './Header.scss';

const Header = ({ texts, loading, switchLangHandler, lang }) => {
	return loading ? (
		<Spinner />
	) : (
		<header className='flex justify-between my-5'>
			<h1 className='Header text-5xl'>{texts.title}</h1>
			<div className='inline-flex'>
				<button
					className={`${
						lang === 'de' ? 'bg-blue-300' : 'bg-gray-300'
					} hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l`}
					onClick={() => switchLangHandler('de')}
				>
					DE
				</button>
				<button
					className={`${
						lang === 'en' ? 'bg-blue-300' : 'bg-gray-300'
					} hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r`}
					onClick={() => switchLangHandler('en')}
				>
					EN
				</button>
			</div>
		</header>
	);
};

export default Header;
