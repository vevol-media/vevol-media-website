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
		currentProject: allFile(filter: { relativeDirectory: { eq: "case-studies/lumired" } }) {
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
	const otherProjects = portfolio.filter((item) => item.name !== 'Lumired');

	return (
		<Layout headerBg="white">
			<Helmet>
				<title>Case Study: LumiRed Ireland - Custom Shopify</title>
				<meta
					name="description"
					content="Wordpress Woocommerce to Shopify migration, including customers, orders and products. Website Redesign and Store setup included."
				/>
			</Helmet>
			<SlimHero
				heading="Lumired - Under New Lights"
				subheading="Wordpress Woocommerce to Shopify migration, including customers, orders and products. Website Redesign and Store setup included."
				backgroundWhite
				hideBlob
			/>
			<GatsbyImage
				image={getImageByName(currentProject.nodes, 'hero')}
				alt={'Lumired Case Study - Vevol Media'}
				loading="lazy"
			/>
			<VevolSection backgroundColour={'grey'}>
				<Container>
					<a
						className="mb-3 is-inline-block"
						href={'https://www.lumired.ie'}
						target={'_blank'}
						rel="noreferrer"
					>
						See Live Website <FontAwesomeIcon icon={faExternalLinkAlt} />
					</a>
					<Title tag="h2" isSize={4}>
						About the brand
					</Title>
					<p className="mt-5">
						LumiRed is one of the leading brands in Red Light Therapy in Ireland, and they're proud to be
						the first providers of Red Light Therapy products in the country. They feature three ranges of
						products, with multiple accessories, based on each customer's needs and budget.
					</p>
					<p className="mt-5">
						As a dedicated team of health professionals, LumiRed is committed to taking a personalised
						approach to cultivating strong relationships with its customers. This means providing guidance
						and advising on using RLT for each customer's unique needs and individual goals.
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
								title: 'Goals & Results',
								text: 'The main goal for LumiRed was to improve customer experience on the website. We decided on migrating from WooCommerce to Shopify as it is a much more powerful, reliable, and easy-to-use platform, which also offers stunning templates and brilliant customer support.',
							},
							{
								title: 'Design and Development',
								text: 'As always, we start by having a meeting with the owner to understand their brand, target audience and brand goals, so we can go about designing with the specific customer in mind. We went ahead and proposed three appropriate Shopify Themes to the client, from which he chose Empire, as it already possessed some of the functionalities he was looking for.',
							},
						]}
					/>
					<p className="mt-5">
						For LumiRed, we went ahead with a bold, technical website with powerful red accents that
						emphasise the nature of their products. Our design was based on the chosen theme but with a few
						customisations that make the website unique.
					</p>
					<p className="mt-5">
						After we confirmed the Figma design, we went ahead and began implementing it. Section by
						section, inch by inch, it all started to come to life. Here is a breakdown of components we
						added to the theme:
					</p>
					<p className="mt-5 pl-5">
						✔ We built a custom section for technical specifications that are populated based on individual
						metafields;
					</p>
					<p className="mt-5 pl-5">
						✔ Optimizing the process of how LumiRed customers can get in touch to learn more about the
						products was a huge priority of ours, so we seamlessly integrated Calendly into the product page
						and contact page;
					</p>
					<p className="mt-5 pl-5">✔ We improved the product comparison page by comparing metafields;</p>
					<p className="mt-5 pl-5">
						✔ In order to make the website more dynamic, we built a custom Call to Action button for
						navigating the website,{' '}
					</p>
					<p className="mt-5 pl-5">
						✔ We rebuilt the navigation so it would be transparent on the top of the page so it would fit
						into the banners;
					</p>
					<p className="mt-5 pl-5">
						✔ We made a custom Benefits page, where we explained the benefits of the products on one page -
						as opposed to the old website where the customer needed to go through multiple pages to get this
						information.
					</p>
				</Container>
			</VevolSection>
			<Quote
				firstPart={`They provided a lot of insights, ideas, and recommendations`}
				secondPart={` From the start, they understood the brief and worked on their own initiative. We gave them indicators of what we were looking for, and communication was excellent at all times.`}
				authorName={`Rory O'Neill`}
				authorRole={`Director, Lumired`}
			/>
			<VevolSection>
				<Container>
					<SimpleImageCarousel imagesArray={projectCarouselImages} />
				</Container>
			</VevolSection>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<Title tag="h2" isSize={4}>
						Additional Features & Changes
					</Title>
					<p className="mt-5">
						We worked with a photographer that took great professional pictures of the products in use,
						images that suit the brand but also fit the overall website aesthetic we were aiming for. Our
						copywriter proofread the existing website copy and improved it where he saw good SEO
						opportunities, and also wrote new text where it was needed.
					</p>
					<p className="mt-5">
						We also imported all reviews from Trustpilot to Judge.me, which is a great tool for collecting
						and curating reviews inside Shopify. With Judge.me, we set up a flow to request reviews from the
						customers after purchasing the product and also sent coupons for future purchases.
					</p>
					<p className="mt-5">
						When it comes to apps, we are big fans of testing, so we added multiple bundling apps to make
						sure we found the perfect setup for our client's needs. We settled on Bundlr, which is extremely
						customisable and provides great value for its price.
					</p>
					<Title tag="h2" isSize={4} className="mt-6">
						Conclusion
					</Title>
					<p className="mt-5">
						After two months of working together, the website went live, and we're super excited about it!
						The speed is great on desktop as well as on mobile, and the user experience has improved a lot.
						The website has been optimized and designed to specifically suit the overall voice and aesthetic
						of LumiRed, as well as provide incredible functionality.
					</p>
					<p className="mt-5">
						The purchase flow is shorter and faster than ever. Customers will now be able to buy Lumired
						products easier.
					</p>
				</Container>
			</VevolSection>
			<GatsbyImage
				width={`500px`}
				image={getImageByName(currentProject.nodes, 'bottom')}
				alt={'Lumired Case Study - Results &amp; Impact'}
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
