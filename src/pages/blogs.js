import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import SlimHero from '../components/slim-hero/slim-hero';
import Articles from '../components/articles/articles';
import { Container } from 'bloomer';

export default function Blogs({ data }) {
	const articlesArray = data.allMarkdownRemark.nodes;

	return (
		<Layout>
			<SlimHero heading="Blogs" subheading="A wide range of articles." />
			<div className="vm-section vm-bg--white">
				<Container>
					<Articles articlesArray={articlesArray} />
				</Container>
			</div>
		</Layout>
	);
}

export const query = graphql`
	query BlogsPage {
		allMarkdownRemark(filter: {}, sort: { fields: frontmatter___date, order: ASC }) {
			nodes {
				html
				frontmatter {
					date
					slug
					title
					Image01 {
						childImageSharp {
							gatsbyImageData(placeholder: BLURRED, transformOptions: { cropFocus: CENTER })
						}
					}
				}
				id
			}
		}
	}
`;
