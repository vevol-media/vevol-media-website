import React from 'react';
import { graphql } from 'gatsby';
import portfolio from '../../enums/portfolio';
import Layout from '../../components/layout/layout';
import SlimHero from '../../components/slim-hero/slim-hero';
import { Container, Title } from 'bloomer';
import { GatsbyImage } from 'gatsby-plugin-image';
import { getImageByName } from '../../helpers/helpers';
import VevolSection from '../../components/general-components/vm-section';
import SimpleImageCarousel from '../../components/simple-image-carousel/simple-image-carousel';
import HeadingBlock from '../../components/heading-block/heading-block';
import PortfolioCarousel from '../../components/portfolio-carousel/portfolio-carousel';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import Quote from '../../components/general-components/quote';
import SidebarInfoText from '../../components/general-components/sidebar-info-text';

export const data = graphql`
	query {
		currentProject: allFile(filter: { relativeDirectory: { eq: "case-studies/peter-dobias" } }) {
			nodes {
				name
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, quality: 100, layout: FULL_WIDTH)
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
		videoFile: file(relativePath: { eq: "case-studies/peter-dobias/testimonial.mp4" }) {
			publicURL
		}
	}
`;

export default function PortfolioPage({ data }) {
	const { currentProject, allPortfolio, videoFile } = data;
	const projectCarouselImages = currentProject.nodes.filter((image) => image.name.includes('page'));
	const otherProjects = portfolio.filter((item) => item.name !== 'Peter Dobias');

	return (
		<Layout headerBg="white">
			<Helmet>
				<title>Case Study: Dr. Dobias Healing Solutions Inc.</title>
				<meta name="description" content="Shopify Plus Development, Custom Synchronization, Enhanced User Experience" />
			</Helmet>
			<SlimHero
				heading="Revitalizing Pet Health E-commerce: The Dr. Peter Dobias Success Story"
				subheading="Shopify Plus E-commerce Revamp - Shopify Plus Development, Custom Synchronization, Enhanced User Experience"
				backgroundWhite
				hideBlob
			/>
			<Quote
				secondPart={`...Vevol has made a huge change and difference in our company.`}
				authorName={`Dr. Peter Dobias`}
				authorRole={`Owner, Dr. Dobias Healing Solutions Inc.`}
			/>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<a className="mb-3 is-inline-block" href={'https://peterdobias.com/'} target={'_blank'} rel="noreferrer">
						See Live Website <FontAwesomeIcon icon={faExternalLinkAlt} />
					</a>
					<Title tag="h2" isSize={4}>
						Introduction
					</Title>
					<p className="mt-5">
						In the heart of the holistic pet health industry, Dr. Dobias Healing Solutions has established itself as a beacon of natural
						care for pets. When they approached Vevol Media, their mission was clear: transform their online store into a platform that
						not only reflects their dedication to pet health but also enhances the shopping experience for pet owners around the globe.
						The challenge was not minor; it demanded a comprehensive overhaul to address a variety of critical issues hampering their
						online presence.
					</p>

					<Title tag="h2" isSize={4} className="mt-5">
						The Challenge
					</Title>
					<p className="mt-5">The initial assessment of Dr. Dobias's Shopify store revealed several areas needing immediate attention:</p>
					<ul className="mt-5">
						<li className="mt-3">
							<p>
								<strong>Outdated Theme & Legacy Code:</strong> The existing digital framework was creaking under the weight of
								outdated themes and a convoluted legacy codebase, drastically affecting performance and customization capabilities.
							</p>
						</li>
						<li className="mt-3">
							<p>
								<strong>Hardcoded Content Dilemma:</strong> The reliance on hardcoded content severely limited the ability to make
								dynamic changes to the website, stifling adaptability in a fast-paced market.
							</p>
						</li>
						<li className="mt-3">
							<p>
								<strong>Sluggish Performance:</strong> With loading speeds far from optimal, the site’s performance was a roadblock to
								delivering a seamless user experience, adversely affecting SEO rankings and customer satisfaction.
							</p>
						</li>
						<li className="mt-3">
							<p>
								<strong>Complex Synchronization Issues:</strong> The intricate challenge of synchronizing product availability and
								pricing across Canadian and U.S. stores created a tangled web of operational inefficiencies.
							</p>
						</li>
					</ul>
				</Container>
			</VevolSection>
			<VevolSection>
				<Container>
					<SimpleImageCarousel imagesArray={projectCarouselImages} />
				</Container>
			</VevolSection>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<Title tag="h2" isSize={4} className="mt-5">
						Our Approach
					</Title>
					<p className="mt-5">
						Our strategy was to leverage cutting-edge technology and innovative design principles to revitalize Dr. Dobias/s online
						presence. We focused on several key areas to bring about transformative change:
					</p>
					<p className="mt-5">
						<strong>Optimizing for Speed:</strong> Recognizing the importance of speed in user experience and SEO, we undertook
						significant efforts to enhance page loading times, ensuring a swift and smooth browsing experience.
					</p>
					<p className="mt-5">
						<strong>Empowering with Customization:</strong> By eliminating hardcoded elements, we opened up a world of customization
						possibilities, enabling the Dr. Dobias team to update and adapt their site in real-time, responding quickly to market trends
						and customer needs.
					</p>
					<p className="mt-5">
						<strong>Streamlining Synchronization:</strong> To address the complex issue of store synchronization, we developed a robust
						solution that ensured seamless communication between the Canadian and U.S. stores, maintaining consistency in product
						offerings and pricing.
					</p>
					<p className="mt-5">
						<strong>Enhancing Functionality through Integration:</strong> We seamlessly integrated essential third-party apps, enriching
						the site's functionality and providing users with a comprehensive and engaging shopping experience.
					</p>
				</Container>
			</VevolSection>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<SidebarInfoText
						sidebarContent={[
							{
								title: 'Services',
								text: 'Design, Shopify Theme Development, CRO, Custom Integrated Functionalities',
							},
							{
								title: 'Tools & Technologies',
								text: 'Figma, Liquid, Javascript, Web Components, CSS (Sass), Hubspot, Github, Shopify CLI',
							},
						]}
						mainContent={[
							{
								title: 'Transformative Results',
								text: 'The impact of our efforts was both immediate and profound:',
							},
							{
								text: "We also revamped the Product Page by including more sections to enrich the user experience, such as UGC content, lifestyle imageries and customer reviews for social proof. Our collaboration is continuous, as we're constantly adding new features to the store.",
							},
							{
								text: (
									<>
										<strong>A New Era of Customization:</strong> The newfound ability to customize every facet of the website has
										unleashed a wave of creativity and responsiveness, enabling Dr. Dobias to engage their audience with tailored
										content and promotions like never before
									</>
								),
							},
							{
								text: (
									<>
										<strong>Synchronization Perfected:</strong> The streamlined process between the stores has not only improved
										operational efficiency but also significantly enhanced customer trust and satisfaction, contributing to an
										uptick in sales.
									</>
								),
							},
							{
								text: (
									<>
										<strong>Speed, the Catalyst for Engagement:</strong> The dramatic improvement in loading times has transformed
										the user experience, reducing bounce rates, and setting the stage for higher engagement and conversion rates.
									</>
								),
							},
							{
								text: (
									<>
										<strong>Integrated Excellence:</strong> The integration of third-party applications has expanded the site’s
										capabilities, offering users a richer, more comprehensive shopping experience and setting a new benchmark for
										e-commerce in the pet health industry.
									</>
								),
							},
							{
								text: (
									<>
										<strong>SEO and Sales, On the Rise:</strong> With enhanced SEO rankings driving increased organic traffic and
										an optimized shopping experience boosting conversion rates, the website/s revamp has marked a significant
										milestone in Dr. Dobias/s journey towards digital excellence.
									</>
								),
							},
						]}
					/>
				</Container>
			</VevolSection>
			<VevolSection>
				<Container>
					<GatsbyImage
						width={`500px`}
						image={getImageByName(currentProject.nodes, 'page4')}
						alt={'Dr. Peter Dobias Success Story - Results &amp; Impact'}
					/>
				</Container>
			</VevolSection>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<Title tag="h2" isSize={4}>
						Moving Forward
					</Title>
					<p className="mt-5">
						The journey with Dr. Dobias Healing Solutions is a testament to the transformative power of strategic e-commerce development.
						As we look to the future, this project stands as a beacon of our commitment to excellence, innovation, and the growth of our
						clients. It's a vivid demonstration of how thoughtful design and technology can come together to create not just a store, but
						a thriving digital ecosystem.
					</p>
					<p className="mt-5">
						Ready to embark on your transformation journey? Connect with us at hello@vevolmedia.com or explore our world of innovative{' '}
						<a href="/services">e-commerce solutions</a>. Together, let's craft an online experience that resonates with your brand and
						your audience.
					</p>
				</Container>
			</VevolSection>
			<VevolSection>
				<Container>
					<SidebarInfoText
						className="centered-sidebar-info-text"
						sidebarContent={
							<div>
								<p className="quote-text">"...Vevol has just excelled."</p>
								<p>Dr. Peter Dobias - Owner, Dr. Dobias Healing Solutions Inc.</p>
							</div>
						}
						mainContent={
							videoFile && (
								<video width="100%" controls>
									<source src={videoFile.publicURL} type="video/mp4" />
								</video>
							)
						}
					/>
				</Container>
			</VevolSection>
			<GatsbyImage className="mt-5" image={getImageByName(currentProject.nodes, 'page3')} alt={'Dr. Peter Dobias Case Study - Vevol Media'} loading="lazy" />
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
