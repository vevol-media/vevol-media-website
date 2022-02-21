import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import Fade from 'react-reveal/Fade';

export default function SingleReview({ name, role, text, delayTime }) {
	return (
		<Fade right delay={delayTime}>
			<li>
				<div className="review">
					<div className="review__left">
						<div className="review__stars">
							{Array(5)
								.fill(0)
								.map((item, index) => (
									<FontAwesomeIcon key={index} icon={faStar} />
								))}
						</div>
						<div className="review__name">
							<p>{name}</p>
							<p>{role}</p>
						</div>
					</div>
					<div className="review__text">
						<FontAwesomeIcon icon={faQuoteLeft} />
						{text}
					</div>
				</div>
			</li>
		</Fade>
	);
}
