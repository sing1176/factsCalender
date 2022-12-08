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

	return (
		<div>
			<button
				onClick={() => {
					window.history.back();
				}}
			>
				{' '}
				back{' '}
			</button>

			{facts.length === 0 ? <h1>No favorites yet</h1> : <h1>Favorites</h1>}

			{facts.map((fact: string) => (
				<div>
					<h4>{fact}</h4>
					<button
						onClick={() => {
							const favFactsList = localStorage.getItem('favFactsList');
							if (favFactsList) {
								const favFacts = JSON.parse(favFactsList);
								const index = favFacts.indexOf(fact);
								favFacts.splice(index, 1);
								localStorage.setItem('favFactsList', JSON.stringify(favFacts));

								window.location.reload();
							}
						}}
					>
						{' '}
						remove
					</button>
				</div>
			))}
		</div>
	);
};

export default Favfacts;
