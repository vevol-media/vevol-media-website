import Layout from '../components/layout/layout';
import React from 'react';
import SlimHero from '../components/slim-hero/slim-hero';
import { Container } from 'bloomer';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import VevolSection from '../components/general-components/vm-section';
import BlogListings from '../components/blog/blog-listings';

export const data = graphql`
	query ($authorName: String!) {
		blogPosts: allContentfulBlogPost(filter: { author: { name: { eq: $authorName } } }) {
			edges {
				node {
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
						gatsbyImageData(placeholder: DOMINANT_COLOR, width: 500, quality: 100, layout: FULL_WIDTH)
					}
				}
				previous {
					slug
				}
				next {
					slug
				}
			}
		}
	}
`;

export default function AuthorArticles(props) {
	const { blogPosts } = props.data;
	const author = props.pageContext.authorName;

	return (
		<Layout>
			<Helmet>
				<title>{`Read all articles written by ${author}`}</title>
				<meta
					name="description"
					content={`Articles written by ${author}. Get the latest updates about Vevol Media or read more about our journey, our thoughts and us sharing valuable knowledge within the community.`}
				/>
			</Helmet>
			<SlimHero
				heading={`Read all articles written by ${author}`}
				subheading="Get the latest updates about Vevol Media or read more about our journey, our thoughts and us sharing valuable knowledge within the community."
			/>
			<VevolSection backgroundColour={'white'}>
				<Container>
					{blogPosts.edges.length === 0 && <p>No blog posts yet. Watch this space!</p>}
					{blogPosts.edges.length > 0 && <BlogListings listings={blogPosts.edges} />}
				</Container>
			</VevolSection>
		</Layout>
	);
}
