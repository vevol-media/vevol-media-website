import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Column, Title, Columns, Container, Footer } from 'bloomer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './footer.scss';

export default function WebsiteFooter() {
	const year = new Date().getFullYear();

	return (
		<Footer id="footer">
			<Container>
				<Columns>
					<Column className="footer__logo">
						<StaticImage src="../../images/logo-vevol-media.svg" alt="Vevol Media Logo" width={200} />
					</Column>
					<Column>
						<Title tag="h4" isSize={4}>
							Services
						</Title>
						<Link to="/services/web-development">Website Development</Link>
						<Link to="/services/shopify-development">Shopify Development</Link>
						<Link to="/services/shopify-migration">Shopify Migration</Link>
						<Link to="/services/seo-services">SEO Services</Link>
						<Link to="/services/branding-and-creative">Branding &amp; Creative</Link>
					</Column>
					<Column>
						<Title tag="h4" isSize={4}>
							Company
						</Title>
						<Link to="/about">About</Link>
						<Link to="/work">Work</Link>
						<Link to="/contact">Contact Us</Link>
						<Link to="/strategic-partnerships">Strategic Partnerships</Link>
						<Link to="/frequently-asked-questions">FAQ</Link>
					</Column>
					<Column className="footer__social">
						<Title tag="h4" isSize={4}>
							Social
						</Title>
						<a
							className="mr-5"
							href="https://www.linkedin.com/company/vevolmedia/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon icon={faLinkedinIn} />
						</a>
						<a
							className="mr-5"
							href="https://facebook.com/vevolmediaweb"
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
							href="https://twitter.com/vevolmedia"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon icon={faTwitter} />
						</a>
						<a href="https://www.tiktok.com/@vevolmedia" target="_blank" rel="noopener noreferrer">
							<FontAwesomeIcon icon={faTiktok} />
						</a>
					</Column>
				</Columns>
			</Container>
			<Container className="footer__copyright">
				<Link to="/"> © {year} Vevol Media | All Rights Reserved </Link>
			</Container>
		</Footer>
	);
}
