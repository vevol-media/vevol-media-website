import React from 'react';
import { Container } from 'bloomer';
import allReviews from '../../enums/reviews';
import SingleReview from './single-review';
import './reviews-section.scss';
import HeadingBlock from '../heading-block/heading-block';

export default function ReviewsSection() {
	return (
		<div className="reviews-section vm-section">
			<Container>
				<HeadingBlock
					title={'We work hard to deliver quality'}
					highlightedWord={'quality'}
					subtitle={'And our clients appreciate us.'}
				/>

				<ul className="reviews__list">
					{allReviews.map((review, index) => {
						return <SingleReview key={index} {...review} delayTime={index * 150} />;
					})}
				</ul>
			</Container>
		</div>
	);
}
