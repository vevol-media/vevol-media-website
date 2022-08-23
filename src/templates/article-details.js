import React from 'react';
import Layout from '../components/layout/layout';
import SlimHero from '../components/slim-hero/slim-hero';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import { Container } from 'bloomer';
import './article-details.scss';

const ArticleDetails = ({ data }) => {
	const { html } = data.markdownRemark;
	const { title, date } = data.markdownRemark.frontmatter;
	const image = getImage(data.markdownRemark.frontmatter.Image01);

	return (
		<Layout>
			<SlimHero heading={title} />
			<div className="vm-section vm-bg--white">
				<Container className="article-details__container">
					<div className="article-details__img">
						<GatsbyImage className="image" alt="df" image={image} />
					</div>
					<div dangerouslySetInnerHTML={{ __html: html }} />
				</Container>
			</div>
		</Layout>
	);
};

export default ArticleDetails;

export const query = graphql`
	query ProjectDetails($slug: String) {
		markdownRemark(frontmatter: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
				date
				Image01 {
					childImageSharp {
						gatsbyImageData(placeholder: BLURRED, transformOptions: { cropFocus: CENTER })
					}
				}
			}
		}
	}
`;
