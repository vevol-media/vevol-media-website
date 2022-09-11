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
		currentProject: allFile(filter: { relativeDirectory: { eq: "case-studies/verlin" } }) {
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
	const otherProjects = portfolio.filter((item) => item.name !== 'Verlin');

	return (
		<Layout headerBg="white">
			<Helmet>
				<title>Verlin - Shopify Migration from OpenCart</title>
				<meta
					name="description"
					content="We successfully migrated from OpenCart to Shopify, including orders, customers and products. We created and implemented a bespoke Shopify design."
				/>
			</Helmet>
			<SlimHero
				heading="Verlin - Shopify Migration from OpenCart"
				subheading="Data Migration, Design & Web Development, Custom Pages and Ongoing Maintenance."
				backgroundWhite
				hideBlob
			/>
			<GatsbyImage
				image={getImageByName(currentProject.nodes, 'hero')}
				alt={'Featured Project - Verlin Romania - Vevol Media'}
				loading="lazy"
			/>
			<VevolSection backgroundColour={'grey'}>
				<Container>
					<a
						className="mb-3 is-inline-block"
						href={'https://www.verlin.ro/'}
						target={'_blank'}
						rel="noreferrer"
					>
						See Live Website <FontAwesomeIcon icon={faExternalLinkAlt} />
					</a>
					<Title tag="h2" isSize={4}>
						Project Intro
					</Title>
					<p className="mt-5">
						The Romanian market is saturated with healthy product suppliers, and Verlin needed to find a way
						to stand out from the crowd. Furthermore, as he wanted to do a complete rebranding, the website
						needed a new, fresh look. So, alongside our designer, we created a beautiful Figma design that
						we later implemented in the store.
					</p>
				</Container>
			</VevolSection>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<SidebarInfoText
						sidebarContent={[
							{
								title: 'Services',
								text: 'Shopify Migration, Design & Theme Development',
							},
							{
								title: 'Tools & Technologies',
								text: 'Figma, Liquid, Javascript, Web Components, CSS (Sass), EmailJS, Github, Shopify CLI',
							},
						]}
						mainContent={[
							{
								title: 'Goals & Results',
								text: 'As Verlin is a pioneer, being the first brand to bring Superfoods to Romania, the website needed to be flawless. We optimised the purchasing process, the product discovery and made information easily accessible to the user. Speed and SEO were essential as well, so we made sure to optimise the website from all points of view.',
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
				alt={'Verlin Featured Project Goals'}
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
