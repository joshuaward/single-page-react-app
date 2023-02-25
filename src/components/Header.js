import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = ({menu, setMenu}) => {

	return(
		<header className="header">
			<div className="header__inner">
				<NavLink 
					to="/"
					className="header__logo"
					aria-label="navigate home"
				>
					<i className="fa-sharp fa-solid fa-earth-americas"></i>
					<span className="header__logo">Countries API</span>
				</NavLink>

				<button
					className={`header__nav-toggle ${menu ? 'is-open' : ''}`}
					onClick={() => setMenu(!menu)}
					aria-label="toggle menu"
				>
					<span></span>
					<span></span>
					<span></span>
				</button>

				<nav className={`header__nav ${menu ? 'is-open' : ''}`}>
					<ul className="header__nav-list">
						<li className="header__nav-item">
							<Link
								to="https://restcountries.com/#api-endpoints-v3-all"
								className="header__nav-link"
								target="_blank"
								rel="noreferrer"
								aria-label="link to api"
							>
								<i className="fa-solid fa-map"></i>
								<span>Countries API</span>
							</Link>
						</li>
						<li className="header__nav-item">
							<Link
								to="https://github.com/joshuaward/single-page-react-app"
								className="header__nav-link"
								target="_blank"
								rel="noreferrer"
								aria-label="link to github"
							>
								<i className="fa-brands fa-github"></i>
								<span>GitHub Repo</span>
							</Link>
						</li>
						<li className="header__nav-item">
							<Link
								to="https://codepen.io/joshuaward/pen/QWBbRjz"
								className="header__nav-link"
								target="_blank"
								rel="noreferrer"
								aria-label="link to codepen"
							>
								<i className="fa-brands fa-codepen"></i>
								<span>Sortable in Vue</span>
							</Link>
						</li>
						<li className="header__nav-item">
							<Link
								to="http://joshuaward.me/"
								className="header__nav-link"
								target="_blank"
								rel="noreferrer"
								aria-label="link to my website"
							>
								<i className="fa-solid fa-mountain-sun"></i>
								<span>My Portfolio</span>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header;