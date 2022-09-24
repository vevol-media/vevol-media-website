import React from 'react';
import { BgImage } from 'gbimage-bridge';
import { Title } from 'bloomer/lib/elements/Title';
import { Link } from 'gatsby';
import './homepage-articles.scss';

export default function HomepageArticles({ blogPosts }) {
	return (
		<>
			<div className="homepage-articles">
				{blogPosts.map((article, index) => (
					<Link to={`/blog/${article.slug}`} key={index}>
						<BgImage image={article.featuredImage.gatsbyImageData} className="hp-article__image"></BgImage>

						<div className="hp-article__info">
							<p className="hp-article__type">{article.type.title}</p>
							<p className="hp-article__date">{article.publishedDate}</p>
							<Title tag="h3" isSize={5}>
								{article.title}
							</Title>
							<p className="hp-article__intro">{article.intro.intro}</p>
							<span className="vm-button vm-button--green vm-button--small">Read More</span>
						</div>
					</Link>
				))}
			</div>
			<div className="homepage-articles-bottom">
				<Link to="/blog" className="vm-button vm-button--black-transparent">
					See All Articles
				</Link>
			</div>
		</>
	);
}
