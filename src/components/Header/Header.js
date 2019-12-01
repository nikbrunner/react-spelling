import React from 'react';
import Spinner from '../Spinner/Spinner';

const Header = ({
	texts,
	loading,
	score,
	seconds,
	lang,
	switchLangHandler
}) => {
	return loading ? (
		<Spinner />
	) : (
		<header className='flex justify-between my-5 px-5 md:px-0'>
			<h1 className='Header flex content-center items-center text-3xl xl:text-5xl text-blue-500 font-black antialiased'>
				{texts.title}
			</h1>
			<div className='flex flex-col content-center items-center'>
				<p className='text-blue-500'>
					{texts.score}: {score}
				</p>
				<p>
					{texts.seconds}: {seconds}
				</p>
				<p>
					{texts.scorePerSeconds}: {score / seconds}
				</p>
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
