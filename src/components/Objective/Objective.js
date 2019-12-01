import React from 'react';
import Spinner from '../Spinner/Spinner';

const Objective = ({ loading, objective }) => {
	return loading ? (
		<Spinner />
	) : (
		<p
			className={`
            text-center
			text-3xl
			py-3
			px-4
            bg-blue-500
            font-bold
			text-white
			lg:rounded-lg

        `}
		>
			{objective}
		</p>
	);
};

export default Objective;
