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
import InformationalContent from '../../components/general-components/informational-content';
import HeadingBlock from '../../components/heading-block/heading-block';
import PortfolioCarousel from '../../components/portfolio-carousel/portfolio-carousel';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

export const data = graphql`
	query {
		currentProject: allFile(filter: { relativeDirectory: { eq: "case-studies/fyne" } }) {
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
	const otherProjects = portfolio.filter((item) => item.name !== 'Fyne Jewellery');

	return (
		<Layout headerBg="white">
			<Helmet>
				<title>Case Study: Fyne Jewellery - Custom Shopify</title>
				<meta
					name="description"
					content="Design revamp, custom Shopify components, including currench exchange, wishlist and ring size finder functionalities."
				/>
			</Helmet>
			<SlimHero
				heading="Fyne Jewellery - Ultra Fine Shopify"
				subheading="Design revamp, custom Shopify components, including currench exchange, wishlist and ring size finder functionalities."
				backgroundWhite
				hideBlob
			/>
			<GatsbyImage
				image={getImageByName(currentProject.nodes, 'hero')}
				alt={'Fyne Jewellery Case Study - Vevol Media'}
				loading="lazy"
			/>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<a
						className="mb-3 is-inline-block"
						href={'https://www.fynejewellery.com'}
						target={'_blank'}
						rel="noreferrer"
					>
						See Live Website <FontAwesomeIcon icon={faExternalLinkAlt} />
					</a>
					<Title tag="h2" isSize={4}>
						About the brand
					</Title>
					<p className="mt-5">
						Fyne Jewellery is a groundbreaker in the industry, founded and pioneered by third-generation
						diamantaire, Aya Ahmad. Honing and refining her craft for most of her life, Aya was the first
						woman to work in her family’s business, learning the tricks of the trade from her relatives.
					</p>
					<p className="mt-5">
						Typically, women were expected to work in the jewellery or polished diamond industry, however,
						Aya decided to go against the grain and, instead, started working in the traditionally masculine
						world of the rough diamond trade. This saw her become one of the first women to do so on a
						global scale, and the only female focusing on diamond tenders at this point in time.
					</p>
					<p className="mt-5">
						Upon learning more about lab diamonds, Aya knew this was the groundbreaking approach to
						jewellery making she had been searching for. It was a new, contemporary, and disruptive take to
						producing beautiful products, and she wasn’t afraid to go against tradition and convention to
						turn her vision into a reality.
					</p>
					<p className="mt-5">
						Aya now proudly carries the title of the first person to have launched a lab-grown diamond
						jewellery brand in the Middle East; a conscious decision to produce high-quality pieces, without
						sacrificing her core values.
					</p>
				</Container>
			</VevolSection>
			<Quote
				secondPart={`...I just wanted to say I'm LOVING how easy it is and how versatile the options [for the custom sections] are.`}
				authorName={`Aya Ahmad`}
				authorRole={`Owner, Fyne Jewellery`}
			/>
			<VevolSection>
				<Container>
					<SimpleImageCarousel imagesArray={projectCarouselImages} />
				</Container>
			</VevolSection>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<SidebarInfoText
						sidebarContent={[
							{
								title: 'Services',
								text: 'Shopify Design & Development, Custom Components & Functionalities, Ongoing Maintenance',
							},
							{
								title: 'Tools & Technologies',
								text: 'Figma, Liquid, Javascript, Web Components, CSS (Sass), MongoDB, Github, Shopify CLI',
							},
						]}
						mainContent={[
							{
								title: 'Design and Development',
								text: 'Our initial discussion was about the UI/UX improvement, some of the custom pages were made using a 3rd party page builder, which was a good option at the time, but an unsustainable approach in the long run.',
							},
							{
								text: 'Fyne Jewellery is a luxury jewellery brand, and the website needed to reflect the premium quality of the products they sell. The store is unique, therefore the outcome couldn’t be anything less than exceptional.',
							},
							{
								text: 'We decided to do what we do best - custom development with a distinctive design in mind.',
							},
						]}
					/>
					<p className="mt-5">
						We took the pulse of the brand and found out what Aya likes when it comes to design, what new
						additions she wanted and what she did not want to keep from the old website, as well as her
						goals for the store.
					</p>
					<p className="mt-5">
						We settled on going with a modern look and feel, with asymmetric sections and an emphasis on
						bold typography. What we wanted to preserve was the storytelling which was achieved by combining
						the beautiful imagery from the website with the wording.
					</p>
					<p className="mt-5">
						Our development principles are pretty straightforward - we build everything with the user and
						customer (the shop admin) in mind. All sections are easily customisable, and no development
						experience is required to adjust design elements. The components act as modular Shopify sections
						that can be added to any page, in any order.
					</p>
				</Container>
			</VevolSection>
			<VevolSection>
				<Container>
					<InformationalContent
						featuredImage={
							<GatsbyImage
								width={`500px`}
								image={getImageByName(currentProject.nodes, 'bottom')}
								alt={'Fyne Jewellery Case Study - Results &amp; Impact'}
							/>
						}
						title={'Results & Impact'}
						description={
							'After migrating all pages and removing the 3rd party page builder, the website speed increased by 23% on desktop and 54% on mobile. We not only improved the user’s experience but the owner’s too. By not being tied up to another app and being able to change anything in just a few clicks (literally) we saved her time and money.'
						}
						blocks={[
							{
								title: 'Desktop Speed Increase',
								text: '23%',
							},
							{
								title: 'Mobile Speed Increase',
								text: '54%',
							},
						]}
					/>
				</Container>
			</VevolSection>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<Title tag="h2" isSize={4}>
						Bye, bye, 3rd party apps
					</Title>
					<p className="mt-5">
						We are big fans of Shopify apps, they’re versatile, easy to set up and always reliable. When you
						reach a certain point in your business, have tried all of the options and you discover exactly
						what works best for your brand, then it’s time to take it to the next level.
					</p>
					<p className="mt-5">
						This is exactly what happened at Fyne Jewellery, the apps did a great job, but there was room
						for improvement.
					</p>
					<p className="mt-5">
						We went ahead and made a plan to replace the 3rd party apps with embedded custom components
						built from scratch. One of the main concerns we had to address was how each app had a slightly
						different appearance, we had to adjust them to look seamless on the website. After laying out
						all the pros and cons the existing apps had, we were ready to polish up the product page.
					</p>
					<p className="mt-5">
						Here are some apps we’ve replaced with custom code, as well as new custom functionalities
						developed by us:
					</p>
					<Title tag="h3" isSize={5} className="mt-6">
						Gift Wrapping
					</Title>
					<p className="mt-5">
						Fyne Jewellery offers free premium gift wrapping on all orders placed on the website, which we
						made more intuitive and effortless for the customers to add.
					</p>
					<Title tag="h3" isSize={5} className="mt-6">
						Engraving
					</Title>
					<p className="mt-5">
						It may be considered a small feature not worth focusing on, but engraving your jewellery is what
						makes the piece truly yours and Aya decided to take it up a notch. We built a custom rendering
						of her best-selling item in the store and made it engrave dynamically.
					</p>
					<Title tag="h3" isSize={5} className="mt-6">
						Estimated Delivery Times & Currency Exchanger
					</Title>
					<p className="mt-5">
						As Aya sells unique pieces of jewellery, it was impossible not to get international attention.
						Fyne Jewellery gets orders from all around the world, which is why estimating the delivery dates
						is especially important.
					</p>
					<p className="mt-5">
						Also, having an integrated currency exchanger that helps customers convert the prices into their
						preferred currency was a must, so we added this too.
					</p>
					<Title tag="h3" isSize={5} className="mt-6">
						Wishlist
					</Title>
					<p className="mt-5">
						A wishlist app is a big feature for the website, and most 3rd party apps take forever to load.
						We coded an alternative with the aim of great speed and flawless blending to the store. We also
						built an interface to inform Aya of which products are her customer’s favourites, as well as the
						ability to view necessary statistics and reports.
					</p>
				</Container>
			</VevolSection>
			<Quote
				secondPart={`I have noticed a big uptick in clients using the gift wrapping feature and some already using the engraving tool - I do think the changes have been well received, so thanks again!`}
				authorName={`Aya Ahmad`}
				authorRole={`Owner, Fyne Jewellery`}
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
