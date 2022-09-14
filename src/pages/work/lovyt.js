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
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

export const data = graphql`
	query {
		currentProject: allFile(filter: { relativeDirectory: { eq: "case-studies/lovyt" } }) {
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
	const otherProjects = portfolio.filter((item) => item.name !== 'Lovyt');

	return (
		<Layout headerBg="white">
			<Helmet>
				<title>Lovyt Activewear - Shopify Store Setup & Launch</title>
				<meta
					name="description"
					content="Fast Squarespace to Shopify migration with an eye-catching, sleek and clean design and a website with all functionalities ready for use."
				/>
			</Helmet>
			<SlimHero
				heading="Lovyt Activewear - Shopify Store Setup & Launch"
				subheading="Squarespace to Shopify, Quick Launch, Storytelling Website"
				backgroundWhite
				hideBlob
			/>
			<GatsbyImage
				image={getImageByName(currentProject.nodes, 'hero')}
				alt={'Featured Project - Lovyt Activewear - Vevol Media'}
				loading="lazy"
			/>
			<VevolSection backgroundColour={'grey'}>
				<Container>
					<a
						className="mb-3 is-inline-block"
						href={'https://www.lovyt.com'}
						target={'_blank'}
						rel="noreferrer"
					>
						See Live Website <FontAwesomeIcon icon={faExternalLinkAlt} />
					</a>
					<Title tag="h2" isSize={4}>
						Project Intro
					</Title>
					<p className="mt-5">
						As Lovyt Activewear started to gain more influence in the market, its owner decided to open a
						physical store in Texas. As the location was ready to open, we needed to work quickly to launch
						the website on the same day as the opening day. We migrated the store from Squarespace to
						Shopify in less than two weeks and delivered an eye-catching, sleek, clean website with all
						functionalities ready for use.
					</p>
				</Container>
			</VevolSection>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<SidebarInfoText
						sidebarContent={[
							{
								title: 'Services',
								text: 'Shopify Store Setup & Customisation, Shopify POS Setup',
							},
							{
								title: 'Tools & Technologies',
								text: 'Figma, Liquid, Javascript, Web Components, CSS (Sass), EmailJS, Github, Shopify CLI',
							},
						]}
						mainContent={[
							{
								title: 'Goals & Results',
								text: "We worked on a beautiful Shopify theme (Split by KrownThemes). Regarding the website's overall look, we fine-tuned it using its existing sections, optimised the imagery and wrote powerful copy. With Shopify POS, we linked their physical store to the online store so that all important data would be kept in the same place, like analytics, inventory and customers.",
							},
						]}
					/>
				</Container>
			</VevolSection>
			<Quote
				firstPart={`We're most impressed with their web customisation skills`}
				secondPart={`There has been excellent communication from the team, and they are true experts in their field of work. Overall, we've enjoyed working with them.`}
				authorName={`Prasad Rangappa`}
				authorRole={`CEO, Responsible Brands`}
			/>
			<VevolSection>
				<Container>
					<SimpleImageCarousel imagesArray={projectCarouselImages} className="mb-5" />
				</Container>
			</VevolSection>
			<GatsbyImage
				width={`500px`}
				image={getImageByName(currentProject.nodes, 'bottom')}
				alt={'Lovyt Featured Project Goals'}
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
