import React from 'react';
import { Title } from 'bloomer';
import { Fade } from 'react-reveal';
import { Link } from 'gatsby';
import { sendEventConversionAPI } from '../../helpers/helpers';

export default function HeadingBlock({
	title,
	subtitle,
	highlightedWord,
	alignRight,
	className,
	ctaText,
	ctaUrl,
	ctaIsExternal,
	sendConversionEvent,
	conversionEventName,
}) {
	const insertSpan = (string, highlightedWord) => {
		return string.split(' ').map((word, index) => {
			return (
				<React.Fragment key={index}>{word === highlightedWord ? <span>{word}</span> : word} </React.Fragment>
			);
		});
	};

	return (
		<div
			className={`heading-block ${alignRight ? 'heading-block--align-right' : ''} ${className ? className : ''}`}
		>
			<Fade bottom>
				<Title tag="h2" isSize={1} className={`${subtitle ? 'mb-3' : ''}`}>
					{insertSpan(title, highlightedWord)}
				</Title>
			</Fade>
			{subtitle && (
				<Fade bottom delay={100}>
					<p>{subtitle}</p>
				</Fade>
			)}
			{ctaText && (
				<Fade bottom delay={200}>
					{ctaIsExternal ? (
						<a
							href={ctaUrl}
							onClick={(e) => {
								if (sendConversionEvent) {
									e.preventDefault(); 
									sendEventConversionAPI(conversionEventName);

									
									setTimeout(() => {
										window.location.href = ctaUrl;
									}, 300);
								}
							}}
							className="vm-button vm-button--black vm-button--big mt-6"
						>
							{ctaText}
						</a>
					) : (
						<Link
							to={ctaUrl}
							onClick={(e) => {
								if (sendConversionEvent) {
									e.preventDefault(); 
									sendEventConversionAPI(conversionEventName);

									setTimeout(() => {
										window.location.href = ctaUrl;
									}, 300);
								}
							}}
							className="vm-button vm-button--black vm-button--big mt-6"
						>
							{ctaText}
						</Link>
					)}
				</Fade>
			)}
		</div>
	);
}
