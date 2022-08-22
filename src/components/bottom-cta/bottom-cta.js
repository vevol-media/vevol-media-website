import React from 'react';
import { CardImage, Title } from 'bloomer';
import { Link } from 'gatsby';
import { BgImage } from 'gbimage-bridge';
import './bottom-cta.scss';
import Fade from 'react-reveal/Fade';

export default function BottomCTA({bgImage, title, text, techList, url }) {

	return (
			<BgImage className="bottom-cta__section" image={bgImage}>
			<div className="container bottom-cta__wrapper">
				<div className="bottom-cta__logos-container">
					<Fade top>
						<Title tag="h2" isSize={2}>
							{title}
						</Title>
					</Fade>
					<Fade bottom>
						<div className="bottom-cta__logos">
							{techList.map((tech, index) => {
								return <span key={index}>{tech.name}</span>;
							})}
						</div>
					</Fade>
				</div>

				<div className="bottom-cta__button-container">
					<Fade top>
						<p>{text}</p>
					</Fade>
					<Fade bottom>
						<Link to={url} className="vm-button vm-button--green">
							Get in Touch
						</Link>
					</Fade>
				</div>
			</div>
			</BgImage>
	);
}
