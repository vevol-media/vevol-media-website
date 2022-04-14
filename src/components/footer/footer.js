import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Column, Title, Columns } from 'bloomer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
// import logo from "../../images/logo-vevol-media.svg";
import './footer.scss';

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer>
			<Columns isCentered>
				<Column isSize={{ desktop: 2 }}>
					<div className="footer-logo">
						<StaticImage
							//src= does not support variables, only relative path and external link src
							src="../../images/logo-vevol-media.svg"
							alt="avatar"
							layout="fullWidth"
						/>
					</div>
				</Column>

				<Column isSize={{desktop: 3, widescreen: 2}} className="is-flex is-flex-direction-column">
					<Title tag="h4" isSize={4}>
						Services
					</Title>
					<Link to="/">Digital Marketing</Link>
					<Link to="/">Website Development</Link>
					<Link to="/">Branding &amp; Creative</Link>
					<Link to="/">Email &amp; SMS Marketing</Link>
				</Column>

				<Column isSize={{ desktop: 2 }} className="is-flex is-flex-direction-column">
					<Title tag="h4" isSize={4}>
						Company
					</Title>
					<Link to="/">Story</Link>
					<Link to="/">Work</Link>
					<Link to="/">Contact Us</Link>
				</Column>

				<Column isSize={{ desktop: 2 }} className="is-flex is-flex-direction-column">
					<Title tag="h4" isSize={4}>
						Extras
					</Title>
					<Link to="/">Client Portal</Link>
					<Link to="/">Careers</Link>
					<Link to="/">Limodify</Link>
					<Link to="/frequently-asked-questions">FAQ</Link>
				</Column>

				<Column isSize={{ desktop: 2 }}>
					<Title tag="h4" isSize={4}>
						Social
					</Title>
					<a
						className="mr-5"
						href="https://m.facebook.com/vevolmediaweb"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon icon={faFacebookF} />
					</a>
					<a
						className="mr-5"
						href="https://www.instagram.com/vevolmedia"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon icon={faInstagram} />
					</a>
					<a
						className="mr-5"
						href="https://mobile.twitter.com/vevolmedia"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon icon={faTwitter} />
					</a>
					<a href="#" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faYoutube} />
					</a>
				</Column>
			</Columns>

			<div className="footer-copyright">
				<Link to="/"> © {year} Vevol Media | All Rights Reserved </Link>
			</div>
		</footer>
	);
}
