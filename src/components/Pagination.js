import React from 'react';

const Pagination = ({countries, pageNumber, setPage}) => {

	const setCurrentPage = (page) => {
		window.scrollTo(0, 0);
		setPage(page - 1);
	}

	let pages = [];

	for(let i = 1; i < (countries.length / 20) + 1; i++) {
		pages.push(i);
	}

	return(
		<section className="pagination">
			
			<div className="pagination__inner">
				<div className="pagination__results">{pageNumber === 0 ? 1 : pageNumber + 1} of {Math.floor((countries.length / 20) + 1)}</div>
			</div>
			<div className="pagination__inner">
					<button 
						onClick={() => setPage(pageNumber - 1)}
						className="pagination__prev"
						disabled={pageNumber < 1 ? true : false}
					>
						<i className="fa-solid fa-chevron-left"></i>
						<span className="hide-visually">Previous Page</span>
					</button>
					<div className="pagination__items">
					{pages.length ? 
						pages.map((page, index) => (
							<div className={`pagination__item ${pageNumber === index ? 'active' : ''}`} onClick={() => setCurrentPage(page)} key={page}>{page}</div>
							))
						:
						null
					}
					</div>
					<button
						onClick={() => setPage(pageNumber + 1)}
						className="pagination__next"
						disabled={pageNumber > Math.floor((countries.length / 20) - 1) ? true : false}
					>
						<i className="fa-solid fa-chevron-right"></i>
						<span className="hide-visually">Next Page</span>
					</button>
			</div>
		</section>
	)
}

export default Pagination;