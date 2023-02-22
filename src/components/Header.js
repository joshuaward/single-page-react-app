import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return(
		<header className="header">
			<div className="header__inner">
				<NavLink to="/" className="header__logo">
					<span className="">Countries</span>
				</NavLink>
			</div>
		</header>
	)
}

export default Header;