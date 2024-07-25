import Layout from '../components/layout/layout';
import React from 'react';
import SlimHero from '../components/slim-hero/slim-hero';
import { Container } from 'bloomer';
import { graphql } from 'gatsby';
import VevolSection from '../components/general-components/vm-section';
import BlogListings from '../components/blog/blog-listings';

export const data = graphql`
	query {
		blogPosts: allContentfulBlogPost(sort: { order: DESC, fields: publishedDate }) {
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
					popularArticle
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

export default function Page({ data }) {
	const { blogPosts } = data;
	const first3PopularArticles = blogPosts.edges.filter((post) => post.node.popularArticle === true).slice(0, 3);
	const otherArticles = blogPosts.edges.filter((post) => !first3PopularArticles.includes(post));

	return (
		<Layout handle="blog">
			<SlimHero heading="The Vevol Media Blog" subheading="Get the latest updates about Vevol Media or read more about our journey, our thoughts and us sharing valuable knowledge within the community." />
			<VevolSection backgroundColour={'white'}>
				{blogPosts.edges.length === 0 && (
					<Container>
						<p>No blog posts yet. Watch this space!</p>
					</Container>
				)}
				{blogPosts.edges.length > 0 && <BlogListings listings={otherArticles} popular={first3PopularArticles} />}
			</VevolSection>
		</Layout>
	);
}
