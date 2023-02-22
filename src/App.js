import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// VIEWS
import Home from './views/Home';
import Country from './views/Country';
import NotFound from './views/NotFound';

// COMPONENTS
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {

	const [loaded, setLoaded] = useState(false);
	const [error, setError] = useState(false);
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		fetch('https://restcountries.com/v3.1/all?results=10')
			.then(res => res.json())
			.then(data => {
				setLoaded(true);
				setCountries(data);
			})
			.catch(err => {
				setError(true);
				console.error(err)
			})
	}, [loaded, error]);

  return (
    <BrowserRouter>
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home countries={countries} />} />
					<Route path="/:name" element={<Country />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</main>
			<Footer />
		</BrowserRouter>
  );
}

export default App;
