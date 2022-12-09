import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import FavFacts from './components/Favfacts';
import SplashScreen from './components/SplashScreen';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<SplashScreen />} />
				<Route path="/factsCalender" element={<SplashScreen />} />
				<Route path="/home" element={<App />} />
				<Route path="/favfacts" element={<FavFacts />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);

