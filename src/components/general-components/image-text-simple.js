import React from 'react';
import { Title } from 'bloomer';
import { Fade } from 'react-reveal';

export default function ImageWithText({ image, title, textContent, numbersContent, alignRight, greenLine, className, children }) {
	return (
		<div
			className={`image-with-text ${alignRight ? 'image-with-text--align-right' : ''} ${
				greenLine ? 'image-with-text--green-line' : ''
			} ${className ? className : ''}`}
		>
			<div className="iwt__left">{image}</div>
			<Fade bottom cascade>
				<div className="iwt__right">
					{title && (
						<Fade bottom>
							<Title tag="h3" isSize={3}>
								{title}
							</Title>
						</Fade>
					)}
					{textContent &&
						textContent.map((item, index) => (
							<Fade bottom key={index} delay={100 * index}>
								<React.Fragment key={index}>{item}</React.Fragment>
							</Fade>
						))}
					{numbersContent && (
						<div className="iwt__numbers">
							{numbersContent.map((item, index) => (
								<Fade bottom key={index} delay={100 * index}>
									<div className="iwt-numbers__item">
									    <span>{item.image}</span>
										<span><strong>{item.title}</strong></span>
										<span>{item.subtitle}</span>
									</div>
								</Fade>
							))}
						</div>
					)}
					{children}
				</div>
				
			</Fade>
		</div>
	);
}
