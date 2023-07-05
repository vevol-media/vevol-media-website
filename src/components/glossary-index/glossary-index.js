import React, { useState, useRef } from 'react';
import { Title } from 'bloomer/lib/elements/Title';
import glossaryIndex from '../../enums/glossary-index';
import './glossary-index.scss';
import { debounce } from 'lodash';

export default function GlossaryIndex({ glossaryIndexRef }) {
	const [activeItem, setActiveItem] = useState(0);
	const blocksRef = useRef();

	const debouncedScrollToFeature = debounce((keyIndex) => {
		if (blocksRef.current.children[keyIndex]) {
		  blocksRef.current.children[keyIndex].scrollIntoView({
			behavior: 'smooth',
			block: 'center',
		  });
		}
	}, 350);

	const handleFeatureClick = (keyIndex) => {
		setActiveItem(keyIndex);
		debouncedScrollToFeature(keyIndex);
	};

	return (
		<div className="glossary-index">
			<ul className="glossary-index__keys">
				{Object.keys(glossaryIndex).map((key) => (
					<li key={key}>
						<div className="glossary-index__title title is-5">{key}</div>
						<ul className="glossary-index__list" ref={glossaryIndexRef}>
							{glossaryIndex[key].map((glossary, index) => {
								const keyIndex = key + index;
								return (
									glossary && (
										<li
											key={keyIndex}
											onClick={() => {
												handleFeatureClick(keyIndex);
											}}
											onKeyUp={(e) => {
												if (e.keyCode === 32) {
													handleFeatureClick(keyIndex);
												}
											}}
											role="presentation"
											className={keyIndex === activeItem ? 'glossary-index__feature--active' : ''}
										>
											{glossary.title}
										</li>
									)
								);
							})}
						</ul>
					</li>
				))}
			</ul>
			<div className="glossary-index__info" ref={blocksRef}>
				{Object.keys(glossaryIndex).map((key) =>
					glossaryIndex[key].map((item, index) => {
						const keyIndex = key + index;

						return (
							item && (
								<div
									className={`glossary-index__info-block ${
										keyIndex === activeItem ? 'glossary-index__info-block--active' : ''
									}`}
									key={keyIndex}
									id={keyIndex}
								>
									<Title tag="h2" isSize={4}>
										{item.title}
									</Title>

									{item.info.includes('[LINK]') ? (
										<p>
											{item.info.split('[LINK]').map((part, index, array) => (
												<React.Fragment key={index}>
													{part}
													{index !== array.length - 1 && (
														<a href={item.link.url}>{item.link.name}</a>
													)}
												</React.Fragment>
											))}
										</p>
									) : (
										<p>{item.info}</p>
									)}
								</div>
							)
						);
					})
				)}
			</div>
		</div>
	);
}
