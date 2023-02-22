import React from 'react';
// import { NavLink } from 'react-router-dom';

// COMPONENTS
import CountryItem from './CountryItem';

const CountryList = ({countries}) => {

	return(
		<section className="section">
			<div className="section__inner">
				<div className="grid grid--cols-md2 grid--cols-lg3 grid--cols-xl4 grid--gap-2">
					{countries.length ? 
						countries.map((country, index) => (
							<CountryItem country={country} key={index} />
						))
						:
						null
					}
				</div>
			</div>
		</section>
	)
}

export default CountryList;