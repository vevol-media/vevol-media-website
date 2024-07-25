import React from 'react';
import Layout from '../components/layout/layout';
import VevolSection from '../components/general-components/vm-section';
import { Container } from 'bloomer/lib/layout/Container';
import SlimHero from '../components/slim-hero/slim-hero';

export default function Page() {
	return (
		<Layout handle="cookie-policy">
			<SlimHero heading="Cookie Policy" />
			<VevolSection backgroundColour={'white'}>
				<Container className="cookie-policy__wrapper">
					<p>
						As one of the foremost Shopify agencies in Europe, Vevol Media Limited ("Vevol", “Vevol Media”,
						"we", "us" or "our") prioritises offering a top-notch experience on our website, which includes
						the use of cookies. This policy describes the type of cookies we employ and their purpose, as we
						believe it's crucial that you maintain control over your online privacy.
					</p>
					<p className="mt-5">
						<strong>1. Understanding Cookies</strong>
					</p>
					<p className="mt-3">
						Cookies are minuscule text files that a website can store on a user's computer. Their function
						is to enable the website to recognise its users upon subsequent visits or to permit other chosen
						websites to identify these users for a specific purpose.
					</p>
					<p className="mt-5">
						<strong>2. Classifications of Cookies</strong>
					</p>
					<p className="mt-3">
						Generally, cookies can be classified into functional and non-functional categories.
						Non-functional cookies include Performance cookies and Advertising/Targeting cookies. Functional
						cookies are crucial for a website to operate optimally. Without these cookies, the website usage
						would be impaired. An apt example of a functional cookie is the shopping cart of a webshop which
						stores the items you select.
					</p>
					<p className="mt-3">
						Performance cookies anonymously accumulate data for statistical purposes on how visitors use a
						website, including the duration of their visit and the pages they visit. These cookies help
						enhance the user experience on the website.
					</p>
					<p className="mt-3">
						Advertising/Tracking cookies are used to deliver advertisements and trace more user-specific
						information. They are commonly utilised to present advertisements based on the data tracked via
						these cookies. If you have ever noticed an influx of advertisements after searching for a
						product on a webshop, it is due to tracking cookies.
					</p>
					<p className="mt-3">
						While functional and performance cookies do not require explicit consent, they necessitate user
						information. Tracking cookies, on the other hand, need explicit user consent. Without this
						consent, it is not permitted to place tracking cookies.
					</p>
					<p className="mt-5">
						<strong>3. Functionality Cookies</strong>
					</p>
					<p className="mt-3">
						Functionality cookies, also known as strictly necessary cookies, are vital for appropriate
						website navigation and use. These cookies enable basic services like a shopping cart or login
						system. Without these cookies, you cannot utilise these services. They do not collect
						information about you for marketing or tracking purposes.
					</p>
					<p className="mt-3">
						It is not possible to block these cookies as they are essential for the website to function
						properly.
					</p>
					<p className="mt-5">
						<strong>4. Performance Cookies</strong>
					</p>
					<p className="mt-3">
						Performance cookies, also referred to as Analytical cookies, are employed for measurement
						purposes. They collect anonymous data for statistical purposes, enabling us to enhance the user
						experience on our website. They do not contain personal data.
					</p>
					<p className="mt-3">
						Currently, we utilise performance cookies from Google Analytics and Hotjar to gain these
						insights. Performance cookies are automatically placed whenever the website is visited.
					</p>
					<p className="mt-3">
						{' '}
						We collect data such as:
						<ul>
							<li>Number of visits and visitors to our web pages</li>
							<li>Duration of the visit</li>
							<li>
								Information about the web browser and device used to visit our website, including
								operating system and screen size. This information helps us optimise our website
								performance.
							</li>
							<li>Visitor’s company and other professional details</li>
							<li>
								How a visitor arrived at our website, for instance, via an advertisement or a link in an
								email.
							</li>
						</ul>
					</p>
					<p className="mt-3">
						Our performance cookies do not collect personal data or IP addresses. For further information on
						how Google and Hotjar process the data, please refer to their privacy policies. Please note that
						these policies may change over time.
					</p>
					<p className="mt-3">We never provide complete personal data to Hotjar and Google.</p>
					<p className="mt-5">
						<strong> Advertising and Targeting Cookies</strong>
					</p>
					<p className="mt-3">
						At present, we use services from Hubspot, Albacross, DoubleClick (Google), Meta, Klaviyo, and
						Meta Custom Audiences on our website. These services help us with targeted advertising and allow
						us to gather metadata on our visitors to better understand our target audiences.
					</p>
					<p className="mt-3">
						These cookies enable us to:
						<ul>
							<li>
								Monitor which advertisements you've seen to prevent the same ad from being displayed
								repetitively.
							</li>
							<li>Check how many visitors have clicked on the advertisements.</li>
							<li>Understand our target audience better to improve our services.</li>
						</ul>
					</p>
					<p className="mt-3">
						You may still see our advertisements even if you've declined our cookies because not all
						advertisements use cookies.
					</p>
					<p className="mt-3">
						For further information on how these companies process the data, please refer to their privacy
						policies:
						<ul>
							<li>Hubspot</li>
							<li>Albacross</li>
							<li>Google</li>
							<li>Meta</li>
							<li>Klaviyo</li>
							<li>Facebook</li>
						</ul>
					</p>
					<p className="mt-3">
						These cookies will only be placed on the computer once the visitor has granted the website
						permission to do so.
					</p>
					<p className="mt-5">
						<strong>6. How Can You Control Your Cookies?</strong>
					</p>
					<p className="mt-3">
						You can block the tracking and advertising cookies by clicking 'Decline' during your first visit
						to our website. This setting is stored for a year, after which you will be asked for consent
						again. The consent box can be re-displayed by clearing all the cookies from your computer.
						Instructions on how to do this for the most commonly used browsers are available online.
					</p>

					<p className="mt-3">
						<a
							href="https://support.microsoft.com/nl-nl/topic/cookies-verwijderen-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc"
							target="_blank"
							rel="noreferrer"
						>
							Remove cookies from Microsoft Internet Explorer
						</a>
					</p>
					<p>
						<a
							href="https://support.microsoft.com/nl-nl/microsoft-edge/browsergeschiedenis-weergeven-en-verwijderen-in-microsoft-edge-00cf7943-a9e1-975a-a33d-ac10ce454ca4"
							target="_blank"
							rel="noreferrer"
						>
							Remove cookies from Microsoft Edge
						</a>
					</p>
					<p>
						<a
							href="https://support.mozilla.org/nl/kb/cookies-verwijderen-gegevens-wissen-websites-opgeslagen"
							target="_blank"
							rel="noreferrer"
						>
							Remove cookies from Mozilla Firefox
						</a>
					</p>
					<p>
						<a
							href="https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&hl=nl"
							target="_blank"
							rel="noreferrer"
						>
							Remove cookies from Google Chrome
						</a>
					</p>
					<p>
						<a
							href="https://support.apple.com/nl-nl/guide/safari/sfri11471/mac#:~:text=Websites%2C%20derden%20en%20adverteerders%20kunnen%20cookies%20en%20andere%20gegevens%20op,'%20of%20'Verwijder%20alles'."
							target="_blank"
							rel="noreferrer"
						>
							Remove cookies from Apple Safari
						</a>
					</p>
				</Container>
			</VevolSection>
		</Layout>
	);
}
