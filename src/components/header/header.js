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
	const classes = `vm-header vm-header--${background}`;

	return (
		<div className={classes}>
			<Container>
				<Link to="/" className="vm-header__logo">
					<img src={background === 'white' ? logoBlack : logoWhite} alt="Vevol Media Logo" />
				</Link>

				<div className="vm-header__navigation">
					<Link to="/">Services</Link>
					<Link to="/">Portfolio</Link>
					<Link to="/" className="vm-button vm-button--transparent-white">
						Start Your Project
					</Link>
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
					<Link to="/">Services</Link>
					<Link to="/">Portfolio</Link>
					<Link to="/team">About Us</Link>
					<Link to="/frequently-asked-questions">FAQ</Link>
					<Link to="/">Case Studies</Link>
					<Link to="/">Contact Us</Link>
					<Link to="/">Strategic Partnerships</Link>
					<Link to="/" className="vm-button vm-button--transparent-white">
						Start your project
					</Link>

					<div
						className="extra-nav__close"
						role="button"
						tabIndex={0}
						onKeyDown={(e) => {
							console.log(e);
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
