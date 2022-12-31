import './App.css';
import React, { useState } from 'react';
import ShowTrain from './components/ShowSeat';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<ShowTrain />} />
			</Routes>
		</BrowserRouter>
	);
}
