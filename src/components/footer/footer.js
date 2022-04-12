import React from 'react';
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Container, Title } from 'bloomer';
import './footer.scss';

export default function Footer() {
	return (
		<footer>
			<div >
				<StaticImage
				src="../../images/vevol-media-logo.png"
				alt="avatar"
				layout="fixed"
				width={120}
				height={20}
				/>
			</div>

			<div className='footer-column'>
				<Title>Services</Title>
				<Link to="/">Digital Marketing</Link>
				<Link to="/">Website Development</Link>
				<Link to="/">Branding & Creative</Link>
				<Link to="/">Email & SMS Marketing</Link>
			</div>

			<div className='footer-column'>
				<Title>Comapany</Title>
				<Link to="/">Story</Link>
				<Link to="/">Work</Link>
				<Link to="/">Contact Us</Link>
			</div>

			<div className='footer-column'>
				<Title>Extras</Title>
				<Link to="/">Client Portal</Link>
				<Link to="/">Careers</Link>
				<Link to="/">Limodify</Link>
				<Link to="/">FAQ</Link>
			</div>

			<div className='footer-column'>
				<Title>Social</Title>
				<div className='footer-row'>
					<a href='#'>FB</a>
					<a href='#'>In</a>
					<a href='#'>Tw</a>
					<a href='#'>Yut</a>
				</div>
			</div>
		</footer>
	);
}
