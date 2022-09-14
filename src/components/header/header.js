import React, { useState } from 'react';
import MenuAnimation from './menu-animation';
import { Link } from 'gatsby';
import { Container } from 'bloomer';
import iconClose from '../../images/icon-close.svg';
import logoWhite from '../../images/logo-vevol-media.svg';
import logoBlack from '../../images/logo-vevol-media-black.svg';
import './header.scss';

export default function Header({ background }) {
	const [isNavVisible, setIsNavVisible] = useState(false);

	return (
		<div className={`vm-header vm-header--${background ? 'white' : 'black'}`}>
			<Container>
				<Link to="/" className="vm-header__logo">
					<img src={background === 'white' ? logoBlack : logoWhite} alt="Vevol Media Logo" />
				</Link>

				<div className="vm-header__navigation">
					<Link to="/services">Our Services</Link>
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
					<Link to="/work">Work</Link>
					<Link to="/about">About Us</Link>
					<Link to="/faqs">FAQ</Link>
					<Link to="/contact">Contact Us</Link>
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
