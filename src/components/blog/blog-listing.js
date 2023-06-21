import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Button } from 'bloomer/lib/elements/Button';
import './blog-listing.scss';
import Label from '../label/label';

export default function BlogListing({ article, index, display, popular }) {
	const className = `blog-listing blog-listing--${display} ${popular ? 'blog-listing--popular' : ''} ${display === 'vertical' && `blog-listing__${index}`}`;
	return (
		<>
			<Link to={`/blog/${article.slug}`} key={index} className={className}>
				<div className="blog-listing__image">
					<GatsbyImage alt={`${article.type.title}`} image={article.featuredImage.gatsbyImageData} className="blog-listing__image" />
					{display === 'vertical' && <Label text={article.type.title} colorScheme="black" />}
				</div>
				<div className="blog-listing__content">
					{display !== 'vertical' && <Label text={article.type.title} colorScheme={popular ? 'white' : 'black'} />}
					{!popular && <p className="blog-listing__date">{article.publishedDate}</p>}
					<h2 className="blog-listing__title title is-5">{article.title}</h2>
					{!popular && <p className="blog-listing__intro">{article.intro.intro}</p>}
					{!popular && <Button className="vm-button vm-button--small vm-button--underline">Read more</Button>}
				</div>
			</Link>
		</>
	);
}
