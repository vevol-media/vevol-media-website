import React from 'react';
import { Title } from 'bloomer';

export default function HeadingBlock({ title, subtitle, highlightedWord, alignRight }) {
	const insertSpan = (string, highlightedWord) => {
		return string.split(' ').map((word, index) => {
			return (
				<React.Fragment key={index}>{word === highlightedWord ? <span>{word}</span> : word} </React.Fragment>
			);
		});
	};

	return (
		<div className={`heading-block ${alignRight ? 'heading-block--align-right' : ''} `}>
			<Title tag="h2" isSize={1}>
				{insertSpan(title, highlightedWord)}
			</Title>
			<p>{subtitle}</p>
		</div>
	);
}
