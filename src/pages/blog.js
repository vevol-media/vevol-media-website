import Layout from '../components/layout/layout';
import React from 'react';
import SlimHero from '../components/slim-hero/slim-hero';
import { Container } from 'bloomer';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import VevolSection from '../components/general-components/vm-section';
import BlogListings from '../components/blog/blog-listings';

export const data = graphql`
	query {
		blogPosts: allContentfulBlogPost(sort: { order: DESC, fields: publishedDate }) {
			nodes {
				title
				publishedDate(formatString: "DD MMM YYYY")
				intro {
					intro
				}
				type {
					title
				}
				slug
				featuredImage {
					gatsbyImageData(placeholder: TRACED_SVG, width: 500, quality: 100, layout: FULL_WIDTH)
				}
			}
		}
	}
`;

export default function Page({ data }) {
	const { blogPosts } = data;

	return (
		<Layout>
			<Helmet>
				<title>Read More in the Vevol Media Blog</title>
				<meta
					name="description"
					content="Get the latest updates about Vevol Media or read more about our journey, our thoughts and us sharing valuable knowledge within the community."
				/>
			</Helmet>
			<SlimHero
				heading="The Vevol Media Blog"
				subheading="Get the latest updates about Vevol Media or read more about our journey, our thoughts and us sharing valuable knowledge within the community."
			/>
			<VevolSection backgroundColour={'white'}>
				<Container>
					{blogPosts.nodes.length === 0 && <p>No blog posts yet. Watch this space!</p>}
					{blogPosts.nodes.length > 0 && <BlogListings listings={blogPosts.nodes} />}
				</Container>
			</VevolSection>
		</Layout>
	);
}