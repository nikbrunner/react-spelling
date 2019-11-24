import React from 'react';
import Spinner from '../Spinner/Spinner';
import './Header.scss';

const Header = ({ texts, loading }) => {
	return loading ? (
		<Spinner />
	) : (
		<h1 className='Header'>{texts.title}</h1>
	);
};

export default Header;
