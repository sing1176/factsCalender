import React from 'react';
import calender from '../assets/calender.png';

const SplashScreen = () => {
	return (
		<div className="bg-indigo-700 text-white font-kalam h-screen max-w-screen flex flex-col justify-center items-center p-8">
			<h1 className="text-2xl lg:text-6xl mb-10">Welcome to facts calender </h1>

			<button className="bg-pink-200 hover:bg-pink-300 hover:scale-110 text-black py-2 px-4 rounded-lg lg:text-3xl">
				<a href="./home">Lets G0</a>
			</button>
		</div>
	);
};

export default SplashScreen;
