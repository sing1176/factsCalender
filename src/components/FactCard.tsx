import React from 'react';
import { useState } from 'react';

const FactCard = ({
	fact,
	saved,
	setSaved,
}: {
	fact: string;
	saved: boolean;
	setSaved: (saved: boolean) => void;
}) => {
	const saveFact = (fact: string) => {
		if (saved) {
			return;
		}

		const favFactsList = localStorage.getItem('favFactsList');
		if (favFactsList) {
			const favFacts = JSON.parse(favFactsList);
			favFacts.push(fact);
			localStorage.setItem('favFactsList', JSON.stringify(favFacts));
		} else {
			localStorage.setItem('favFactsList', JSON.stringify([fact]));
		}

		setSaved(true);
	};

	return (
		<div
			className="bg-indigo-400 p-4
        rounded-lg border-indigo-900 border-4 shadow-xl max-w-md hover:scale-110 hover:bg-indigo-500 "
		>
			<h3 className="text-center mb-4 text-xl underline underline-offset-8 ">
				On this day
			</h3>
			<h4>{fact}</h4>
			<div className="flex  justify-end mt-4">
				<button
					onClick={() => {
						saveFact(fact);
					}}
					className="bg-pink-200 p-2 rounded-lg shadow-xl"
				>
					{saved ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="#f472b6"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="none"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
							/>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="black"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
							/>
						</svg>
					)}
				</button>
			</div>
			<div />
		</div>
	);
};

export default FactCard;
