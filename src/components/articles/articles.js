import * as React from 'react';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { Container } from 'bloomer';
import { useStaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';
import './articles.scss';

export default function Articles({ articlesArray }) {
	const singleArticle = articlesArray.map((blog, index) => {
		const image = getImage(blog.frontmatter.Image01);

		return (
			<Link className="articles__link-wrapper" to={'/blogs/' + blog.frontmatter.slug} key={blog.id}>
				<div className="article__image">
					<GatsbyImage key={index} className="image" alt="df" image={image} />
				</div>
				<h3>{blog.frontmatter.title}</h3>
			</Link>
		);
	});

	return <div className="articles__container">{singleArticle}</div>;
}
