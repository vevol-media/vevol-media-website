import React from 'react';
import { Title, Container } from 'bloomer';
import { Fade } from 'react-reveal';

export default function ImageWithText({ image, title, textContent, alignRight }) {
	return (
		<div className={`image-with-text ${alignRight && 'image-with-text--align-right'}`}>
			<Container>
				<div className="iwt__left">{image}</div>
				<Fade bottom cascade>
					<div className="iwt__right">
						{title && <Title>{title}</Title>}
						{textContent &&
							textContent.map((item, index) => (
								<p className="mt-3" key={index}>
									{item}
								</p>
							))}
					</div>
				</Fade>
			</Container>
		</div>
	);
}
