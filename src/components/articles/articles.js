import * as React from 'react';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { Container } from 'bloomer';
import { useStaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';

export default function Articles({articlesArray }) {
    console.log('art', articlesArray)

const singleArticle = articlesArray.map((blog, index) => {
		const image = getImage(blog.frontmatter.Image01);

		return (
			<Link to={'/blogs/' + blog.frontmatter.slug} key={blog.id}>
				<div>
					{/* <GatsbyImage key={index} className="image" alt="df" image={image} /> */}
					<h3>{blog.frontmatter.title}</h3>
				</div>
			</Link>
		);
	});

	return (

			<div>{singleArticle}</div>

	);
}