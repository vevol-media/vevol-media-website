import React from 'react';
import BlogListing from './blog-listing.js';

export default function BlogListingsFeatured({ articles }) {
	return (
		<div className="blog-listings__featured">
			{articles.map((article, index) => (
				<BlogListing key={index} article={article.node} display="vertical" index={index} />
			))}
		</div>
	);
}
