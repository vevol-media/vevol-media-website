import React from 'react';
import { graphql } from 'gatsby';
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
					gatsbyImageData(placeholder: TRACED_SVG, height: 60, quality: 100)
				}
			}
		}
		midBannerImageQuery: file(name: { eq: "reviews-banner" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, quality: 100)
			}
		}
		collageImageQuery: file(name: { eq: "collage-projects" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, width: 800, quality: 100)
			}
		}
	}
`;

export default function Homepage({ data }) {
	const { portfolioFeaturedImagesQuery, partnersImages, midBannerImageQuery, collageImageQuery } = data;
	const midBannerImage = getImage(midBannerImageQuery);
	const collageImage = getImage(collageImageQuery);

	return (
		<Layout>
			<HomepageHero />
			<SidewayText lineOne={`ecommerce`} lineTwo={'development'} />
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
							<p className="mt-5">
								We love working with amazing brands and we are fully invested in all of our projects.
							</p>,
							<p className="mt-5">
								Our ethos is to provide quality above all else and we uphold our beliefs when offering
								our services to our clients.
							</p>,
							<p className="mt-5">
								We’ve been a part of many success stories and we can’t wait to join your journey to the
								top!
							</p>,
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
					<PortfolioCarousel
						projectsList={portfolio}
						imagesData={portfolioFeaturedImagesQuery.nodes}
						backgroundWhite
						cutBottomPadding
					/>
				</Container>
			</VevolSection>
		</Layout>
	);
}
