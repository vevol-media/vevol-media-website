import React, { useState } from 'react';
import './blog-listings.scss';
import BlogListingsFeatured from './blog-listings-featured';
import BlogListingsNormalDisplay from './blog-listings-normal-display';

export default function BlogListings({ listings }) {
	const [articles, setArticles] = useState(listings);
	const [activeFilter, setActiveFilter] = useState('all');
	const filtersList = [...new Set(listings.map((article) => article.node.type.title))].sort();
	return (
		<>
			<ul className="blog-listings-filters">
				<li
					className={activeFilter === 'all' ? 'active' : ''}
					onClick={(e) => {
						setActiveFilter('all');
						setArticles(listings);
					}}
					onKeyUp={(e) => {
						if (e.keyCode === 32) {
							setActiveFilter('all');
							setArticles(listings);
						}
					}}
					role="presentation"
				>
					{'All'}
				</li>
				{filtersList.map((filter, index) => (
					<li
						key={index}
						className={filter === activeFilter ? 'active' : ''}
						onClick={(e) => {
							setActiveFilter(filter);
							setArticles(listings.filter((article) => article.node.type.title === filter));
						}}
						onKeyUp={(e) => {
							if (e.keyCode === 32) {
								setActiveFilter(filter);
								setArticles(listings.filter((article) => article.node.type.title === filter));
							}
						}}
						role="presentation"
					>
						{filter}
					</li>
				))}
			</ul>

			{articles.length > 4 ? (
				<>
					<BlogListingsFeatured articles={articles.slice(0, 5)} />
					<BlogListingsNormalDisplay articles={articles.slice(5)} />
				</>

			) : (
				<BlogListingsNormalDisplay articles={articles} />
			)}
		</>
	);
}
