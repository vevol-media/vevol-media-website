import React from 'react';
import allReviews from '../../enums/reviews';
import SingleReview from './single-review';
import './reviews-section.scss';

export default function ReviewsSection({ whiteBackground }) {
	return (
		<ul className={`reviews-section ${whiteBackground ? 'reviews-section--white' : ''}`}>
			{allReviews.map((review, index) => {
				return <SingleReview key={index} {...review} delayTime={index * 100} />;
			})}
		</ul>
	);
}
