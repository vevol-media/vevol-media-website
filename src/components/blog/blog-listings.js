import React, { useState } from 'react';
import './blog-listings.scss';
import BlogListingsFeatured from './blog-listings-featured';
import BlogListingsPopular from './blog-listings-popular';
import BlogListingsNormalDisplay from './blog-listings-normal-display';
import { Container } from 'bloomer';
import VevolSection from '../general-components/vm-section';

export default function BlogListings({ listings, popular }) {
	const [articles, setArticles] = useState(listings);
	const [popularArticles, setPopularArticles] = useState(popular || []);
	const [activeFilter, setActiveFilter] = useState('all');
	const filtersList = [...new Set(listings.map((article) => article.node.type.title))].sort();

	for (let i = 0; i < listings.length; i++) {
		console.log(listings[i].node.publishedDate);
	}
	const handleFilter = (filter) => {
		setActiveFilter(filter);
		setArticles(listings.filter((article) => article.node.type.title === filter));
		setPopularArticles(popular.filter((article) => article.node.type.title === filter));
	};

	return (
		<>
			<Container>
				<ul className="blog-listings-filters">
					<li
						className={activeFilter === 'all' ? 'active' : ''}
						onClick={(e) => {
							setActiveFilter('all');
							setArticles(listings);
							setPopularArticles(popular);
						}}
						onKeyUp={(e) => {
							if (e.keyCode === 32) {
								setActiveFilter('all');
								setArticles(listings);
								setPopularArticles(popular);
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
							onClick={(e) => handleFilter(filter)}
							onKeyUp={(e) => {
								if (e.keyCode === 32) {
									handleFilter(filter);
								}
							}}
							role="presentation"
						>
							{filter}
						</li>
					))}
				</ul>
			</Container>
			<div className="blog-listings">
				{articles.length > 4 ? (
					<>
						<VevolSection backgroundColour={'white'} className="p-0">
							<Container>
								<BlogListingsFeatured articles={articles.slice(0, 5)} />
							</Container>
						</VevolSection>
						{popularArticles.length > 0 && <BlogListingsPopular articles={popularArticles} />}
						<VevolSection backgroundColour={'white'} className="p-0">
							<Container>
								<BlogListingsNormalDisplay articles={articles.slice(5)} />
							</Container>
						</VevolSection>
					</>
				) : (
					<>
						{popularArticles.length > 0 && <BlogListingsPopular articles={popularArticles} />}
						<VevolSection backgroundColour={'white'}>
							<Container>
								<BlogListingsNormalDisplay articles={articles} />
							</Container>
						</VevolSection>
					</>
				)}
			</div>
		</>
	);
}
