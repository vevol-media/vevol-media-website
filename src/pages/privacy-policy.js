import React from 'react';
import Layout from '../components/layout/layout';
import { Helmet } from 'react-helmet';
import VevolSection from '../components/general-components/vm-section';
import { Container } from 'bloomer/lib/layout/Container';
import SlimHero from '../components/slim-hero/slim-hero';

export default function Page() {
	return (
		<Layout>
			<Helmet>
				<title>Privacy Policy</title>
				<meta name="description" content="Read more about Vevol Media's Privacy Policy." />
			</Helmet>
			<SlimHero heading="Privacy Policy" subheading="Last updated: 20th July 2023" />
			<VevolSection backgroundColour={'white'}>
				<Container className="privacy-policy__wrapper">
					<p>
						<strong>1. Introduction</strong>
					</p>
					<p className="mt-3">
						Welcome to Vevol Media Limited ("Vevol", “Vevol Media”, "we", "us" or "our"). Your privacy is of utmost importance to us, and
						we are committed to safeguarding and preserving the privacy of the personal data we gather about our customers and service
						users ("you" or "your").
					</p>
					<p className="mt-3">
						This privacy policy's objective is to present a clear and comprehensive explanation of the personal data we collect from you
						when you interact with our website or utilise our services. In these circumstances, we are designated as the data controller.
					</p>
					<p className="mt-3">
						We urge you to regularly review this privacy policy as it may be revised periodically to reflect modifications in how we
						deliver our services or comply with regulatory requirements. If you have any questions or concerns about this privacy policy
						or the way we handle your data, you can contact us using the details provided below or send us an email at
						hello@vevolmedia.com.
					</p>
					<p className="mt-5">
						<strong>2. What Personal Data We Collect and How</strong>
					</p>
					<p className="mt-3">
						As part of our compliance with the Irish General Data Protection Regulation (“GDPR”), we responsibly collect, process, and
						manage specific personal data about you. This personal data might include, but is not limited to:
						<ul>
							<li>
								Contact details such as your name, phone number, email address, your website URL, your location (city) and your
								company name. We collect these details when you fill in our Contact form.
							</li>
							<li>
								Information about your online interactions with us via cookies and other similar technologies, which may include
								details such as your IP address and geographical location.
							</li>
							<li>Any other additional information you may voluntarily provide to us as part of Vevol's market research activities.</li>
						</ul>
					</p>
					<p className="mt-3">
						Please refer to our Cookie Policy for a more detailed account of the personal data we collect via cookies and similar
						technologies.
					</p>
					<p className="mt-3">
						All personal data that we process is collected directly from you. This collection may occur in person, over the phone, via
						text or email, or through our website when you submit a form, subscribe to a newsletter, or interact with our services.
					</p>
					<p className="mt-5">
						<strong>3. Why We Use Your Personal Data and the Legal Bases for Processing</strong>
					</p>
					<p className="mt-3">
						In the course of offering our services to you, we may use your personal data for a variety of purposes. The legal bases for
						this data processing include:
						<ul>
							<li>
								Provision of our services to you: This involves processing necessary for the performance of a contract to which you
								are a party. If you do not provide the necessary data in these cases, we will be unable to deliver our services to
								you.
							</li>
							<li>
								Compliance with our legal obligations: This involves processing your personal data where it's necessary for compliance
								with a legal obligation to which we are subject.
							</li>
							<li>
								Sending marketing communications: With your consent, we may use your personal data to send you marketing
								communications about our services or other relevant business information via email or similar technology.
							</li>
							<li>
								Personalisation of your website experience: Based on our legitimate interest, we aim to enhance your browsing
								experience by personalising your visits to our website and making sure you can easily navigate and find the
								information you're looking for.
							</li>
							<li>
								Communication following your market research feedback: Also based on our legitimate interest, we might use your
								personal data to get in touch with you when you provide us with market research feedback. This allows us to
								continuously improve and ensure our services meet your expectations and remain relevant in the market.
							</li>
						</ul>
					</p>
					<p className="mt-3">
						You can choose to opt out of receiving marketing communications at any point by using the unsubscribe links in any marketing
						email we send. Once you opt out, we will suppress your details to ensure you no longer receive marketing communications.
					</p>
					<p className="mt-5">
						<strong>4. How We Share Your Personal Data</strong>
					</p>
					<p className="mt-3">
						For certain business operations, we may need to share your personal data with our vendors, partners, and third-party service
						providers. For example, this could include sharing data with providers who assist us in delivering our email marketing
						services.
					</p>
					<p className="mt-3">
						We may also be required to share personal data with government authorities and/or law enforcement agencies for crime
						prevention or detection, if we are required by law, or if the data is necessary for a legal or contractual claim.
					</p>
					<p className="mt-3">
						{' '}
						Please note that your personal data may be processed outside of Ireland, but we have taken measures to ensure that it enjoys
						similar levels of protection as it would within Ireland. These measures include:
						<ul>
							<li>
								Ensuring that your personal data is only processed in a country which the Irish government confirms offers adequate
								data protection.
							</li>
							<li>
								Entering into Standard Contractual Clauses (SCCs) with our affiliates and providers and implementing additional
								safeguards, where necessary.
							</li>
						</ul>
					</p>
					<p className="mt-5">
						<strong>5. How Long We Retain Your Personal Data and How We Secure It</strong>
					</p>
					<p className="mt-3">
						We keep your personal data for as long as it's necessary to provide you with our services, and for a reasonable period
						thereafter to enable us to meet our contractual and legal obligations and to address complaints and claims.
					</p>
					<p className="mt-3">
						Once the retention period ends, your personal data will be securely deleted or anonymised. For instance, it may be aggregated
						with other data so that it can be used in a non-identifiable way for statistical analysis and business planning.
					</p>
					<p className="mt-3">
						We make a concerted effort to ensure the secure processing of all personal data. We have implemented robust technical and
						organisational measures to safeguard your data from unauthorised access, usage, alteration, or destruction.
					</p>
					<p className="mt-5">
						<strong>6. Your Rights and Choices</strong>
					</p>
					<p className="mt-3">
						You have certain rights concerning your personal data under the Irish GDPR:
						<ul>
							<li>The right to access your personal data and to request copies of it and information about our processing of it.</li>
							<li>The right to rectify any incorrect or incomplete personal data we hold about you.</li>
							<li>
								The right to withdraw your consent at any time, in cases where we are using your personal data based on your consent.
							</li>
							<li>
								The right to object to us using your personal data for our legitimate interests or for direct marketing purposes,
								including profiling for such purposes.
							</li>
							<li>The right to request the restriction of processing your personal data in certain circumstances.</li>
							<li> The right to request the erasure of your personal data in certain circumstances.</li>
							<li>
								The right to receive a machine-readable copy of your personal data, which you can then transfer to another service
								provider.
							</li>
							<li>
								The right not to be subject to a decision based solely on automated processing, including profiling, that has legal
								effects on you or similarly significantly impacts you.
							</li>
						</ul>
					</p>
					<p className="mt-3">
						You will not be charged a fee to access your personal data or to exercise any of the other rights. However, if your request
						for access is clearly unfounded or excessive, we may charge a reasonable fee or refuse to comply with the request.
					</p>
					<p className="mt-3">
						To exercise any of your rights, please contact us at hello@vevolmedia.com. If you are unsatisfied with our response, you also
						have the right to lodge a complaint with the Data Protection Commission. Details can be found at
						https://www.dataprotection.ie/.
					</p>
					<p className="mt-5">
						<strong>7. Links to Third-party Websites</strong>
					</p>
					<p className="mt-3">
						Our website may include hyperlinks to websites owned and operated by third parties. These websites have their own privacy
						policies and we strongly advise you to review them separately before submitting any personal data. We do not have control over
						and are not accountable for these third parties' collection, use, and disclosure of your personal information.
					</p>
					<p className="mt-5">
						<strong>8. How to Contact Us</strong>
					</p>
					<p className="mt-3">
						If you have any queries about this privacy policy, or if you wish to exercise any of your rights, you can contact us at:{' '}
						<strong>Ground Floor, 71 Lower Baggot Street, Dublin, D02 P593, Ireland</strong>.
					</p>

					<p className="mt-3">
						Alternatively, you can email us at <a href="mailto:hello@vevolmedia.com">hello@vevolmedia.com</a>. We will respond to your requests within a reasonable timeframe and in
						accordance with any applicable laws.
					</p>
				</Container>
			</VevolSection>
		</Layout>
	);
}
