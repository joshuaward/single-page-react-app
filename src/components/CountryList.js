import React from 'react';
// import { NavLink } from 'react-router-dom';

// COMPONENTS
import CountryItem from './CountryItem';

const CountryList = ({countries, page}) => {

	return(
		<div className="grid grid--cols-md2 grid--cols-lg3 grid--cols-xl4 grid--gap-2">
			{countries.length ? 
				countries.slice(page * 20, page * 20 + 20).map((country, index) => (
					<CountryItem country={country} key={index} />
				))
				:
				null
			}
		</div>
	)
}

export default CountryList;