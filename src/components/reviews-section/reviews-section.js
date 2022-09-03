import React from 'react';
import { Container } from 'bloomer';
import allReviews from '../../enums/reviews';
import SingleReview from './single-review';
import './reviews-section.scss';
import HeadingBlock from '../heading-block/heading-block';
import VevolSection from '../general-components/vm-section';

export default function ReviewsSection() {
	return (
		<VevolSection className={'reviews-section'}>
			<Container>
				<HeadingBlock
					title={'We work hard to deliver quality'}
					highlightedWord={'quality'}
					subtitle={'And our clients appreciate us.'}
				/>

				<ul className="reviews__list">
					{allReviews.map((review, index) => {
						return <SingleReview key={index} {...review} delayTime={index * 100} />;
					})}
				</ul>
			</Container>
		</VevolSection>
	);
}
