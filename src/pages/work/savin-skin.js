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
		currentProject: allFile(filter: { relativeDirectory: { eq: "case-studies/savinskin" } }) {
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
	const otherProjects = portfolio.filter((item) => item.name !== 'SavinSkin');

	return (
		<Layout headerBg="white">
			<Helmet>
				<title>SavinSkin - Shopify Migration from Presta Shop</title>
				<meta
					name="description"
					content="We successfully migrated from Presta Shop to Shopify, created custom components for the new website and integrated 3rd party apps."
				/>
			</Helmet>
			<SlimHero
				heading="SavinSkin - PrestaShop to Shopify Migration"
				subheading="Data Migration, Web Development, Custom Functionalities and Ongoing Maintenance."
				backgroundWhite
				hideBlob
			/>
			<GatsbyImage
				image={getImageByName(currentProject.nodes, 'hero')}
				alt={'Featured Project - Savin Skin - Vevol Media'}
				loading="lazy"
			/>
			<VevolSection backgroundColour={'grey'}>
				<Container>
					<a
						className="mb-3 is-inline-block"
						href={'https://www.savinskin.com'}
						target={'_blank'}
						rel="noreferrer"
					>
						See Live Website <FontAwesomeIcon icon={faExternalLinkAlt} />
					</a>
					<Title tag="h2" isSize={4}>
						Project Intro
					</Title>
					<p className="mt-5">
						Savin' Skin is a very special project to us, as we started with only a handful ideas which
						evolved into a wonderful-looking website. We migrated the store from Presta Shop to Shopify to
						increase conversion rate, attract more users and improve the website's usability. The store is
						now easier to manage by the owner and more friendly to the users.
					</p>
				</Container>
			</VevolSection>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<SidebarInfoText
						sidebarContent={[
							{
								title: 'Services',
								text: 'Shopify Migration, Theme Development, 3rd Party App Integration, Internationalisation',
							},
							{
								title: 'Tools & Technologies',
								text: 'Liquid, Javascript, Web Components, CSS (Sass), TLab, Shopify Markets, Yotpo, Github, Shopify CLI',
							},
						]}
						mainContent={[
							{
								title: 'Goals & Results',
								text: "We wanted to give the website a sleek look but also keep it functional and easy to use. We ensured the new website was as SEO-friendly as possible and worked hard to optimise its speed. We are thrilled with the result, but most importantly, we're happy the owner is satisfied with the website.",
							},
						]}
					/>
				</Container>
			</VevolSection>
			<Quote
				firstPart={`They aren't just contractors — they're part of our team.`}
				secondPart={`The team is part of our process; they're very involved, extremely cooperative, and understand our needs.`}
				authorName={`Ana-Maria Savin`}
				authorRole={`Founder & GM, Savin'Skin`}
			/>
			<VevolSection>
				<Container>
					<SimpleImageCarousel imagesArray={projectCarouselImages} className="mb-5" />
				</Container>
			</VevolSection>
			<GatsbyImage
				width={`500px`}
				image={getImageByName(currentProject.nodes, 'bottom')}
				alt={'SavinSkin Featured Project Goals'}
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
