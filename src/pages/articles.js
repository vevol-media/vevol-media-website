import * as React from 'react';
import Layout from '../components/layout/layout';
import SlimHero from '../components/slim-hero/slim-hero';
import { Container } from 'bloomer';
import { useStaticQuery, graphql } from 'gatsby';

export const query = graphql`
	query BlogsPage {
		allMarkdownRemark {
			nodes {
				frontmatter {
					stack
					title
					slug
				}
				id
			}
		}
	}
`;

export default function Articles({ data }) {
	const articles = data.allMarkdownRemark.nodes;
	console.log('data', articles);
	return <div>BLOGS</div>;
}
