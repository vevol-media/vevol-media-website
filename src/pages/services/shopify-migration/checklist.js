import React from 'react';
import Layout from '../../../components/layout/layout';
import SlimHero from '../../../components/slim-hero/slim-hero';
import VevolSection from '../../../components/general-components/vm-section';
import { Container } from 'bloomer';
import SidebarInfoText from '../../../components/general-components/sidebar-info-text';
import { Helmet } from 'react-helmet';

export default function MigrationChecklist() {
	return (
		<Layout>
			<Helmet>
				<title>Shopify Migration Checklist - Vevol Media</title>
				<meta
					name="description"
					content="Comprehensive checklist for a successful Shopify migration. From pre-migration planning to post-launch optimization, we guide you through every step."
				/>
			</Helmet>
			<SlimHero
				heading="Shopify Migration Checklist"
				subheading="A comprehensive guide to ensure a smooth and successful migration to Shopify"
			/>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<SidebarInfoText
						sidebarContentIsList
						sidebarContentTitle={'Migration Phases'}
						sidebarContent={[
							{
								text: 'Pre-Migration Phase',
							},
							{
								text: 'Implementation Phase',
							},
							{
								text: 'Launch and Post-Launch',
							},
							{
								text: 'Optimization and Growth',
							},
						]}
						mainContent={[
							{
								title: 'Pre-Migration Phase',
								text: 'The foundation of a successful migration begins with thorough planning and assessment. This phase includes gathering information, conducting technical assessments, planning design and UX, and creating a detailed migration strategy.',
							},
							{
								title: 'Gather Information',
								text: (
									<ul className="vm-checklist">
										<li className="vm-checklist__item">
											<input type="checkbox" id="info1" className="vm-checklist__checkbox" />{' '}
											<label htmlFor="info1" className="vm-checklist__label">
												Collect company overview details
											</label>
										</li>
										<li className="vm-checklist__item">
											<input type="checkbox" id="info2" className="vm-checklist__checkbox" />{' '}
											<label htmlFor="info2" className="vm-checklist__label">
												Identify business goals and objectives
											</label>
										</li>
										<li className="vm-checklist__item">
											<input type="checkbox" id="info3" className="vm-checklist__checkbox" />{' '}
											<label htmlFor="info3" className="vm-checklist__label">
												Analyze current setup and challenges
											</label>
										</li>
										<li className="vm-checklist__item">
											<input type="checkbox" id="info4" className="vm-checklist__checkbox" />{' '}
											<label htmlFor="info4" className="vm-checklist__label">
												Document key business metrics and processes
											</label>
										</li>
									</ul>
								),
							},
							{
								title: 'Technical Assessment',
								text: (
									<ul className="vm-checklist">
										<li className="vm-checklist__item">
											<input type="checkbox" id="tech1" className="vm-checklist__checkbox" />{' '}
											<label htmlFor="tech1" className="vm-checklist__label">
												Evaluate current platform and reasons for migration
											</label>
										</li>
										<li className="vm-checklist__item">
											<input type="checkbox" id="tech2" className="vm-checklist__checkbox" />{' '}
											<label htmlFor="tech2" className="vm-checklist__label">
												Assess product catalog structure and complexity
											</label>
										</li>
										<li className="vm-checklist__item">
											<input type="checkbox" id="tech3" className="vm-checklist__checkbox" />{' '}
											<label htmlFor="tech3" className="vm-checklist__label">
												Review existing integrations (ERP, PIM, etc.)
											</label>
										</li>
										<li className="vm-checklist__item">
											<input type="checkbox" id="tech4" className="vm-checklist__checkbox" />{' '}
											<label htmlFor="tech4" className="vm-checklist__label">
												Identify custom features and functionalities
											</label>
										</li>
									</ul>
								),
							},
							{
								title: 'Design and UX Planning',
								text: (
									<ul className="vm-checklist">
										<li className="vm-checklist__item">
											<input type="checkbox" id="design1" className="vm-checklist__checkbox" />{' '}
											<label htmlFor="design1" className="vm-checklist__label">
												Define design goals and aesthetic preferences
											</label>
										</li>
										<li className="vm-checklist__item">
											<input type="checkbox" id="design2" className="vm-checklist__checkbox" />{' '}
											<label htmlFor="design2" className="vm-checklist__label">
												Map out desired customer journey
											</label>
										</li>
										<li className="vm-checklist__item">
											<input type="checkbox" id="design3" className="vm-checklist__checkbox" />{' '}
											<label htmlFor="design3" className="vm-checklist__label">
												Identify key user actions to prioritize
											</label>
										</li>
										<li className="vm-checklist__item">
											<input type="checkbox" id="design4" className="vm-checklist__checkbox" />{' '}
											<label htmlFor="design4" className="vm-checklist__label">
												Plan for mobile responsiveness
											</label>
										</li>
									</ul>
								),
							},
							{
								title: 'Migration Planning',
								text: (
									<ul className="vm-checklist">
										<li className="vm-checklist__item">
											<input type="checkbox" id="mig1" className="vm-checklist__checkbox" />{' '}
											<label htmlFor="mig1" className="vm-checklist__label">
												Inventory existing data (products, customers, orders)
											</label>
										</li>
										<li className="vm-checklist__item">
											<input type="checkbox" id="mig2" className="vm-checklist__checkbox" />{' '}
											<label htmlFor="mig2" className="vm-checklist__label">
												Plan for content migration (descriptions, images, blog posts)
											</label>
										</li>
										<li className="vm-checklist__item">
											<input type="checkbox" id="mig3" className="vm-checklist__checkbox" />{' '}
											<label htmlFor="mig3" className="vm-checklist__label">
												Identify legacy systems requiring integration
											</label>
										</li>
										<li className="vm-checklist__item">
											<input type="checkbox" id="mig4" className="vm-checklist__checkbox" />{' '}
											<label htmlFor="mig4" className="vm-checklist__label">
												List required Shopify apps and integrations
											</label>
										</li>
										<li className="vm-checklist__item">
											<input type="checkbox" id="mig5" className="vm-checklist__checkbox" />{' '}
											<label htmlFor="mig5" className="vm-checklist__label">
												Plan custom feature development
											</label>
										</li>
										<li className="vm-checklist__item">
											<input type="checkbox" id="mig6" className="vm-checklist__checkbox" />{' '}
											<label htmlFor="mig6" className="vm-checklist__label">
												Define B2B capabilities (if applicable)
											</label>
										</li>
									</ul>
								),
							},
							{
								title: 'Implementation Phase',
								text: 'This phase involves the actual execution of the migration plan, including store setup, data migration, feature implementation, and integration of various systems.',
							},
							{
								title: 'Store Setup',
								text: (
									<ul className="vm-checklist">
										<li className="vm-checklist__item">
											<input type="checkbox" id="setup1" className="vm-checklist__checkbox" />{' '}
											<label htmlFor="setup1" className="vm-checklist__label">
												Configure Shopify account and settings
											</label>
										</li>
										<li className="vm-checklist__item">
											<input type="checkbox" id="setup2" className="vm-checklist__checkbox" />{' '}
											<label htmlFor="setup2" className="vm-checklist__label">
												Set up product catalog and collections
											</label>
										</li>
										<li className="vm-checklist__item">
											<input type="checkbox" id="setup3" className="vm-checklist__checkbox" />{' '}
											<label htmlFor="setup3" className="vm-checklist__label">
												Implement design and theme customizations
											</label>
										</li>
									</ul>
								),
							},
							{
								title: 'Data Migration Execution',
								text: (
									<ul className="vm-checklist">
										<li className="vm-checklist__item">
											<input type="checkbox" id="data1" className="vm-checklist__checkbox" />{' '}
											<label htmlFor="data1" className="vm-checklist__label">
												Migrate product data
											</label>
										</li>
										<li className="vm-checklist__item">
											<input type="checkbox" id="data2" className="vm-checklist__checkbox" />{' '}
											<label htmlFor="data2" className="vm-checklist__label">
												Transfer customer information
											</label>
										</li>
										<li className="vm-checklist__item">
											<input type="checkbox" id="data3" className="vm-checklist__checkbox" />{' '}
											<label htmlFor="data3" className="vm-checklist__label">
												Import order history
											</label>
										</li>
									</ul>
								),
							},
							{
								title: 'Feature Implementation',
								text: (
									<ul className="vm-checklist">
										<li className="vm-checklist__item">
											<input type="checkbox" id="feature1" className="vm-checklist__checkbox" />{' '}
											<label htmlFor="feature1" className="vm-checklist__label">
												Install and configure necessary Shopify apps
											</label>
										</li>
										<li className="vm-checklist__item">
											<input type="checkbox" id="feature2" className="vm-checklist__checkbox" />{' '}
											<label htmlFor="feature2" className="vm-checklist__label">
												Develop custom features
											</label>
										</li>
										<li className="vm-checklist__item">
											<input type="checkbox" id="feature3" className="vm-checklist__checkbox" />{' '}
											<label htmlFor="feature3" className="vm-checklist__label">
												Set up payment gateways and checkout options
											</label>
										</li>
									</ul>
								),
							},
							{
								title: 'Integration',
								text: (
									<ul className="vm-checklist">
										<li className="vm-checklist__item">
											<input type="checkbox" id="int1" className="vm-checklist__checkbox" />{' '}
											<label htmlFor="int1" className="vm-checklist__label">
												Connect ERP, PIM, and other required systems
											</label>
										</li>
										<li className="vm-checklist__item">
											<input type="checkbox" id="int2" className="vm-checklist__checkbox" />{' '}
											<label htmlFor="int2" className="vm-checklist__label">
												Implement shipping and fulfillment solutions
											</label>
										</li>
										<li className="vm-checklist__item">
											<input type="checkbox" id="int3" className="vm-checklist__checkbox" />{' '}
											<label htmlFor="int3" className="vm-checklist__label">
												Set up email marketing integrations
											</label>
										</li>
									</ul>
								),
							},
							{
								title: 'Testing and Quality Assurance',
								text: (
									<ul className="vm-checklist">
										<li className="vm-checklist__item">
											<input type="checkbox" id="test1" className="vm-checklist__checkbox" />{' '}
											<label htmlFor="test1" className="vm-checklist__label">
												Perform thorough functionality testing
											</label>
										</li>
										<li className="vm-checklist__item">
											<input type="checkbox" id="test2" className="vm-checklist__checkbox" />{' '}
											<label htmlFor="test2" className="vm-checklist__label">
												Check data accuracy post-migration
											</label>
										</li>
										<li className="vm-checklist__item">
											<input type="checkbox" id="test3" className="vm-checklist__checkbox" />{' '}
											<label htmlFor="test3" className="vm-checklist__label">
												Test user flows and customer journey
											</label>
										</li>
										<li className="vm-checklist__item">
											<input type="checkbox" id="test4" className="vm-checklist__checkbox" />{' '}
											<label htmlFor="test4" className="vm-checklist__label">
												Verify mobile responsiveness
											</label>
										</li>
										<li className="vm-checklist__item">
											<input type="checkbox" id="test5" className="vm-checklist__checkbox" />{' '}
											<label htmlFor="test5" className="vm-checklist__label">
												Conduct performance and load testing
											</label>
										</li>
									</ul>
								),
							},
							{
								title: 'Launch and Post-Launch',
								text: (
									<ul className="vm-checklist">
										<li className="vm-checklist__item">
											<input type="checkbox" id="launch1" className="vm-checklist__checkbox" />{' '}
											<label htmlFor="launch1" className="vm-checklist__label">
												Execute final data sync
											</label>
										</li>
										<li className="vm-checklist__item">
											<input type="checkbox" id="launch2" className="vm-checklist__checkbox" />{' '}
											<label htmlFor="launch2" className="vm-checklist__label">
												Update DNS and go live
											</label>
										</li>
										<li className="vm-checklist__item">
											<input type="checkbox" id="launch3" className="vm-checklist__checkbox" />{' '}
											<label htmlFor="launch3" className="vm-checklist__label">
												Monitor site performance and issues
											</label>
										</li>
										<li className="vm-checklist__item">
											<input type="checkbox" id="launch4" className="vm-checklist__checkbox" />{' '}
											<label htmlFor="launch4" className="vm-checklist__label">
												Provide post-launch support
											</label>
										</li>
									</ul>
								),
							},
							{
								title: 'Optimization and Growth',
								text: (
									<ul className="vm-checklist">
										<li className="vm-checklist__item">
											<input type="checkbox" id="opt1" className="vm-checklist__checkbox" />{' '}
											<label htmlFor="opt1" className="vm-checklist__label">
												Implement marketing and SEO strategies
											</label>
										</li>
										<li className="vm-checklist__item">
											<input type="checkbox" id="opt2" className="vm-checklist__checkbox" />{' '}
											<label htmlFor="opt2" className="vm-checklist__label">
												Monitor and analyze store performance
											</label>
										</li>
										<li className="vm-checklist__item">
											<input type="checkbox" id="opt3" className="vm-checklist__checkbox" />{' '}
											<label htmlFor="opt3" className="vm-checklist__label">
												Plan for ongoing maintenance and updates
											</label>
										</li>
										<li className="vm-checklist__item">
											<input type="checkbox" id="opt4" className="vm-checklist__checkbox" />{' '}
											<label htmlFor="opt4" className="vm-checklist__label">
												Explore opportunities for further customization and growth
											</label>
										</li>
									</ul>
								),
							},
						]}
					/>
				</Container>
			</VevolSection>
		</Layout>
	);
}
