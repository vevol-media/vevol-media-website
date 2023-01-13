import React, { useState } from 'react';
import MenuAnimation from './menu-animation';
import { Link } from 'gatsby';
import { Container } from 'bloomer';
import iconClose from '../../images/icon-close.svg';
import logoWhite from '../../images/logo-vevol-media.svg';
import logoBlack from '../../images/logo-vevol-media-black.svg';
import './header.scss';

export default function Header({ background, isStatic }) {
	const [isNavVisible, setIsNavVisible] = useState(false);

	return (
		<div id="header"
			className={`vm-header vm-header--${background ? 'white' : 'black'} vm-header--${isStatic ? 'relative' : ''}`}
		>
			<Container>
				<Link to="/" className="vm-header__logo">
					<img src={background === 'white' ? logoBlack : logoWhite} alt="Vevol Media Logo" />
				</Link>

				<div className="vm-header__navigation">
					<div className="navigation__item">
						<Link to="/services">
							Services <span className="navigation__notification">1</span>
						</Link>
						<div className="navigation__subnav">
							<Link to="/services/shopify-development">Shopify Development</Link>
							<Link to="/services/shopify-migration">Shopify Migration</Link>
							<Link to="/services/bespoke-development">Bespoke Development</Link>
							<Link to="/services/seo-services">SEO Services</Link>
							<Link to="/services/ui-ux-web-design">UI/UX Web Design</Link>
							<Link className="navigation__service-plans" to="/service-plans">
								<span>New</span>
								<p>Service Plans</p>
								<p>
									Choose a monthly, quaterly or yearly recurring payment and get discounted quality
									services
								</p>
							</Link>
						</div>
					</div>
					<Link to="/work">Our Work</Link>
				</div>
				<div
					className="vm-header__burger"
					role="button"
					tabIndex={0}
					onKeyDown={(e) => {
						if (e.keyCode === 13) {
							setIsNavVisible(!isNavVisible);
						}
					}}
					onClick={() => {
						setIsNavVisible(!isNavVisible);
					}}
				>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<div className={`vm-header__extra-nav ${isNavVisible ? 'show-nav' : ''}`}>
					<Link to="/services">Services</Link>
					<Link to="/service-plans">Service Plans</Link>
					<Link to="/work">Our Work</Link>
					<Link to="/about">About Us</Link>
					<Link to="/contact">Contact Us</Link>
					<Link to="/blog">Blog</Link>
					<Link to="/faqs">FAQ</Link>
					<Link to="/strategic-partnerships">Strategic Partnerships</Link>

					<div
						className="extra-nav__close"
						role="button"
						tabIndex={0}
						onKeyDown={(e) => {
							if (e.keyCode === 13) {
								setIsNavVisible(!isNavVisible);
							}
						}}
						onClick={() => {
							setIsNavVisible(!isNavVisible);
						}}
					>
						<img src={iconClose} alt="Close Menu" />
					</div>

					<MenuAnimation />
				</div>
			</Container>
		</div>
	);
}
