import React, { useState, useRef } from 'react';
import { Title } from 'bloomer/lib/elements/Title';
import './features-index.scss';
import featuresIndex from '../../enums/features-index';

export default function FeaturesIndex({ featuresIndexRef }) {
	const [activeFeature, setActiveFeature] = useState(0);
	const blocksRef = useRef();

	const scrollToFeature = (index) => {
		blocksRef.current.children[index].scrollIntoView({
			behavior: 'smooth',
			block: 'center',
		});
	};

	const handleFeatureClick = (index) => {
		setActiveFeature(index);
		scrollToFeature(index);
	};

	return (
		<div className="features-index">
			<ul className="features-index__list" ref={featuresIndexRef}>
				{featuresIndex.map((feature, index) => (
					<li
						key={index}
						onClick={() => {
							handleFeatureClick(index);
						}}
						onKeyUp={(e) => {
							if (e.keyCode === 32) {
								handleFeatureClick(index);
							}
						}}
						role="presentation"
						className={index === activeFeature ? 'features-index__feature--active' : ''}
					>
						{feature.title}
					</li>
				))}
			</ul>
			<div className="features-index__info" ref={blocksRef}>
				{featuresIndex.map((feature, index) => (
					<div
						className={`features-index__info-block ${
							index === activeFeature ? 'features-index__info-block--active' : ''
						}`}
						key={index}
					>
						<Title tag="h2" isSize={4}>
							{feature.title}
						</Title>
						<p>{feature.info}</p>
					</div>
				))}
			</div>
		</div>
	);
}
