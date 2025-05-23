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
				<meta name="description" content="Privacy Policy for the Company Form - Romania Shopify App by Vevol Media." />
			</Helmet>
			<SlimHero heading="Privacy Policy" subheading="Last Updated: 22/05/2025" />
			<VevolSection backgroundColour={'white'}>
				<Container className="privacy-policy__wrapper">
					<h2>1. Information We Collect</h2>
					<h3>1.1 Protected Customer Data</h3>
					<ul>
						<li>Customer information (names, email addresses, phone numbers)</li>
						<li>Order information</li>
						<li>Shipping and billing addresses</li>
						<li>Purchase history</li>
					</ul>
					<h3>1.2 Merchant Data</h3>
					<ul>
						<li>Store information</li>
						<li>Product data</li>
						<li>Order management data</li>
					</ul>

					<h2>2. How We Use Your Information</h2>
					<ul>
						<li>Provide and maintain our app's functionality</li>
						<li>Process orders and transactions</li>
						<li>Improve our services</li>
						<li>Communicate with merchants about their account</li>
						<li>Comply with legal obligations</li>
					</ul>

					<h2>3. Data Protection</h2>
					<ul>
						<li>Encryption of data both in transit and at rest</li>
						<li>Regular security assessments</li>
						<li>Access controls and authentication</li>
						<li>Secure data backup procedures</li>
						<li>Staff access limitations to protected customer data</li>
					</ul>

					<h2>4. Data Retention</h2>
					<ul>
						<li>Provide our services</li>
						<li>Comply with legal obligations</li>
						<li>Resolve disputes</li>
						<li>Enforce our agreements</li>
					</ul>

					<h2>5. Data Sharing and Third Parties</h2>
					<p>We do not sell or rent your personal information. We may share data with:</p>
					<ul>
						<li>Service providers who assist in operating our app</li>
						<li>Legal authorities when required by law</li>
						<li>Third parties with your explicit consent</li>
					</ul>

					<h2>6. Your Rights</h2>
					<ul>
						<li>Access your personal data</li>
						<li>Correct inaccurate data</li>
						<li>Request deletion of your data</li>
						<li>Opt-out of data processing</li>
						<li>Export your data</li>
					</ul>

					<h2>7. Automated Decision Making</h2>
					<p>If our app uses automated decision-making that could have legal or significant effects, you have the right to:</p>
					<ul>
						<li>Request human intervention</li>
						<li>Express your point of view</li>
						<li>Contest the decision</li>
					</ul>

					<h2>8. International Data Transfers</h2>
					<p>If we transfer data internationally, we ensure appropriate safeguards are in place to protect your information.</p>

					<h2>9. Changes to This Policy</h2>
					<p>We may update this privacy policy periodically. We will notify you of any material changes through the app or via email.</p>

					<h2>10. Contact Us</h2>
					<p>For any privacy-related questions or concerns, please contact us at:<br />[Your Contact Information]</p>

					<h2>11. Compliance</h2>
					<p>This privacy policy complies with:</p>
					<ul>
						<li>Shopify's Protected Customer Data Requirements</li>
						<li>General Data Protection Regulation (GDPR)</li>
						<li>California Consumer Privacy Act (CCPA)</li>
						<li>Other applicable data protection laws</li>
					</ul>
				</Container>
			</VevolSection>
		</Layout>
	);
} 