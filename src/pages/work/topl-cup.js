import React from 'react';
import { graphql } from 'gatsby';
import portfolio from '../../enums/portfolio';
import Layout from '../../components/layout/layout';
import SlimHero from '../../components/slim-hero/slim-hero';
import { Container, Title } from 'bloomer';
import { GatsbyImage } from 'gatsby-plugin-image';
import { getImageByName } from '../../helpers/helpers';
import VevolSection from '../../components/general-components/vm-section';
import SidebarInfoText from '../../components/general-components/sidebar-info-text';
import Quote from '../../components/general-components/quote';
import SimpleImageCarousel from '../../components/simple-image-carousel/simple-image-carousel';
import HeadingBlock from '../../components/heading-block/heading-block';
import PortfolioCarousel from '../../components/portfolio-carousel/portfolio-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

export const data = graphql`
	query {
		currentProject: allFile(filter: { relativeDirectory: { eq: "case-studies/topl" } }) {
			nodes {
				name
				childImageSharp {
					gatsbyImageData(
						placeholder: BLURRED
						blurredOptions: { width: 125 }
						quality: 100
						layout: FULL_WIDTH
					)
				}
			}
		}
		allPortfolio: allFile(filter: { relativeDirectory: { eq: "portfolio-featured-images" } }) {
			nodes {
				name
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, width: 450, quality: 100)
				}
			}
		}
	}
`;

export default function PortfolioPage({ data }) {
	const { currentProject, allPortfolio } = data;
	const projectCarouselImages = currentProject.nodes.filter((image) => image.name.includes('carousel'));
	const otherProjects = portfolio.filter((item) => item.name !== 'TOPL Cup');

	return (
		<Layout headerBg="white">
			<SlimHero
				heading="TOPL Cup - Trademark for quality"
				subheading="Shopify theme development, custom functionalities and components, cup personalisation and ongoing maintenance."
				backgroundWhite
				hideBlob
			/>
			<GatsbyImage
				image={getImageByName(currentProject.nodes, 'hero')}
				alt={'A&S Market Case Study - Vevol Media'}
				loading="lazy"
			/>
			<VevolSection backgroundColour={'grey'}>
				<Container>
					<a
						className="mb-3 is-inline-block"
						href={'https://www.toplcup.com/'}
						target={'_blank'}
						rel="noreferrer"
					>
						See Live Website <FontAwesomeIcon icon={faExternalLinkAlt} />
					</a>
					<Title tag="h2" isSize={4}>
						Project Intro
					</Title>
					<p className="mt-5">
						We've been working with TOPL for 2 years and we've achieved extraordinary things together. We
						updated their theme from a Shopify Template to a custom theme built by us from scratch. We also
						created a Personalisation component, where customers would be able to engrave the cup and make
						it their own. The new tool also acts as a B2B tool, where customers can add their logo and buy
						cups in bulk.
					</p>
				</Container>
			</VevolSection>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<SidebarInfoText
						sidebarContent={[
							{
								title: 'Services',
								text: 'Design, Shopify Theme Development, CRO, Custom Integrated Functionalities',
							},
							{
								title: 'Tools & Technologies',
								text: 'Figma, Liquid, Javascript, Web Components, CSS (Sass), Hubspot, Github, Shopify CLI',
							},
						]}
						mainContent={[
							{
								title: 'Goals & Results',
								text: 'Our goals were to improve the conversion rate while also standing out from the competition. The best way to do so was to start with a comprehensive web audit based on heatmaps and user interaction with the website.',
							},
							{
								text: "We also revamped the Product Page by including more sections to enrich the user experience, such as UGC content, lifestyle imageries and customer reviews for social proof. Our collaboration is continuous, as we're constantly adding new features to the store.",
							},
						]}
					/>
				</Container>
			</VevolSection>
			<Quote
				firstPart={`We find their yes-can-do attitude impressive.`}
				secondPart={`After launching our site for a week, our conversion rate has doubled. We have received great feedback on the UX and look & feel of the website. Amazing work!`}
				authorName={`Sarah Liu`}
				authorRole={`CMO, TOPL Limited`}
			/>
			<VevolSection>
				<Container>
					<SimpleImageCarousel imagesArray={projectCarouselImages} className="mb-5" />
				</Container>
			</VevolSection>
			<GatsbyImage
				width={`500px`}
				image={getImageByName(currentProject.nodes, 'bottom')}
				alt={'TOPL Cup Featured Project Goals'}
			/>
			<VevolSection backgroundColour={'white'}>
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
