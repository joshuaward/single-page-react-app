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
	const [menu, setMenu] = useState(false);

	useEffect(() => {
		fetch('https://restcountries.com/v3.1/all?results=10')
			.then(res => res.json())
			.then(data => {
				setTimeout(() => {
					setLoaded(true);
				}, 5000);
				setCountries(data);
			})
			.catch(err => {
				setError(true);
				console.error(err);
			})
	}, [loaded, error]);

  return (
    <BrowserRouter>
			<Header menu={menu} setMenu={setMenu} />
			<main>
				<Routes>
					<Route path="*" element={<NotFound />} />
					<Route path="/" element={<Home countries={countries} loaded={loaded} error={error} />} />
					<Route path="/country/:ccn3" element={<Country />} />
				</Routes>
			</main>
			<Footer />
		</BrowserRouter>
  );
}

export default App;
