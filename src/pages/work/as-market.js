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
		currentProject: allFile(filter: { relativeDirectory: { eq: "case-studies/asmarket" } }) {
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
	const otherProjects = portfolio.filter((item) => item.name !== 'A&S Market');

	return (
		<Layout headerBg="white">
			<SlimHero
				heading="A&S Market - Online Groceries Shop"
				subheading="Custom Shopify theme development, bespoke functionalities for Postcode checker and delivery, SEO, CRO and ongoing maintenance."
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
						href={'https://www.asmarket.co.uk'}
						target={'_blank'}
						rel="noreferrer"
					>
						See Live Website <FontAwesomeIcon icon={faExternalLinkAlt} />
					</a>
					<Title tag="h2" isSize={4}>
						About the brand
					</Title>
					<p className="mt-5">
						A&S Market is a specialized grocery shop serving a large number of Romanian expats in the United
						Kingdom. Having found success offline, moving online was a no-brainer and proved to be highly
						successful, with the launch having a significant impact in the area, especially during the
						Coronavirus lockdowns.
					</p>
					<p className="mt-5">
						Our main goal for this project is to create a web presence for the well-established local shop,
						develop new routes to existing customers and reach new ones in the process.
					</p>
				</Container>
			</VevolSection>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<SidebarInfoText
						sidebarContent={[
							{
								title: 'Services',
								text: 'Shopify Theme Development, SEO, CRO, Ongoing Maintenance',
							},
							{
								title: 'Tools & Technologies',
								text: 'Figma, Liquid, Javascript, Web Components, CSS (Sass), Github, Shopify CLI',
							},
						]}
						mainContent={[
							{
								title: 'Goals & Results',
								text: "We've been working with A&S Market for over 2 years, and the website has seen quite a few changes. As they are recurring customers, we have the opportunity to make continuous improvements to the store to enhance the user experience and increase conversion rate.",
							},
							{
								text: 'We work closely alongside our client and make periodic audits based on heatmaps and website analysis. We design and develop with the target customer in mind: knowledgeable, savvy shoppers. Eliminating complexity from the process was essential as conversion needs to be quick and transform the visitor into a payable customer within minutes.',
							},
						]}
					/>
				</Container>
			</VevolSection>
			<Quote
				firstPart={`Professional, hardworking, and dedicated.`}
				secondPart={`Our website is now among the top 5% of popular marketplace sites. I am very happy with Vevol Media, and I don’t intend to change providers.`}
				authorName={`Stefan Munteanu`}
				authorRole={`Director, A&S Market`}
			/>
			<VevolSection>
				<Container>
					<SimpleImageCarousel imagesArray={projectCarouselImages} className="mb-5" />
				</Container>
			</VevolSection>
			<GatsbyImage
				width={`500px`}
				image={getImageByName(currentProject.nodes, 'bottom')}
				alt={'A&S Market Case Study - Results &amp; Impact'}
				loading="lazy"
			/>
			<VevolSection backgroundColour={'grey'}>
				<Container>
					<Title tag="h2" isSize={4}>
						Result and Impact
					</Title>
					<p className="mt-5">
						We worked on new landing pages to showcase national delivery, custom coded with new sections
						that are customisable by the client directly from the Shopify Customiser. In addition, the
						sections are modular, meaning they’re reusable on any other page on the website.
					</p>
					<p className="mt-5">
						As A&S Market wants to showcase some of the benefits of shopping with them, we added incentive
						sections to the product page to explain how products are packed and shipped. This is very
						important to them as most products are fragile, and some need to be transported in special
						cooling containers. An estimated delivery time based on the buyer’s location has also been added
						to the product page, as customers are more likely to purchase with a due date in mind.
					</p>
					<p className="mt-5">
						A critical component all grocery stores need to have is excellent searching. By installing and
						configuring the Product Filter and Search Bar app, we managed to reduce the number of searches
						that led to no results to a minimum.
					</p>
					<p className="mt-5">
						Speaking of important website components, an essential feature is also good filtering. By
						creating custom filters based on tags, the user’s experience has been enhanced both on mobile
						and desktop. As a result, we have seen an increase of 67% in customers using filters after
						they’ve been optimized.
					</p>
					<p className="mt-5">
						We also act as virtual assistants, so we manage product imports and exports, website
						translations, copywriting both in Romanian and English, email marketing campaigns and custom
						design for various graphic materials.
					</p>
				</Container>
			</VevolSection>
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
