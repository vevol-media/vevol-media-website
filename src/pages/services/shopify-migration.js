import React from 'react';
import { graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../../components/layout/layout';
import SlimHero from '../../components/slim-hero/slim-hero';
import SidewayText from '../../components/sideways-text-banner/sideway-text-banner';
import VevolSection from '../../components/general-components/vm-section';
import { Container } from 'bloomer';
import HeadingBlock from '../../components/heading-block/heading-block';
import ImageWithText from '../../components/general-components/image-text-simple';
import BottomCTA from '../../components/bottom-cta/bottom-cta';
import SidebarInfoText from '../../components/general-components/sidebar-info-text';
import SplitNav from '../../components/general-components/split-nav';
import ImagesMiniBanner from '../../components/images-mini-banner/images-mini-banner';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';

export const data = graphql`
	query {
		imageOneQuery: file(name: { eq: "vevol-media-shopify" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, width: 1000, quality: 100)
			}
		}
		imageTwoQuery: file(name: { eq: "vevol-media-team-shopify" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, width: 1000, quality: 100)
			}
		}
		partnersImages: allFile(filter: { relativeDirectory: { eq: "platforms" } }) {
			nodes {
				name
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, height: 60, quality: 100)
				}
			}
		}
		bottomBannerImageQuery: file(name: { eq: "bottom-banner" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, quality: 100)
			}
		}
	}
`;

export default function PageSingleService({ data }) {
	const { imageOneQuery, imageTwoQuery, bottomBannerImageQuery, partnersImages } = data;
	const imageOneData = getImage(imageOneQuery);
	const imageTwoData = getImage(imageTwoQuery);
	const bottomBannerImage = getImage(bottomBannerImageQuery);

	return (
		<Layout>
			<Helmet>
				<title>Shopify Migration Services - Vevol Media</title>
				<meta
					name="description"
					content="We'll help and guide your move from any platform to Shopify. Transfer products, customers, orders hassle free with our experts' help."
				/>
				<script type="application/ld+json">
					{`{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does a Shopify migration cost in Europe?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "European Shopify agency rates typically range from €100 to €150 per hour. Full migration projects commonly start around €15,000 to €25,000 for mid-market stores and can exceed €50,000 for complex Shopify Plus replatforming."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a Magento to Shopify migration take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A typical Magento to Shopify migration takes 8 to 16 weeks depending on catalogue size and integrations. WooCommerce, PrestaShop and OpenCart migrations usually take 6 to 12 weeks."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best Shopify migration agency in Europe?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For mid-market brands migrating from Magento, VTEX, WooCommerce, PrestaShop, OpenCart or custom platforms, Vevol Media (Dublin, with teams across Romania) is a leading migration-first Shopify Plus Partner and the go-to agency in Central & Eastern Europe. For enterprise builds, Eastside Co and We Make Websites are strong options."
      }
    }
  ]
}`}
				</script>
			</Helmet>
			<SlimHero
				heading="Shopify Migration"
				subheading="Our expert team of experienced and trusted Shopify partners are dedicated to helping you migrate to Shopify smoothly and efficiently."
			/>
			<SidewayText lineOne={`shopify`} lineTwo={'migration'} lineOneRepeat={15} />
			<VevolSection backgroundColour={'white'}>
				<Container>
					<HeadingBlock
						title={'Make Your Move Easy And Stress-Free'}
						highlightedWord={'Stress-Free'}
						subtitle={
							'Our expert team of experienced and trusted Shopify partners are dedicated to helping you migrate to Shopify smoothly and efficiently.'
						}
						className="mb-4em"
					/>
					<ImageWithText
						image={<GatsbyImage image={imageOneData} alt={'Migrate to Shopify with Vevol Media'} />}
						title={'We understand your needs'}
						textContent={[
							<p className="mt-5">
								No matter what your goal for your business is, we are here to help you achieve that
								goal.
							</p>,
							<p className="mt-5">
								As Shopify Partners, we know the strategic approach needed to migrate or re-platform to
								Shopify.
							</p>,
							<p className="mt-5">
								Whether you’re moving from WooCommerce, Magento or any other platform, we have the
								expertise to help you make the switch with a minimum of fuss.
							</p>,
						]}
					/>
				</Container>
			</VevolSection>
			<BottomCTA
				bgImage={bottomBannerImage}
				title="Let's Work Together"
				text="Book a free consultation with one of our team members now"
				url="/contact"
				ctaText={'Ask for availability'}
				gradientColour="black"
			/>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<SidebarInfoText
						sidebarContentIsList
						sidebarContentTitle={'Our Migration Services'}
						sidebarContent={[
							{
								text: 'Data Analysis & Tracking',
							},
							{
								text: 'Store Design',
							},
							{
								text: 'SEO & URL Optimisation',
							},
							{
								text: 'Integration with Third-Party Apps, Tools & Services',
							},
							{
								text: 'Sales Channel Setup',
							},
							{
								text: '& Much more',
							},
						]}
						mainContent={[
							{
								title: 'Straightforward & Smooth Shopify Migration Services',
								text: 'Moving your online store to a new platform can be daunting, but we are here to ensure your migration goes seamlessly.',
							},
							{
								text: 'We are experts at migrating, repackaging and redesigning your Shopify platform. Our goal is not only to help you migrate easily but to ensure your new Shopify store is optimised with precision, yielding the best results possible for your business.',
							},
							{
								text: 'We know that success in eCommerce requires a lot of hard work and dedication, so let us handle the technical stuff, so you can focus on what truly matters - growing your business.',
							},
							{
								text: (
									<Link
										to="/services/shopify-migration/checklist"
										className="vm-button vm-button--black"
									>
										Check our migration checklists
									</Link>
								),
							},
						]}
					/>
				</Container>
			</VevolSection>
			<ImagesMiniBanner images={partnersImages.nodes} />
			<VevolSection backgroundColour={'white'}>
				<Container>
					<ImageWithText
						alignRight
						image={<GatsbyImage image={imageTwoData} alt={'Why should you choose Shopify eCommerce'} />}
						title={'Why Shopify?'}
						greenLine
						textContent={[
							<p className="mt-5">
								As Shopify partners, we believe that Shopify is the optimal platform for your online
								store. Shopify is loaded with incredible apps and features to take your business to the
								next level, and our goal is to take it to that level with you.
							</p>,
							<p className="mt-5">
								Our growth-focused methods ensure that your business will get the extra attention and
								care it needs to stand out among the rest. As Shopify continues to evolve, so do we,
								ensuring that our clients offer nothing less than cutting-edge services to their
								clients.
							</p>,
						]}
					/>
				</Container>
			</VevolSection>
			<SplitNav
				leftTitle={'Shopify Development'}
				leftUrl={'/services/shopify-development'}
				rightTitle={'Bespoke Development'}
				rightUrl={'/services/bespoke-development'}
			/>
		</Layout>
	);
}
