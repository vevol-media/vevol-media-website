import Layout from '../components/layout/layout';
import React, { useRef } from 'react';
import SlimHero from '../components/slim-hero/slim-hero';
import { Container } from 'bloomer';
import VevolSection from '../components/general-components/vm-section';
import { Helmet } from 'react-helmet';
import ServicePlans from '../components/service-plans/service-plans';
import HeadingBlock from '../components/heading-block/heading-block';
import FeaturesIndex from '../components/features-index/features-index';
import SideDrawerModal from '../components/side-drawer-modal/side-drawer-modal';
import MainForm from '../components/forms/main-form';
import { useState } from 'react';

export default function Page() {
	const featuresIndexRef = useRef();
	const scrollToFeatures = () => {
		featuresIndexRef.current.scrollIntoView({
			behavior: 'smooth',
			block: 'center',
		});
	};

	const [toggleModalContact, setToggleModalContact] = useState(false);

	const handleToggleModalContact = (e) => {
		if (e) {
			if (
				e.target.classList.contains('side-drawer--open') ||
				e.target.classList.contains('side-drawer__close')
			) {
				setToggleModalContact(false);

				return;
			}
		}
		toggleModalContact === true
			? setToggleModalContact(false)
			: setToggleModalContact(true);
	};
	return (
		<Layout>
			<Helmet>
				<title>Service Plans - Vevol Media</title>
				<meta
					name="description"
					content="Reduce your service costs with our monthly, quaterly or yearly service plans. Choose one of our innovation packages and let's build your future together."
				/>
			</Helmet>
			<SlimHero
				heading="Service Plans"
				subheading="Cut down on your maintenance or development costs by paying a montly, quaterly or yearly fee."
			/>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<HeadingBlock
						title={'Get Expert Services Regularly'}
						highlightedWord={'Expert'}
						className="mb-4em"
						subtitle={
							'Enable your business to grow faster and bigger with our feature packed service plans.'
						}
					/>
					<ServicePlans
						scrollToFeatures={scrollToFeatures}
						toggleModalContact={handleToggleModalContact}
					/>
				</Container>
			</VevolSection>
			<VevolSection backgroundColour={'grey'}>
				<Container>
					<HeadingBlock
						title={'Features Index'}
						highlightedWord={'Features'}
						className="mb-4em"
						subtitle={
							'Learn more about each feature included in our plans'
						}
					/>
					<FeaturesIndex featuresIndexRef={featuresIndexRef} />
				</Container>
			</VevolSection>

			<SideDrawerModal
				toggleModalContact={handleToggleModalContact}
				valueToggleModalContact={toggleModalContact}
			>
				<MainForm
					title={"Let's Talk About Your Business"}
					subtitle={
						"Get in touch with us if you want to get a quote for your project or simply want to say hello! We'd love to hear from you!"
					}
				></MainForm>
			</SideDrawerModal>
		</Layout>
	);
}
