import React, { useState, useEffect } from 'react';

// COMPONENTS
import Loader from '../components/Loader';
import CountryList from '../components/CountryList';
import Pagination from '../components/Pagination';

const Home = ({loaded, error, countries}) => {
	const [page, setPage] = useState(0);
	useEffect(() => {
		setPage(0);
	},[countries])

	return(
		<section className="section section--full">
			<div className="section__inner">
				{loaded ? (
					<React.Fragment>
						{!error ? (
								<React.Fragment>
									<CountryList countries={countries} page={page} />
									<Pagination setPage={setPage} pageNumber={page} countries={countries} />
								</React.Fragment>
							)
							:
							(
								<div className="error">
									<h2>Shewt!</h2>
									<p>Not sure what happened there. Refresh and try again.</p>
								</div>
						)}
					</React.Fragment>
				)
				:
				(
					<React.Fragment>
						<Loader />
					</React.Fragment>
				)
				}
			</div>
		</section>
	)
}

export default Home;