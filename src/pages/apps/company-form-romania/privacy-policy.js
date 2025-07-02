import React from 'react';
import Layout from '../../../components/layout/layout';
import { Helmet } from 'react-helmet';
import VevolSection from '../../../components/general-components/vm-section';
import { Container } from 'bloomer/lib/layout/Container';
import SlimHero from '../../../components/slim-hero/slim-hero';

export default function CompanyFormPrivacyPolicy() {
	return (
		<Layout>
			<Helmet>
				<title>Company Form - Romania App Privacy Policy</title>
				<meta
					name="description"
					content="Privacy Policy for the Company Form - Romania Shopify App by Vevol Media."
				/>
			</Helmet>
			<SlimHero heading="Privacy Policy" subheading="Last Updated: 27/06/2025" />
			<VevolSection backgroundColour={'white'}>
				<Container className="privacy-policy__wrapper" style={{ maxWidth: '800px', margin: '0 auto' }}>
					<div style={{ lineHeight: '1.6', color: '#333' }}>
						<h2
							style={{
								fontSize: '2rem',
								marginBottom: '1.5rem',
								color: '#1a1a1a',
								borderBottom: '2px solid #e0e0e0',
								paddingBottom: '0.5rem',
							}}
						>
							Company Form - Romania Privacy Policy
						</h2>

						<p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
							Company Form - Romania "the App" provides company formation and business registration
							services "the Service" to merchants who use Shopify to power their stores. This Privacy
							Policy describes how personal information is collected, used, and shared when you install or
							use the App in connection with your Shopify-supported store.
						</p>

						<h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: '#2c3e50' }}>
							Personal Information the App Collects
						</h3>

						<p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
							When you install the App, we are automatically able to access certain types of information
							from your Shopify account:
						</p>
						<ul style={{ marginBottom: '1.5rem', paddingLeft: '2rem' }}>
							<li style={{ marginBottom: '0.5rem' }}>
								Store information (store name, domain, currency, timezone)
							</li>
							<li style={{ marginBottom: '0.5rem' }}>
								Product data (titles, descriptions, variants, inventory)
							</li>
							<li style={{ marginBottom: '0.5rem' }}>
								Order data (order details, customer information, shipping addresses)
							</li>
							<li style={{ marginBottom: '0.5rem' }}>
								Customer data (names, email addresses, phone numbers, addresses)
							</li>
							<li style={{ marginBottom: '0.5rem' }}>
								Theme and app data (theme information, installed apps)
							</li>
						</ul>

						<p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
							Additionally, we collect the following types of personal information from you and/or your
							customers once you have installed the App:
						</p>
						<ul style={{ marginBottom: '1.5rem', paddingLeft: '2rem' }}>
							<li style={{ marginBottom: '0.5rem' }}>
								Information about you and others who may access the App on behalf of your store, such as
								your name, address, email address, phone number, and billing information
							</li>
							<li style={{ marginBottom: '0.5rem' }}>
								Information about individuals who visit your store, such as their IP address, web
								browser details, time zone, and information about the cookies installed on the
								particular device
							</li>
							<li style={{ marginBottom: '0.5rem' }}>
								Company formation documents and business registration information
							</li>
							<li style={{ marginBottom: '0.5rem' }}>
								Legal entity details and corporate structure information
							</li>
						</ul>

						<p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
							We collect personal information directly from the relevant individual, through your Shopify
							account, or using the following technologies:
						</p>
						<ul style={{ marginBottom: '1.5rem', paddingLeft: '2rem' }}>
							<li style={{ marginBottom: '0.5rem' }}>
								"Cookies" are data files that are placed on your device or computer and often include an
								anonymous unique identifier. For more information about cookies, and how to disable
								cookies, visit{' '}
								<a
									href="http://www.allaboutcookies.org"
									target="_blank"
									rel="noopener noreferrer"
									style={{ color: '#3498db', textDecoration: 'underline' }}
								>
									http://www.allaboutcookies.org
								</a>
								.
							</li>
							<li style={{ marginBottom: '0.5rem' }}>
								"Log files" track actions occurring on the Site, and collect data including your IP
								address, browser type, Internet service provider, referring/exit pages, and date/time
								stamps.
							</li>
							<li style={{ marginBottom: '0.5rem' }}>
								"Web beacons," "tags," and "pixels" are electronic files used to record information
								about how you browse the Site.
							</li>
						</ul>

						<h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: '#2c3e50' }}>
							How Do We Use Your Personal Information?
						</h3>

						<p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
							We use the personal information we collect from you and your customers in order to provide
							the Service and to operate the App. Additionally, we use this personal information to:
						</p>
						<ul style={{ marginBottom: '1.5rem', paddingLeft: '2rem' }}>
							<li style={{ marginBottom: '0.5rem' }}>Communicate with you</li>
							<li style={{ marginBottom: '0.5rem' }}>Optimize or improve the App</li>
							<li style={{ marginBottom: '0.5rem' }}>
								Provide you with information or advertising relating to our products or services
							</li>
							<li style={{ marginBottom: '0.5rem' }}>Process company formation applications</li>
							<li style={{ marginBottom: '0.5rem' }}>Handle business registration procedures</li>
							<li style={{ marginBottom: '0.5rem' }}>Comply with legal and regulatory requirements</li>
						</ul>

						<h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: '#2c3e50' }}>
							Sharing Your Personal Information
						</h3>

						<p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
							We may share your personal information with:
						</p>
						<ul style={{ marginBottom: '1.5rem', paddingLeft: '2rem' }}>
							<li style={{ marginBottom: '0.5rem' }}>
								Service providers who assist in operating our app and providing company formation
								services
							</li>
							<li style={{ marginBottom: '0.5rem' }}>
								Legal authorities and government agencies for business registration purposes
							</li>
							<li style={{ marginBottom: '0.5rem' }}>
								Third-party partners involved in the company formation process
							</li>
						</ul>

						<p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
							Finally, we may also share your Personal Information to comply with applicable laws and
							regulations, to respond to a subpoena, search warrant or other lawful request for
							information we receive, or to otherwise protect our rights.
						</p>

						<h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: '#2c3e50' }}>
							Your Rights
						</h3>

						<p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
							If you are a European resident, you have the right to access personal information we hold
							about you and to ask that your personal information be corrected, updated, or deleted. If
							you would like to exercise this right, please contact us through the contact information
							below.
						</p>

						<p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
							Additionally, if you are a European resident we note that we are processing your information
							in order to fulfill contracts we might have with you (for example if you make an order
							through the Site), or otherwise to pursue our legitimate business interests listed above.
							Additionally, please note that your information will be transferred outside of Europe,
							including to Canada and the United States.
						</p>

						<h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: '#2c3e50' }}>
							Data Retention
						</h3>

						<p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
							When you place an order through the Site, we will maintain your Order Information for our
							records unless and until you ask us to delete this information. We retain company formation
							and business registration data as required by law and for the duration necessary to provide
							our services.
						</p>

						<h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: '#2c3e50' }}>
							Changes
						</h3>

						<p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
							We may update this privacy policy from time to time in order to reflect, for example,
							changes to our practices or for other operational, legal or regulatory reasons.
						</p>

						<h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: '#2c3e50' }}>
							Contact Us
						</h3>

						<p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
							For more information about our privacy practices, if you have questions, or if you would
							like to make a complaint, please contact us by e-mail at{' '}
							<a
								href="mailto:apps@vevolmedia.com"
								style={{ color: '#3498db', textDecoration: 'underline' }}
							>
								apps@vevolmedia.com
							</a>{' '}
							or by mail using the details provided below:
						</p>

						<div
							style={{
								backgroundColor: '#f8f9fa',
								padding: '1.5rem',
								borderRadius: '8px',
								borderLeft: '4px solid #3498db',
								marginTop: '1rem',
							}}
						>
							<p style={{ margin: '0', fontSize: '1.1rem', fontWeight: '500' }}>
								Vevol Media
								<br />
								<span style={{ fontSize: '0.9rem' }}>
									<strong>Corporate Office:</strong> Kildare Town, Co. Kildare, Ireland.
									<br />
									<strong>Registered Office:</strong> Ground Floor, 71 Lower Baggot Street, Dublin,
									D02 P593, Ireland.
									<br />
									<strong>Registration No:</strong> 705441
									<br />
									<strong>VAT No:</strong> IE3919679TH
								</span>
							</p>
						</div>
					</div>
				</Container>
			</VevolSection>
		</Layout>
	);
}
