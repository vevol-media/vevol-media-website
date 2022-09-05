import React from 'react';
import { Title } from 'bloomer';
import { Fade } from 'react-reveal';

export default function HeadingBlock({ title, subtitle, highlightedWord, alignRight, className }) {
	const insertSpan = (string, highlightedWord) => {
		return string.split(' ').map((word, index) => {
			return (
				<React.Fragment key={index}>{word === highlightedWord ? <span>{word}</span> : word} </React.Fragment>
			);
		});
	};

	return (
		<div
			className={`heading-block ${alignRight ? 'heading-block--align-right' : ''} ${className ? className : ''}`}
		>
			<Fade bottom>
				<Title tag="h2" isSize={1}>
					{insertSpan(title, highlightedWord)}
				</Title>
			</Fade>
			<Fade bottom delay={100}>
				<p>{subtitle}</p>
			</Fade>
		</div>
	);
}
