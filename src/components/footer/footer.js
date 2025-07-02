import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Column, Title, Columns, Container, Footer } from 'bloomer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faTiktok } from '@fortawesome/free-brands-svg-icons';
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
						<Link to="/services/shopify-development">Shopify Development</Link>
						<Link to="/services/bespoke-development">Bespoke Development</Link>
						<Link to="/services/shopify-migration">Shopify Migration</Link>
						<Link to="/services/seo-services">SEO Services</Link>
						<Link to="/services/shopify-seo-audit">Free Shopify SEO Audit</Link>
						<Link to="/services/ui-ux-web-design">UI/UX Web Design</Link>
					</Column>
					<Column>
						<Title tag="h4" isSize={4}>
							Company
						</Title>
						<Link to="/about">About</Link>
						<Link to="/work">Our work</Link>
						<Link to="/contact">Contact Us</Link>
						<Link to="/careers">Careers</Link>
						<Link to="/strategic-partnerships">Strategic Partnerships</Link>
						<Link to="/cookie-policy">Cookie Policy</Link>
						<Link to="/privacy-policy">Privacy Policy</Link>
						<Link to="/faqs">FAQ</Link>
					</Column>
					<Column className="footer__social">
						<Title tag="h4" isSize={4}>
							Social
						</Title>
						<div className="footer-social__links">
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
								<svg
									viewBox="0 0 256 256"
									width="20px"
									height="20px"
									fill="#ffffff"
									xmlns="http://www.w3.org/2000/svg"
									style={{ verticalAlign: 'middle', display: 'inline-block', marginBottom: '3px' }}
								>
									<g
										fill="#ffffff"
										fillRule="nonzero"
										stroke="none"
										strokeWidth="1"
										strokeLinecap="butt"
										strokeLinejoin="miter"
										strokeMiterlimit="10"
										fontFamily="none"
										fontWeight="none"
										fontSize="none"
										textAnchor="none"
										style={{ mixBlendMode: 'normal' }}
									>
										<g transform="scale(10.66667,10.66667)">
											<path d="M2.36719,3l7.0957,10.14063l-6.72266,7.85938h2.64063l5.26367,-6.16992l4.31641,6.16992h6.91016l-7.42187,-10.625l6.29102,-7.375h-2.59961l-4.86914,5.6875l-3.97266,-5.6875zM6.20703,5h2.04883l9.77734,14h-2.03125z"></path>
										</g>
									</g>
								</svg>
							</a>
							<a href="https://www.tiktok.com/@vevolmedia" target="_blank" rel="noopener noreferrer">
								<FontAwesomeIcon icon={faTiktok} />
							</a>
						</div>
						<Title tag="h4" isSize={4} className="mt-5">
							Latest
						</Title>
						<Link to="/blog">Read Blog</Link>
						<a href="https://vevol-store.printify.me/products" target="_blank" rel="noopener noreferrer">
							Visit our Store
						</a>
					</Column>
				</Columns>
			</Container>
			<Container className="footer__copyright">
				<p>© {year} Vevol Media | All Rights Reserved | VAT No. IE3919679TH</p>
			</Container>
		</Footer>
	);
}
