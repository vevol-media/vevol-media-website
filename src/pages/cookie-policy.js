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
				<title>Cookie Policy</title>
				<meta name="description" content="Read more about Vevol Media's Cookie Policy." />
			</Helmet>
			<SlimHero heading="Cookie Policy" />
			<VevolSection backgroundColour={'white'}>
				<Container>
					<p>
						<strong>What Are Cookies</strong>
					</p>
					<p className="mt-3">
						As is common practice with almost all professional websites this site uses cookies, which are
						tiny files that are downloaded to your computer, to improve your experience. This page describes
						what information they gather, how we use it and why we sometimes need to store these cookies. We
						will also share how you can prevent these cookies from being stored however this may downgrade
						or 'break' certain elements of the sites functionality.
					</p>
					<p className="mt-3">
						<strong>How We Use Cookies</strong>
					</p>
					<p className="mt-3">
						We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no
						industry standard options for disabling cookies without completely disabling the functionality
						and features they add to this site. It is recommended that you leave on all cookies if you are
						not sure whether you need them or not in case they are used to provide a service that you use.
					</p>
					<p className="mt-3">
						<strong>Disabling Cookies</strong>
					</p>
					<p className="mt-3">
						You can prevent the setting of cookies by adjusting the settings on your browser (see your
						browser Help for how to do this). Be aware that disabling cookies will affect the functionality
						of this and many other websites that you visit. Disabling cookies will usually result in also
						disabling certain functionality and features of the this site. Therefore it is recommended that
						you do not disable cookies. This Cookies Policy was created with the help of the{' '}
						<a href="https://www.cookiepolicygenerator.com/cookie-policy-generator/">
							Cookies Policy Generator
						</a>
						.
					</p>
					<p className="mt-3">
						<strong>The Cookies We Set</strong>
					</p>
					<ul>
						<li>
							<p className="mt-3">Forms related cookies</p>
							<p className="mt-3">
								When you submit data to through a form such as those found on contact pages or comment
								forms cookies may be set to remember your user details for future correspondence.
							</p>
						</li>
					</ul>
					<p className="mt-3">
						<strong>Third Party Cookies</strong>
					</p>
					<p className="mt-3">
						In some special cases we also use cookies provided by trusted third parties. The following
						section details which third party cookies you might encounter through this site.
					</p>
					<ul>
						<li>
							<p className="mt-3">
								This site uses Google Analytics which is one of the most widespread and trusted
								analytics solution on the web for helping us to understand how you use the site and ways
								that we can improve your experience. These cookies may track things such as how long you
								spend on the site and the pages that you visit so we can continue to produce engaging
								content.
							</p>
							<p className="mt-3">
								For more information on Google Analytics cookies, see the official Google Analytics
								page.
							</p>
						</li>
						<li>
							<p className="mt-3">
								As we sell products it's important for us to understand statistics about how many of the
								visitors to our site actually make a purchase and as such this is the kind of data that
								these cookies will track. This is important to you as it means that we can accurately
								make business predictions that allow us to monitor our advertising and product costs to
								ensure the best possible price.
							</p>
						</li>
					</ul>
					<p className="mt-3">
						<strong>More Information</strong>
					</p>
					<p className="mt-3">
						Hopefully that has clarified things for you and as was previously mentioned if there is
						something that you aren't sure whether you need or not it's usually safer to leave cookies
						enabled in case it does interact with one of the features you use on our site.
					</p>
					<p className="mt-3">
						For more general information on cookies, please read{' '}
						<a href="https://www.cookiepolicygenerator.com/sample-cookies-policy/">
							the Cookies Policy article
						</a>
						.
					</p>
					<p className="mt-3">
						However if you are still looking for more information then you can contact us through one of our
						preferred contact methods:
					</p>
					<ul>
						<li>Email: hello@vevolmedia.com</li>
					</ul>
				</Container>
			</VevolSection>
		</Layout>
	);
}
