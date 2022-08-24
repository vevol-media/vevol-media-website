import React from 'react';
import { Title } from 'bloomer';
import { Link } from 'gatsby';
import { BgImage } from 'gbimage-bridge';
import Fade from 'react-reveal/Fade';
import './bottom-cta.scss';

export default function BottomCTA({ bgImage, title, text, url }) {
	return (
		<div className="bottom-cta__section ">
			<BgImage className="bottom-cta__section-left-banner vm-section" image={bgImage} />

			<div className="bottom-cta__section-right-banner vm-section">
				<div className="bottom-cta__btn-container">
					<Fade top>
						<Title className="bottom-cta__logos-title" tag="h2" isSize={2}>
							{title}
						</Title>
					</Fade>
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
		</div>
	);
}
