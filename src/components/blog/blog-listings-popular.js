import React from 'react';
import { Container } from 'bloomer';
import BlogListing from './blog-listing.js';
import VevolSection from '../general-components/vm-section.js';

export default function BlogListingsPopular({ articles }) {
	return (
		<VevolSection className={'blog-listings__popular-section'}>
			<Container>
				<h2 className="title is-3 mb-2em">MOST POPULAR POSTS</h2>
				<div className="blog-listings__popular-flex">
					{articles.map((article, index) => (
						<BlogListing key={index} article={article.node} display="horizontal" index={index} popular="true" />
					))}
				</div>
			</Container>
		</VevolSection>
	);
}
