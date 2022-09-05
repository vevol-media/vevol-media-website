import React from 'react';
import { CardImage } from 'bloomer';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../../components/layout/layout';
import SlimHero from '../../components/slim-hero/slim-hero';
import InformationalContent from '../../components/general-components/informational-content';
import SidebarInfoText from '../../components/general-components/sidebar-info-text';
import SimpleImageCarousel from '../../components/simple-image-carousel/simple-image-carousel';
import PortfolioCarousel from '../../components/portfolio-carousel/portfolio-carousel';
import { getImageByName } from '../../helpers/helpers';
import Quote from '../../components/general-components/quote';
import portfolio from '../../enums/portfolio';

export const data = graphql`
	query {
		currentProject: allFile(filter: { relativeDirectory: { eq: "case-studies/margee" } }) {
			nodes {
				name
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 })
				}
			}
		}
		allPortfolio: allFile(filter: { relativeDirectory: { eq: "portfolio-featured-images" } }) {
			nodes {
				name
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, width: 750)
				}
			}
		}
	}
`;

export default function MargeeCaseStudy({ data }) {
	const { currentProject, allPortfolio } = data;
	const projectCarouselImages = currentProject.nodes.filter((image) => image.name.includes('carousel'));
	const otherProjects = portfolio.filter((item) => item.name !== 'Margee');

	return (
		<Layout headerBg="white">
			<SlimHero
				heading="Margee Shopify Store"
				subheading="Branding, Email &amp; Marketing, Website Development"
				backgroundWhite
				hideBlob
			/>
			<CardImage>
				<GatsbyImage
					image={getImageByName(currentProject.nodes, 'hero')}
					alt={'Margee Case Study - Vevol Media'}
				/>
			</CardImage>
			<SidebarInfoText
				backgroundWhite
				sidebarContent={[
					{
						title: 'Services',
						text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
					},
					{
						title: 'Industry',
						text: 'Micromobility',
					},
				]}
				mainContent={[
					{
						title: 'Overview',
						text: 'Is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
					},
					{
						text: 'Contrary to popular belief, Lorem Ipsum is not simply random. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
					},
				]}
			/>
			<Quote
				firstPart={`Vevol Media were amazing!`}
				secondPart={`Not only they took care of the project A to Z but they continue offering monthly quality maintenance.`}
				authorName={`Richard Gere`}
				authorRole={`CEO, Margee`}
			/>
			<SimpleImageCarousel imagesArray={projectCarouselImages} />
			<SidebarInfoText
				backgroundWhite
				sidebarContent={[
					{
						title: 'Tools',
						text: 'Facebook Ads, Google Adds, Figma, Instagram',
					},
				]}
				mainContent={[
					{
						title: 'Goals',
						text: 'Is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
					},
					{
						text: 'Contrary to popular belief, Lorem Ipsum is not simply random. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
					},
				]}
			/>
			<InformationalContent
				featuredImage={
					<GatsbyImage
						width={`500px`}
						image={getImageByName(currentProject.nodes, 'bottom')}
						alt={'Margee Case Study - Results &amp; Impact'}
					/>
				}
				title={'Results & Impact'}
				description={
					'Is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout'
				}
				blocks={[
					{
						title: 'Increase rate',
						text: '4.00%',
					},
					{
						title: 'Increase rate',
						text: '4.00%',
					},
					{
						title: 'Increase rate',
						text: '4.00%',
					},
				]}
			/>
			<PortfolioCarousel projectsList={otherProjects} imagesData={allPortfolio.nodes} backgroundWhite />
		</Layout>
	);
}
