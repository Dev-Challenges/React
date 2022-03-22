import React from 'react';

const Scroll = props => {
	return (
		<div style={{ overflowY: 'scroll', border: '0', height: '760px', position: 'relative' }}>{props.children}</div>
	);
};

export default Scroll;
