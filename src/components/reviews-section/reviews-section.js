import React from 'react';
import { Container, Title } from 'bloomer';
import allReviews from '../../enums/reviews';
import SingleReview from './single-review';
import './reviews-section.scss';

export default function ReviewsSection() {
	return (
		<div className="reviews-section vm-section">
			<Container>
				<div className="heading-block">
					<Title tag="h2" isSize={2}>
						We work hard to deliver <span>quality</span>
					</Title>
					<p>And our clients appreciate us.</p>
				</div>

				<ul className="reviews__list">
					{allReviews.map((review, index) => {
						return <SingleReview key={index} {...review} delayTime={index * 150} />;
					})}
				</ul>
			</Container>
		</div>
	);
}
