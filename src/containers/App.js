import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import '../containers/App.css';
import { setSearchField } from '../actions';

const mapStateToProps = state => {
	return {
		searchfield: state.searchfield,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onSearchChange: event => dispatch(setSearchField(event.target.value)),
	};
};

function App(props) {
	const [robots, setRobots] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => {
				setRobots(users);
			});
	}, []);

	{
		const filterRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(props.searchfield.toLowerCase());
		});

		return !robots.length ? (
			<h1>Loading ...</h1>
		) : (
			<div className='tc'>
				<h1 className='f2'>Robofriends</h1>
				<SearchBox searchChange={props.onSearchChange} />
				<Scroll>
					<CardList robots={filterRobots} />
				</Scroll>
				<h3 className='f4'>Scroll down for more robots</h3>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
