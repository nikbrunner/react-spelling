import React from 'react';
import Spinner from '../Spinner/Spinner';

const Header = ({
	texts,
	loading,
	score,
	lang,
	switchLangHandler
}) => {
	const calcPointsLabel = () => {
		return window.innerWidth <= 414
			? score
			: `${texts.score}: ${score}`;
	};

	return loading ? (
		<Spinner />
	) : (
		<header className='flex justify-between my-5 px-5 lg:px-0'>
			<h1 className='Header flex content-center items-center text-xl lg:text-5xl text-blue-500 font-black antialiased'>
				{texts.title}
			</h1>
			<div className='inline-flex shadow items-center bg-gray-300 text-gray-800 rounded font-bold py-2 px-4'>
				<p className=''>{calcPointsLabel()}</p>
			</div>
			<div className='inline-flex shadow'>
				<button
					className={`${
						lang === 'de'
							? 'bg-green-500 text-white'
							: 'bg-gray-300 text-gray-800'
					} hover:bg-gray-400 font-bold py-2 px-4 rounded-l`}
					onClick={() => switchLangHandler('de')}
				>
					DE
				</button>
				<button
					className={`${
						lang === 'en'
							? 'bg-green-500 text-white'
							: 'bg-gray-300 text-gray-800'
					} hover:bg-gray-400 font-bold py-2 px-4 rounded-r`}
					onClick={() => switchLangHandler('en')}
				>
					EN
				</button>
			</div>
		</header>
	);
};

export default Header;
