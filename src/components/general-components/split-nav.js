import React from 'react';
import { Link } from 'gatsby';
import { Title } from 'bloomer/lib/elements/Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function SplitNav({ leftTitle, leftUrl, rightTitle, rightUrl }) {
	return (
		<div className={'split-nav'} id="split-nav">
			<div className="split-nav__link">
				<Link to={leftUrl}>
					<FontAwesomeIcon icon={faArrowLeft} />
					<Title tag="h5" isSize={4}>
						{leftTitle}
					</Title>
				</Link>
			</div>
			<div className="split-nav__link split-nav__link--right">
				<Link to={rightUrl}>
					<Title tag="h5" isSize={4}>
						{rightTitle}
					</Title>
					<FontAwesomeIcon icon={faArrowRight} />
				</Link>
			</div>
		</div>
	);
}
