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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

export const data = graphql`
	query {
		currentProject: allFile(filter: { relativeDirectory: { eq: "case-studies/hugh" } }) {
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
	const otherProjects = portfolio.filter((item) => item.name !== 'Hugh Maguire');

	return (
		<Layout headerBg="white" handle="hugh-maguire">
			<SlimHero
				heading="Hugh Maguire - WooComerce to Shopify Migration"
				subheading="Read how we migrated an Irish Butchers’ website to Shopify and doubled their sales."
				backgroundWhite
				hideBlob
			/>
			<GatsbyImage
				image={getImageByName(currentProject.nodes, 'hero')}
				alt={'Hugh Maguire Case Study - Vevol Media'}
				loading="lazy"
			/>
			<VevolSection backgroundColour={'grey'}>
				<Container>
					<a
						className="mb-3 is-inline-block"
						href={'https://hughmaguirebutchers.com'}
						target={'_blank'}
						rel="noreferrer"
					>
						See Live Website <FontAwesomeIcon icon={faExternalLinkAlt} />
					</a>
					<Title tag="h2" isSize={4}>
						About the brand
					</Title>
					<p className="mt-5">
						For over 30 years, Hugh Maguire has been a leading figure in the Irish butchering industry. His
						unwavering passion and commitment to his craft have earned him a reputation as a master butcher,
						renowned for the exceptional quality of his products. What sets Hugh apart from his competitors
						is his innate talent for food craftsmanship and his ability to constantly innovate.
					</p>
					<p className="mt-5">
						When Hugh Maguire approached us, they were facing a problem that many businesses can relate to:
						their online presence was lacking. Their website, built on WooCommerce, was not as user-friendly
						as they wanted, and it wasn't driving the sales they desired.
					</p>
					<p className="mt-5">
						They wanted to improve their online presence and take advantage of the features and
						functionality offered by the Shopify platform.
					</p>
				</Container>
			</VevolSection>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<SidebarInfoText
						sidebarContent={[
							{
								title: 'Goals',
								text: 'Seamless migration from Woocommerce to Shopify & Design Revamp',
							},
							{
								title: 'Services',
								text: 'Design, Migration, Support, Development, Ongoing Maintenance',
							},
							{
								title: 'Tools',
								text: 'Figma, Liquid, Javascript, Web Components, CSS (Sass), Github, Shopify CLI',
							},
						]}
						mainContent={[
							{
								title: 'Goals and outcomes',
								text: 'Improve the user experience on the website',
							},
							{
								text: 'Increase conversion rate',
							},
							{
								text: 'Convey brand values through UI/UX design',
							},
							{
								text: 'Proofread website copy',
							},
							{
								text: 'Simplify website maintenance',
							},
							{
								text: 'Improve SEO',
							},
							{
								text: 'Generate more leads using LinkedIn',
							},
						]}
					/>
					<Title tag="h2" isSize={4} className="mt-6">
						Web Design and Development
					</Title>
					<p className="mt-5">
						We knew that in order to achieve Hugh's objectives, we had to start by understanding their
						customers and their business. We began by conducting a thorough analysis of their target
						audience and their needs. This gave us a clear picture of what the new website needed to
						accomplish.
					</p>
					<p className="mt-5">
						With this information, we set out to create a design mockup in Figma that would showcase the
						proposed design changes for the website. The new design was clean, modern, and easy to navigate,
						making it more user-friendly and increasing the chances of conversions.
					</p>
					<p className="mt-5">
						Once the design was approved, we started the migration process. Migrating a website can be a
						daunting task, but our team was up for the challenge. We transferred all the information from
						the WooCommerce website to the Shopify platform, taking care to ensure that all data was
						correctly transferred and that no information was lost.
					</p>
					<p className="mt-5">
						With the migration complete, it was time to implement the new design. We used Shopify{' '}
						<a
							className="is-inline-block"
							href={'https://www.krownthemes.com'}
							target={'_blank'}
							rel="noreferrer"
						>
							Local Theme by KrownThemes
						</a>{' '}
						to customise the design to the butcher's specific needs. The result was a sleek website that was
						not only visually appealing but also functional and easy to navigate.
					</p>
				</Container>
			</VevolSection>
			<VevolSection>
				<Container>
					<SimpleImageCarousel imagesArray={projectCarouselImages} />
				</Container>
			</VevolSection>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<Title tag="h2" isSize={4} className="mt-6">
						Creating a Unique Experience: A Bespoke Website
					</Title>
					<p className="mt-5">
						We didn't stop there. We wanted to give Hugh Maguire’s website an extra edge, so we created a
						Masterclass landing page to promote the butcher's classes and workshops. We also created a
						dedicated page for their Merchandise, as well as an About Us page for their story.
					</p>
					<p className="mt-5">
						We developed a B2B portal with special B2B products and prices, allowing Hugh to offer different
						prices and products to their wholesale customers. This made it easier to serve their wholesale
						customers and helped to increase their sales.
					</p>
					<p className="mt-5">
						To improve the user experience, we reorganised the website structure, making it easier for
						customers to find what they were looking for. The website is also linked to their physical
						store, and users are able to seamlessly purchase items for pick-up on any day they want.
					</p>
					<p className="mt-5">
						When Christmas came around, we created a feature so clients can purchase items in a timely
						manner and get them delivered to their doorstep on Christmas Eve. They were expecting an
						increase in sales, but we exceeded all of their expectations.
					</p>
					<Title tag="h2" isSize={4} className="mt-6">
						Going Above and Beyond: Additional Features Implemented on the Website
					</Title>
					<p className="mt-5">
						We are big fans of Shopify Apps that have well-proven results, and we always install Frequently
						Bought Together, as well as Judge.me reviews.
					</p>
					<p className="mt-5">
						We also migrated their email marketing to Klaviyo, which allowed them to segment their audience
						and target specific groups with personalised campaigns.
					</p>
					<p className="mt-5">
						Finally, we started PPC advertising to drive traffic to the website and increase conversions.
						The results were fantastic even from the beginning, with a ROAS of 4.33 in November, from which
						it only went upwards.
					</p>
					<p className="mt-5">
						Our team is continuously improving Hugh’s website and providing maintenance services, so we
						often implement new features, do SEO work, add products etc. Clear communication was the key to
						the success of this collaboration. This way we were able to stay on the same page and make
						informed decisions. Through open and transparent communication, we were together able to
						navigate any challenges that arose and ultimately deliver a successful outcome. It serves as a
						valuable reminder that in any collaboration, trust is essential for achieving great results.
					</p>
					<Title tag="h2" isSize={4} className="mt-6">
						Results and Impact
					</Title>
					<p className="mt-5">
						After launching the new website, Hugh’s Christmas sales doubled from last year. The website’s
						speed has also increased by 43% on both desktop and mobile, making it significantly easier for
						users to purchase their favourite products.
					</p>
				</Container>
			</VevolSection>
			<GatsbyImage
				width={`500px`}
				image={getImageByName(currentProject.nodes, 'bottom')}
				alt={'Hugh Maguire Case Study - Results &amp; Impact'}
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
