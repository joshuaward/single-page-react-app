import React, { useState, useEffect }  from 'react';
import { Link, useParams } from 'react-router-dom';

const Country = () => {

	const params = useParams();
	const [country, setCountry] = useState([]);

	useEffect(() => {
		fetch(`https://restcountries.com/v3.1/alpha/${params.ccn3}`)
			.then(res => res.json())
			.then(data => {
				setCountry(data)
			})
	}, [params]);

	return(
		<section className="section">
			<div className="section__inner">
				<div className="country-detail">
					<header className="country-detail__header">
						<Link to="/" className="country-detail__back-button">
							<i className="fas fa-arrow-left"></i>
							Back
						</Link>
					</header>
					{
						country.map((item, index) => (
							<div key={index} className="country country--detail">
								
								<div className="country__image">
									<img src={item.flags.png} alt={item.name.common} />
								</div>
								<div className="country__meta">
									<h4 className="country__name">
											<span>{item.name.common}</span>
											<Link to={item.maps.googleMaps} className="country__map" target="_blank" rel="noreferrer">
													<i className="fas fa-location-dot"></i>
													<span className="hide-visually">Map</span>
											</Link>
									</h4>
									<div className="country__meta-item">
										<span className="country__meta-label">Population: </span>
										<span className="country__meta-data">{item.population.toLocaleString('en-US')}</span>
									</div>
									<div className="country__meta-item">
										<span className="country__meta-label">Capital: </span>
										<span className="country__meta-data">{item.capital}</span>
									</div>
									<div className="country__meta-item">
										<span className="country__meta-label">Region: </span>
										<span className="country__meta-data">{item.region}</span>
									</div>
									<div className="country__meta-item">
										<span className="country__meta-label">Sub Region: </span>
										<span className="country__meta-data">{item.subregion}</span>
									</div>
									<div className="country__meta-item">
										<span className="country__meta-label">Coordinates: </span>
										<span className="country__meta-data">
											<span>{item.latlng[0].toFixed(3)},  {item.latlng[1].toFixed(3)}</span>
										</span>
									</div>
								</div>
							</div>
						))
					}
				</div>
			</div>
		</section>
	)
}

export default Country;