import React from 'react';
import './blog-quote.scss';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

export default function BlogQuote({ avatar, content, title }) {
	return (
		<div className="blog-quote pb-5 pt-5">
			<div className="blog-quote__image">
				<GatsbyImage
					className="author__avatar"
					alt={`Avatar for quote on ${title}`}
					image={getImage(avatar.gatsbyImageData)}
				/>
			</div>
			<div className="blog-quote__content">&ldquo;{content.description}&rdquo;</div>
		</div>
	);
}
