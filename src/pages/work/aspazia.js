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
import SimpleImageCarousel from '../../components/simple-image-carousel/simple-image-carousel';
import HeadingBlock from '../../components/heading-block/heading-block';
import PortfolioCarousel from '../../components/portfolio-carousel/portfolio-carousel';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

export const data = graphql`
	query {
		currentProject: allFile(filter: { relativeDirectory: { eq: "case-studies/aspazia" } }) {
			nodes {
				name
				childImageSharp {
					gatsbyImageData(
						placeholder: BLURRED
						blurredOptions: { width: 125 }
						width: 1400
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
	const otherProjects = portfolio.filter((item) => item.name !== 'Aspazia');

	return (
		<Layout headerBg="white">
			<Helmet>
				<title>Aspazia - Wordpress Woocommerce Print On Demand Store</title>
				<meta
					name="description"
					content="Wordpress Woocommerce store setup with Inkthreadable Print On Demand Service integration."
				/>
			</Helmet>
			<SlimHero
				heading="Aspazia - Wordpress Woocommerce Print On Demand Store"
				subheading="Wordpress Woocommerce store setup with Inkthreadable Print On Demand Service integration."
				backgroundWhite
				hideBlob
			/>
			<GatsbyImage
				image={getImageByName(currentProject.nodes, 'hero')}
				alt={'Featured Project - Aspazia UK - Vevol Media'}
				loading="lazy"
			/>
			<VevolSection backgroundColour={'grey'}>
				<Container>
					<a
						className="mb-3 is-inline-block"
						href={'https://www.aspazia.co.uk'}
						target={'_blank'}
						rel="noreferrer"
					>
						See Live Website <FontAwesomeIcon icon={faExternalLinkAlt} />
					</a>
					<Title tag="h2" isSize={4}>
						Project Intro
					</Title>
					<p className="mt-5">
						Aspazia has an unique branding and its niche demanded a simple yet comprehensive way to reach
						the audience. An online store based on Woocommerce was requested and implemented. We also worked
						on the website design, product design and custom plugins. We facilitated a seamless
						Inkthreadable setup and integration, alongside with Stripe & Paypal payment processing.
					</p>
				</Container>
			</VevolSection>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<SidebarInfoText
						sidebarContent={[
							{
								title: 'Services',
								text: 'Wordpress Woocommerce Setup, Web Design, Product Design, SEO, Custom Plugins, POD Integration',
							},
							{
								title: 'Tools & Technologies',
								text: 'Photoshop, PHP, Javascript, CSS (Sass)',
							},
						]}
						mainContent={[
							{
								title: 'Goals & Results',
								text: 'The main objective was to get to market fast and collect continous data for future development. With a fresh UX and out of the box product design, we managed to reach our goals within 3 months.',
							},
						]}
					/>
				</Container>
			</VevolSection>
			<VevolSection>
				<Container>
					<SimpleImageCarousel imagesArray={projectCarouselImages} className="mb-5" />
				</Container>
			</VevolSection>
			<GatsbyImage
				width={`500px`}
				image={getImageByName(currentProject.nodes, 'bottom')}
				alt={'Aspazia Featured Project Goals'}
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
