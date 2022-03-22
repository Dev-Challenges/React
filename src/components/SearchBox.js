import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<>
			<div>
				<input
					className='pa3 b--solid br3 b--purple bg-lightest-blue searchbox'
					type='search'
					name=''
					id=''
					placeholder='Search Robot'
					onChange={searchChange}
				/>
			</div>
		</>
	);
};

export default SearchBox;
