import React from 'react';
import DatePicker from 'react-datepicker';
import { useState, useEffect } from 'react';
import FactCard from './components/FactCard';
import 'react-datepicker/dist/react-datepicker.css';
import './App.css';

function App() {
	const [startDate, setStartDate] = useState(new Date());
	const [month, setMonth] = useState(startDate.getMonth() + 1);
	const [day, setDay] = useState(startDate.getDate());

	const [dislayError, setDislayError] = useState(false);
	const [favFactsList, setFavFactsList] = useState([] as string[]);
	const [fact, setFact] = useState('');
	const [saved, setSaved] = useState(false);

	const url = `http://numbersapi.com/${month}/${day}/date`;

	useEffect(() => {
		getFacts();
	}, [startDate]);

	const ErrorCard = () => {
		return (
			<div className="flex flex-col justify-center items-center">
				<h1 className="text-2xl">Oh oh something went wrong</h1>
				<button

					className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
				>
					Try again
				</button>
			</div>
		);
	};



	const getFacts = async () => {
		try {
			const response = await fetch(url);
			const data = await response.text();
			setFact(data);
		} catch (error) {
			console.log(error);
			setDislayError(true);
		}
	};

	const handleDayChange = (date: Date) => {
		setStartDate(date);
		setMonth(date.getMonth() + 1);
		setDay(date.getDate());
		setSaved(false);
	};

	return (
		<div className="flex  bg-indigo-700 h-screen flex-col text-white font-kalam p-4">
			<div className="flex justify-between items-center">
				<h1 className="text-3xl text-center">Facts Calender</h1>

				<button>
					<a href="./favfacts">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="#f472b6"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="none"
							className="w-8 h-8 "
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
							/>
						</svg>
					</a>
				</button>
			</div>

			<div className="flex justify-center my-8">
				<DatePicker
					selected={startDate}
					onChange={(date) => handleDayChange(date as Date)}
					inline
				/>
			</div>
			<div className="flex justify-center">

				{dislayError ? <ErrorCard /> : <FactCard fact={fact} saved={saved} setSaved={setSaved} />}
			</div>
		</div>
	);
}

export default App;
