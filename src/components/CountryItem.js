import React from 'react';
import { Link } from 'react-router-dom';

const CountryItem = ({country, index}) => {

	return(
		<div className="grid__item">
			<Link to={`/${country.name.common}`} className="country">
				<div className="country__image">
					<img src={country.flags.png} alt={country.name.common} />
				</div>
				<div className="country__meta">
					<h4 className="country__name">{country.name.common}</h4>
					<div className="country__meta-item">
						<span className="country__meta-label">Population: </span>
						<span className="country__meta-data">{country.population.toLocaleString('en-US')}</span>
					</div>
					<div className="country__meta-item">
						<span className="country__meta-label">Capital: </span>
						<span className="country__meta-data">{country.capital}</span>
					</div>
					<div className="country__meta-item">
						<span className="country__meta-label"></span>
						<span className="country__meta-data"></span>
					</div>
					{/* <div className="country__meta-item">
						<a href={country.maps.googleMaps} className="country__meta-map" target="_blank" rel="noreferrer">
							Map
						</a>
					</div> */}
				</div>
			</Link>
		</div>
	)
}

export default CountryItem;