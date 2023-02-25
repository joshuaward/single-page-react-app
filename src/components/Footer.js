import { Link } from 'react-router-dom';

const Footer = () => {
	const date = new Date().getFullYear();
	return(
		<footer className="footer">
			<div className="footer__inner">
				<div className="footer__section">
					Made with <i className="fa-solid fa-heart"></i> by <Link to="https://joshuaward.me" target="_blank">joshuaward.me</Link>
				</div>
				<div className="footer__section">
					&copy; {date}
				</div>
			</div>
		</footer>
	)
}

export default Footer;