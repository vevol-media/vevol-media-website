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
		currentProject: allFile(filter: { relativeDirectory: { eq: "case-studies/tas-solutions" } }) {
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
	const otherProjects = portfolio.filter((item) => item.name !== 'TAS Solutions');

	return (
		<Layout headerBg="white">
			<Helmet>
				<title>TAS Solutions - Custom Brochure Website</title>
				<meta
					name="description"
					content="Custom built GatsbyJS & ReactJS brochure website. Fast loading times and high usability were key factors in the development process."
				/>
			</Helmet>
			<SlimHero
				heading="TAS Solutions - GatsbyJS Custom Brochure Website"
				subheading="ReactJS based framework, GatsbyJS enabled instant loading speed for this type of website."
				backgroundWhite
				hideBlob
			/>
			<GatsbyImage
				image={getImageByName(currentProject.nodes, 'hero')}
				alt={'Featured Project - TAS Solutions - Vevol Media'}
				loading="lazy"
			/>
			<VevolSection backgroundColour={'grey'}>
				<Container>
					<a
						className="mb-3 is-inline-block"
						href={'https://www.tassolutions-recruit.co.uk/'}
						target={'_blank'}
						rel="noreferrer"
					>
						See Live Website <FontAwesomeIcon icon={faExternalLinkAlt} />
					</a>
					<Title tag="h2" isSize={4}>
						Project Intro
					</Title>
					<p className="mt-5">
						We have been approached by tech savvy TAS Solutions directors to build a custom coded website.
						Knowing that this approach will yield much better PageSpeed results, GatsbyJS was suggested and
						immediately adopted by TAS. The whole project was finished within a month and results were
						greatly appreciated.
					</p>
				</Container>
			</VevolSection>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<SidebarInfoText
						sidebarContent={[
							{
								title: 'Services',
								text: 'Bespoke Development',
							},
							{
								title: 'Tools & Technologies',
								text: 'GatsbyJS, ReactJS, EmailJS',
							},
						]}
						mainContent={[
							{
								title: 'Goals & Results',
								text: 'The main objective was to deliver a website that would be neat, fast and would stand out next to the competitors. We are proud that we met the expectations and the project was finished in time and within budget.',
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
