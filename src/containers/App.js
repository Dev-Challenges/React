import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import '../containers/App.css';

function App() {
	const [robots, setRobots] = useState([]);
	const [searchfield, setSearchfield] = useState('');

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => {
				setRobots(users);
			});
	}, []);

	const onSearchChange = event => {
		setSearchfield(event.target.value);
	};

	{
		const filterRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		});

		return !robots.length ? (
			<h1>Loading ...</h1>
		) : (
			<div className='tc'>
				<h1 className='f2'>Robofriends</h1>
				<SearchBox searchChange={onSearchChange} />
				<Scroll>
					<CardList robots={filterRobots} />
				</Scroll>
				<h3 className='f4'>Scroll down for more robots</h3>
			</div>
		);
	}
}

export default App;
