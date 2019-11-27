import React, { Fragment } from 'react';
import spinner from './spinner.svg';

const Spinner = () => (
	<Fragment>
		<img
			src={spinner}
			alt='loading.. '
			style={{
				width: '2.5rem',
				margin: 'auto',
				display: 'block'
			}}
		/>
	</Fragment>
);

export default Spinner;
