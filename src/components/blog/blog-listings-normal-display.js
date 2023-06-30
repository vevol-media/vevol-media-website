import React from 'react';
import './blog-listings.scss';
import BlogListing from './blog-listing.js';

export default function BlogListingsNormalDisplay({ articles }) {
	return (
		<div className="blog-listings__normal">
			{articles.map((article, index) => (
				<BlogListing key={index} article={article.node} display="horizontal" index={index} />
			))}
		</div>
	);
}
