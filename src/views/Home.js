import React from 'react';

// COMPONENTS
import CountryList from '../components/CountryList';

const Home = ({countries}) => {

	return(
		<section className="section">
			<div className="section__inner">
				<h1>Home</h1>
			</div>
			<CountryList countries={countries} />
		</section>
	)
}

export default Home;