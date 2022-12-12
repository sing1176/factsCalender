import React from 'react';
import { useState, useEffect } from 'react';

const Favfacts = () => {
	const [facts, setFacts] = useState([] as string[]);

	useEffect(() => {
		getFavorites();
	}, []);

	const getFavorites = () => {
		const favFactsList = localStorage.getItem('favFactsList');
		if (favFactsList) {
			setFacts(JSON.parse(favFactsList));
			console.log(facts);
		}
	};

    const deleteFact = (fact: string) => {
			const favFactsList = localStorage.getItem('favFactsList');
			if (favFactsList) {
				const favFacts = JSON.parse(favFactsList);
				const index = favFacts.indexOf(fact);
				if (index > -1) {
					favFacts.splice(index, 1);
				}
				localStorage.setItem('favFactsList', JSON.stringify(favFacts));
			}
			getFavorites();
		};

		return (
			<div className="flex  bg-indigo-700 h-screen flex-col text-white font-kalam p-4">
				<div className="flex mb-4 ">
					<button
						onClick={() => {
							window.history.back();
						}}
						className="flex  justify-between text-lg"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6 mr-2"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M15.75 19.5L8.25 12l7.5-7.5"
							/>
						</svg>
						back
					</button>
				</div>

				{facts.length === 0 ? (
					<h1 className="text-3xl lg:text-6xl text-center mt-60 ">
						No favorites yet
					</h1>
				) : (
					<h1>Favorites</h1>
				)}
				<div className="flex flex-col justify-center  items-center space-y-4 ">
					{facts.map((fact: string) => (
						<div
							className="bg-indigo-400 hover:bg-indigo-500 hover:scale-110 p-4
        rounded-lg border-indigo-900 border-4 shadow-xl  max-w-lg  "
						>
							<h4>{fact}</h4>
							<div className="flex justify-end">
								<button
									onClick={() => deleteFact(fact)}
									className="flex justify-end mt-4"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="red"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="white"
										className="w-6 h-6"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
										/>
									</svg>
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		);
};

export default Favfacts;
