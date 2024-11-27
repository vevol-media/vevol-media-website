import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import HomepageHero from '../components/homepage-hero/homepage-hero';
import SidewayText from '../components/sideways-text-banner/sideway-text-banner';
import HomepageServices from '../components/homepage-services/homepage-services';
import ReviewsSection from '../components/reviews-section/reviews-section';
import VevolSection from '../components/general-components/vm-section';
import { Container } from 'bloomer/lib/layout/Container';
import HeadingBlock from '../components/heading-block/heading-block';
import PortfolioCarousel from '../components/portfolio-carousel/portfolio-carousel';
import portfolio from '../enums/portfolio';
import ImagesMiniBanner from '../components/images-mini-banner/images-mini-banner';
import BottomCTA from '../components/bottom-cta/bottom-cta';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import ImageWithText from '../components/general-components/image-text-simple';
import HomepageArticles from '../components/blog/homepage-articles';

export const data = graphql`
	query {
		portfolioFeaturedImagesQuery: allFile(filter: { relativeDirectory: { eq: "portfolio-featured-images" } }) {
			nodes {
				name
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, width: 750, quality: 100)
				}
			}
		}
		partnersImages: allFile(filter: { relativeDirectory: { eq: "platforms" } }) {
			nodes {
				name
				childImageSharp {
					gatsbyImageData(placeholder: DOMINANT_COLOR, height: 60, quality: 100)
				}
			}
		}
		midBannerImageQuery: file(name: { eq: "vevol-media-work-together-v1" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 1000 }, quality: 100)
			}
		}
		formBannerImageQuery: file(name: { eq: "vevol-media-strategist" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 1000 }, quality: 100)
			}
		}
		mainHeroImageQuery: file(name: { eq: "vevol-media-main-hero" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 1000 }, quality: 100)
			}
		}
		collageImageQuery: file(name: { eq: "collage-projects" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, width: 800, quality: 100)
			}
		}
		noblesseImageQuery: file(name: { eq: "noblesse-image" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, width: 800, quality: 100)
			}
		}
		storyIconQuery: file(name: { eq: "story-icon" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, width: 300, quality: 100)
			}
		}
		palletIconQuery: file(name: { eq: "pallet-icon" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, width: 300, quality: 100)
			}
		}
		bagIconQuery: file(name: { eq: "bag-icon" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, width: 300, quality: 100)
			}
		}
		themesButton: file(name: { eq: "shopify-themes-button" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, width: 300, quality: 100)
			}
		}
		blogPosts: allContentfulBlogPost(sort: { order: DESC, fields: publishedDate }, limit: 4) {
			nodes {
				title
				publishedDate(formatString: "DD MMM YYYY")
				type {
					title
				}
				intro {
					intro
				}
				slug
				featuredImage {
					gatsbyImageData(placeholder: DOMINANT_COLOR, width: 500, quality: 100, layout: FULL_WIDTH)
				}
			}
		}
	}
`;

export default function Homepage({ data }) {
	const {
		portfolioFeaturedImagesQuery,
		partnersImages,
		midBannerImageQuery,
		collageImageQuery,
		noblesseImageQuery,
		storyIconQuery,
		palletIconQuery,
		bagIconQuery,
		themesButton,
		blogPosts,
		formBannerImageQuery,
		mainHeroImageQuery,
	} = data;
	const midBannerImage = getImage(midBannerImageQuery);
	const formBannerImage = getImage(formBannerImageQuery);
	const mainHeroImage = getImage(mainHeroImageQuery);
	const collageImage = getImage(collageImageQuery);
	const noblesseImage = getImage(noblesseImageQuery);
	const storyIcon = getImage(storyIconQuery);
	const palletIcon = getImage(palletIconQuery);
	const bagIcon = getImage(bagIconQuery);
	const themesButtonImage = getImage(themesButton);

	return (
		<Layout formBackgroundImage={formBannerImage}>
			<HomepageHero imageBottom={mainHeroImage} />
			<SidewayText lineOne={`ecommerce`} lineTwo={'development'} />
			<VevolSection>
				<Container>
					<ImageWithText
						alignRight
						greenLine
						image={<GatsbyImage image={noblesseImage} alt={'Official Shopify Theme created by Vevol Media'} />}
						title={'Our First Official Shopify Theme!'}
						textContent={[
							<p className="mt-5">
								We're very happy to launch Noblesse, our first Shopify Theme, perfectly adapted to fashion, jewellery and beauty!
							</p>,
							<p className="mt-5">
								We wanted to create something different, for brands that want to stand out without the need for custom coding, but
								still CRO oriented.
							</p>,
						]}
						numbersContent={[
							{
								image: <GatsbyImage image={storyIcon} alt="Star icon" style={{ width: 30, height: 30 }} />,
								subtitle: 'Visual Storytelling',
							},
							{
								image: <GatsbyImage image={palletIcon} alt="Pallet icon" style={{ width: 30, height: 30 }} />,
								subtitle: 'Highly Customisable',
							},
							{
								image: <GatsbyImage image={bagIcon} alt="Bag icon" style={{ width: 30, height: 30 }} />,
								subtitle: 'Focused on Conversion',
							},
						]}
					>
						<Link href="https://themes.shopify.com/themes/noblesse" target="_blank" className="mt-6 themes-button">
							<GatsbyImage image={themesButtonImage} alt="Shopify Themes Button" />
						</Link>
					</ImageWithText>
				</Container>
			</VevolSection>
			<HomepageServices />
			<ImagesMiniBanner images={partnersImages.nodes} />
			<VevolSection>
				<Container>
					<ImageWithText
						alignRight
						greenLine
						image={<GatsbyImage image={collageImage} alt={'Vevol Media Projects Collage'} />}
						title={'Your Success Is Our Success'}
						textContent={[
							<p className="mt-5">We love working with amazing brands and we are fully invested in all of our projects.</p>,
							<p className="mt-5">
								Our ethos is to provide quality above all else and we uphold our beliefs when offering our services to our clients.
							</p>,
							<p className="mt-5">We’ve been a part of many success stories and we can’t wait to join your journey to the top!</p>,
						]}
						numbersContent={[
							{
								title: '20+',
								subtitle: 'Successful Launches',
							},
							{
								title: '35+',
								subtitle: 'Ongoing Customers',
							},
							{
								title: '100+',
								subtitle: 'Ideas Implemented',
							},
						]}
					/>
				</Container>
			</VevolSection>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<HeadingBlock
						title={'We Work Hard To Ensure Quality'}
						highlightedWord={'Quality'}
						subtitle={'And our clients appreciate it.'}
						className="mb-4em"
					/>
					<ReviewsSection whiteBackground />
				</Container>
			</VevolSection>
			<BottomCTA
				bgImage={midBannerImage}
				title="Let's Work Together"
				text="Book a free consultation with one of our team members now"
				url="/contact"
				ctaText={'Get in touch'}
				gradientColour="black"
			/>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<HeadingBlock
						title={'Past Success Stories'}
						highlightedWord={'Success'}
						subtitle={'Proven track record of our hard work.'}
						className="mb-4em"
					/>
					<PortfolioCarousel projectsList={portfolio} imagesData={portfolioFeaturedImagesQuery.nodes} backgroundWhite cutBottomPadding />
				</Container>
			</VevolSection>
			{blogPosts.nodes.length > 0 && (
				<VevolSection backgroundColour={'grey'}>
					<Container>
						<HeadingBlock
							title={'Read More From Us'}
							highlightedWord={'More'}
							subtitle={'Partnership announcements, news about the company or insightful articles from our team.'}
							className="mb-4em"
						/>
						<HomepageArticles blogPosts={blogPosts.nodes} />
					</Container>
				</VevolSection>
			)}
		</Layout>
	);
}
