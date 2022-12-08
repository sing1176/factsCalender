import React from 'react';

const SplashScreen = () => {
	return (
		<div className="bg-slate-800 text-white font-kalam h-screen max-w-screen flex flex-col  p-8">
			<h1 className="text-2xl">Welcome to facts calender </h1>

			<button>
				<a href="./home">Lets G0</a>
			</button>
		</div>
	);
};

export default SplashScreen;
