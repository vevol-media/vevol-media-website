import React from 'react';
import { Title, Container } from 'bloomer';
import { Fade } from 'react-reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import VevolSection from './vm-section';

export default function Quote({ firstPart, secondPart, authorName, authorRole }) {
	return (
		<VevolSection className={'client-quote'}>
			<Container className="client-quote__content">
				<Fade top cascade>
					<FontAwesomeIcon icon={faQuoteLeft} />
					<Title tag="h3" isSize={1}>
						{firstPart}
					</Title>
					<Title tag="h4" isSize={4}>
						{secondPart}
					</Title>

					<p>
						<span>{authorName}</span>
						<span>{authorRole}</span>
					</p>
				</Fade>
			</Container>
		</VevolSection>
	);
}
