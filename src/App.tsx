import React from 'react';
import DatePicker from 'react-datepicker';
import { useState, useEffect } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import './App.css';

function App() {
	const [startDate, setStartDate] = useState(new Date());
	const [month, setMonth] = useState(startDate.getMonth() + 1);
	const [day, setDay] = useState(startDate.getDate());

	const [favFactsList, setFavFactsList] = useState([] as string[]);
	const [fact, setFact] = useState('');

	const url = `http://numbersapi.com/${month}/${day}/date`;

	useEffect(() => {
		getFacts();
	}, [startDate]);

	const getFacts = async () => {
		const response = await fetch(url);
		const data = await response.text();
		setFact(data);
	};

	const handleDayChange = (date: Date) => {
		setStartDate(date);
		setMonth(date.getMonth() + 1);
		setDay(date.getDate());
	};

	const saveFact = (fact: string) => {
		const favFactsList = localStorage.getItem('favFactsList');
		if (favFactsList) {
			const favFacts = JSON.parse(favFactsList);
			favFacts.push(fact);
			localStorage.setItem('favFactsList', JSON.stringify(favFacts));
		} else {
			localStorage.setItem('favFactsList', JSON.stringify([fact]));
		}
	};

	return (
		<div className="App">
			<div>
				<h1>Facts Calender</h1>

				<button>
					<a href="./favfacts">Favorites</a>
				</button>
			</div>

			<DatePicker
				selected={startDate}
				onChange={(date) => handleDayChange(date as Date)}
				inline
			/>

			<div className="fact">
				<h4>{fact}</h4>
				<button
					onClick={() => {
						saveFact(fact);
					}}
				>
					Add to Favorites
				</button>
				<div />
			</div>
		</div>
	);
}

export default App;
