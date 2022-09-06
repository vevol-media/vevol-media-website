import React from 'react';
import { graphql } from 'gatsby';
import portfolio from '../../enums/portfolio';
import Layout from '../../components/layout/layout';
import SlimHero from '../../components/slim-hero/slim-hero';
import { CardImage, Container } from 'bloomer';
import { GatsbyImage } from 'gatsby-plugin-image';
import { getImageByName } from '../../helpers/helpers';
import VevolSection from '../../components/general-components/vm-section';
import SidebarInfoText from '../../components/general-components/sidebar-info-text';
import Quote from '../../components/general-components/quote';
import SimpleImageCarousel from '../../components/simple-image-carousel/simple-image-carousel';
import InformationalContent from '../../components/general-components/informational-content';
import HeadingBlock from '../../components/heading-block/heading-block';
import PortfolioCarousel from '../../components/portfolio-carousel/portfolio-carousel';

export const data = graphql`
	query {
		currentProject: allFile(filter: { relativeDirectory: { eq: "case-studies/margee" } }) {
			nodes {
				name
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, quality: 100)
				}
			}
		}
		allPortfolio: allFile(filter: { relativeDirectory: { eq: "portfolio-featured-images" } }) {
			nodes {
				name
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, width: 750, quality: 100)
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
			<VevolSection whiteBackground>
				<Container>
					<SidebarInfoText
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
				</Container>
			</VevolSection>
			<Quote
				firstPart={`Vevol Media were amazing!`}
				secondPart={`Not only they took care of the project A to Z but they continue offering monthly quality maintenance.`}
				authorName={`Richard Gere`}
				authorRole={`CEO, Margee`}
			/>
			<VevolSection>
				<Container>
					<SimpleImageCarousel imagesArray={projectCarouselImages} />
				</Container>
			</VevolSection>
			<Container>
				<SidebarInfoText
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
			</Container>
			<VevolSection>
				<Container>
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
				</Container>
			</VevolSection>
			<VevolSection whiteBackground>
				<Container>
					<HeadingBlock
						title={'Our previously successful projects'}
						highlightedWord={'successful'}
						subtitle={'Proven track record of our hard work.'}
						className="mb-4em"
					/>
					<PortfolioCarousel projectsList={otherProjects} imagesData={allPortfolio.nodes} cutBottomPadding />
				</Container>
			</VevolSection>
		</Layout>
	);
}
