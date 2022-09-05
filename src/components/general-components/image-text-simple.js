import React from 'react';
import { Title } from 'bloomer';
import { Fade } from 'react-reveal';

export default function ImageWithText({ image, title, textContent, alignRight, greenLine }) {
	return (
		<div
			className={`image-with-text ${alignRight ? 'image-with-text--align-right' : ''} ${
				greenLine ? 'image-with-text--green-line' : ''
			}`}
		>
			<div className="iwt__left">{image}</div>
			<Fade bottom cascade>
				<div className="iwt__right">
					{title && (
						<Fade bottom>
							<Title>{title}</Title>
						</Fade>
					)}
					{textContent &&
						textContent.map((item, index) => (
							<Fade bottom key={index} delay={100 * index}>
								<React.Fragment key={index}>{item}</React.Fragment>
							</Fade>
						))}
				</div>
			</Fade>
		</div>
	);
}
