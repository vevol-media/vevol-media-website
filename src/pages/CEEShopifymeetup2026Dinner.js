import React, { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import '../components/cee-meetup-2026-private-dinner/cee-meetup-2026-private-dinner.scss';
import Layout from '../components/layout/layout';
import abhishekChandraImage from '../images/cee-meetup-2026-private-dinner/abhishek-chandra.svg';
import anaOpritaImage from '../images/cee-meetup-2026-private-dinner/ana-oprita.svg';
import bogdanDogaruImage from '../images/cee-meetup-2026-private-dinner/bogdan-dogaru.svg';
import catalinCiochinaImage from '../images/cee-meetup-2026-private-dinner/catalin-ciochina.svg';
import ciprianCazacuImage from '../images/cee-meetup-2026-private-dinner/ciprian-cazacu.svg';
import davidSimaImage from '../images/cee-meetup-2026-private-dinner/david-sima.svg';
import graceRadleyImage from '../images/cee-meetup-2026-private-dinner/grace-radley.svg';
import ilieMihalacheImage from '../images/cee-meetup-2026-private-dinner/ilie-mihalache.svg';
import paulApostuImage from '../images/cee-meetup-2026-private-dinner/paul-apostu.svg';
import prakharShrivastavaImage from '../images/cee-meetup-2026-private-dinner/prakhar-shrivastava.svg';
import raresBanescuImage from '../images/cee-meetup-2026-private-dinner/rares-banescu.svg';
import thanasisPsychogiosImage from '../images/cee-meetup-2026-private-dinner/thanasis-psychogios.svg';
import tudorGoiceaImage from '../images/cee-meetup-2026-private-dinner/tudor-goicea.svg';

const mainAgenda = [
	{ time: '08:00-08:45', title: 'Reception and Check-in: pastries, coffee and tea', type: 'break' },
	{
		time: '09:20-09:35',
		title: 'What 1,000+ CEE Merchants Taught Us About Multichannel Growth',
		speaker: 'Ciprian Cazacu · Co-Founder & CEO, Easy Sales',
	},
	{
		time: '09:40-10:10',
		title: 'Migration to Shopify: From Fragmentation to Unified Execution',
		speaker: 'David Sima · Key Account Executive, Vevol Media',
	},
	{
		time: '10:20-10:35',
		title: 'How a Luxury Bundle Builder Became a Premium Commerce Experience',
		speaker: 'Prakhar Shrivastava · Co-founder, FoxSell Bundles',
	},
	{
		time: '10:40-11:10',
		title: 'The Power of Data in eCommerce and Communication',
		speaker: 'Rareș Bănescu · Owner & Founder, TheMarketer',
	},
	{ time: '11:15-11:45', title: 'Networking break: snacks and beverages', type: 'break' },
	{
		time: '11:50-12:20',
		title: 'Decoding the Cart: Consumer Patterns from 50K Eshop-Affiliate Partnerships',
		speaker: 'Ana Opriță · Deputy CEO, BusinessLeague',
	},
	{
		time: '12:25-12:40',
		title: 'The Power of Less: Scaling a Global Brand with 6 People',
		speaker: 'Grace Radley · Senior Country Partnerships Manager, Mollie',
	},
	{
		time: '12:40-12:50',
		title: 'Shopping Simplified: From Cross-border to Borderless',
		speaker: 'Thanasis Psychogios · Sr. Intl. BD Manager, Skroutz',
	},
	{ time: '13:00-14:00', title: 'Lunch break: buffet included', type: 'break' },
	{ time: '14:00-15:00', title: 'Panel Discussion', speaker: '6 special guests · TBC' },
	{ time: '15:05-15:40', title: 'Abhishek Chandra', speaker: 'CRO, Gokwik' },
	{
		time: '15:45-16:15',
		title: 'AI-Powered Email Automation: Smarter Journeys. Higher Profits.',
		speaker: 'Paul Apostu · Chief Growth Officer, Ecommerce Today',
	},
	{ time: '16:20-16:35', title: 'Session TBA' },
	{ time: '16:40-17:10', title: 'Surprise Guests from Shopify', type: 'special' },
];

const workshopAgenda = [
	{ time: '09:00-10:15', title: 'Gokwik Workshop', speaker: 'Topic TBA' },
	{ time: '10:15-11:30', title: 'Ecommerce Today Workshop', speaker: 'Topic TBA' },
	{
		time: '11:30-12:45',
		title: 'More Revenue, Same Traffic: A Step-by-Step Guide to AI Personalization That Converts',
		speaker: 'Aqurate',
	},
	{ time: '14:00-15:15', title: 'From Data to Success: Automated Flows That Bring Results', speaker: 'TheMarketer' },
	{ time: '15:15-16:30', title: 'Vevol Media Workshop', speaker: 'Topic TBA' },
	{ time: '16:30-17:45', title: 'xConnector Workshop', speaker: 'Topic TBA' },
];

const speakers = [
	{ initials: 'C', name: 'Ciprian Cazacu', role: 'Co-Founder & CEO · Easy Sales', bg: '#1a1a1a', image: ciprianCazacuImage },
	{ initials: 'D', name: 'David Sima', role: 'Key Account Executive · Vevol Media', bg: '#5C6AC4', image: davidSimaImage },
	{ initials: 'P', name: 'Prakhar Shrivastava', role: 'Co-founder · FoxSell Bundles', bg: '#22ffb8', image: prakharShrivastavaImage },
	{ initials: 'R', name: 'Rareș Bănescu', role: 'Founder · TheMarketer', bg: '#2c5282', image: raresBanescuImage },
	{ initials: 'A', name: 'Ana Opriță', role: 'Deputy CEO · BusinessLeague', bg: '#744210', image: anaOpritaImage },
	{ initials: 'G', name: 'Grace Radley', role: 'Sr. Country Partnerships · Mollie', bg: '#276749', image: graceRadleyImage },
	{ initials: 'T', name: 'Thanasis Psychogios', role: 'Sr. Intl. BD Manager · Skroutz', bg: '#702459', image: thanasisPsychogiosImage },
	{ initials: 'Ab', name: 'Abhishek Chandra', role: 'CRO · Gokwik', bg: '#1a365d', image: abhishekChandraImage },
	{ initials: 'Pa', name: 'Paul Apostu', role: 'Chief Growth Officer · Ecommerce Today', bg: '#553c9a', image: paulApostuImage },
	{ initials: 'B', name: 'Bogdan Dogaru', role: 'CTO · Vevol Media', bg: '#0a6e4a', image: bogdanDogaruImage },
	{ initials: 'I', name: 'Ilie Mihalache', role: 'Partnership Support · TheMarketer', bg: '#b45309', image: ilieMihalacheImage },
	{ initials: 'Tu', name: 'Tudor Goicea', role: 'Co-founder & CRO · Aqurate', bg: '#1e6091', image: tudorGoiceaImage },
	{ initials: 'Ca', name: 'Catalin Ciochina', role: 'Founder · xConnector', bg: '#6b21a8', image: catalinCiochinaImage },
	{ initials: '?', name: 'Surprise Guest', role: 'Shopify', bg: '#22ffb8', surprise: true },
	{ initials: '?', name: 'Surprise Guest', role: 'Shopify', bg: '#0fd49a', surprise: true },
	{ initials: '?', name: 'Surprise Guest', role: 'Shopify', bg: '#0fd49a', surprise: true },
];

const expectedItems = [
	'🎤 High-impact talks from top eCommerce leaders across CEE and beyond',
	'🛠 Hands-on workshops with practical takeaways you can use straight away',
	'🤝 Real networking with 200+ merchants, agencies and app developers',
	'🍽️ Lunch included, because great ideas need fuel',
	'🍸 Afterparty to keep the conversations going after the talks end',
	"⭐ A curated Shopify community experience you'll want to return to every year",
];

export default function CeeMeetup2026PrivateDinnerPage() {
	const [activeTrack, setActiveTrack] = useState('main');

	useEffect(() => {
		if (typeof window === 'undefined' || !window.IntersectionObserver) {
			return undefined;
		}

		const observer = new window.IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('visible');
					}
				});
			},
			{ threshold: 0.08 },
		);

		const revealElements = document.querySelectorAll('.cee-dinner-page .reveal');
		revealElements.forEach((element) => observer.observe(element));

		return () => {
			revealElements.forEach((element) => observer.unobserve(element));
			observer.disconnect();
		};
	}, []);

	const activeAgenda = useMemo(() => (activeTrack === 'main' ? mainAgenda : workshopAgenda), [activeTrack]);

	const metaTitle = "CEE Shopify Meetup 2026 - You're Invited";
	const metaDescription = 'Exclusive pre-event dinner invitation and VIP access for CEE Shopify Meetup 2026 in Bucharest, May 27-28.';
	const pageUrl = 'https://www.vevolmedia.com/CEEShopifymeetup2026Dinner';

	return (
		<Layout hasMainForm={false} hasHeader={false} hasFooter={false} customClass={'cee-dinner-page'}>
			<Helmet>
				<title>{metaTitle}</title>
				<meta name="description" content={metaDescription} />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link
					href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,300&family=DM+Serif+Display:ital@0;1&display=swap"
					rel="stylesheet"
				/>
				<link rel="canonical" href={pageUrl} />
				<meta property="og:url" content={pageUrl} />
				<meta property="og:type" content="website" />
				<meta property="og:title" content={metaTitle} />
				<meta property="og:description" content={metaDescription} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:creator" content="@VevolMedia" />
				<meta property="twitter:domain" content="vevolmedia.com" />
				<meta property="twitter:url" content={pageUrl} />
				<meta name="twitter:title" content={metaTitle} />
				<meta name="twitter:description" content={metaDescription} />
			</Helmet>

			<header className="top-bar">
				<div className="top-bar-brand">
					<div className="dot"></div>
					CEE Shopify Meetup 2026
				</div>
				<span className="top-bar-badge">Invitation</span>
			</header>

			<section className="hero">
				<div className="reveal">
					<div className="hero-eyebrow">
						<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5">
							<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
						</svg>
						A message for you
					</div>
				</div>
				<h1 className="reveal reveal-delay-1">
					You've been
					<br />
					<em>personally invited.</em>
				</h1>
				<div className="hero-opportunities reveal reveal-delay-2">
					<div className="hero-opp-item">
						<div className="hero-opp-icon">🍽️</div>
						<div className="hero-opp-text">
							<div className="hero-opp-label">May 27</div>
							<div className="hero-opp-title">Exclusive Pre-event Ecommerce Dinner</div>
						</div>
					</div>
					<div className="hero-opp-divider"></div>
					<div className="hero-opp-item">
						<div className="hero-opp-icon">🛍️</div>
						<div className="hero-opp-text">
							<div className="hero-opp-label">May 28</div>
							<div className="hero-opp-title">Central & Eastern European Shopify Meetup 2026</div>
						</div>
					</div>
				</div>
				<div className="hero-meta reveal reveal-delay-3">
					<div className="hero-meta-item">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
							<rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
							<line x1="16" y1="2" x2="16" y2="6" />
							<line x1="8" y1="2" x2="8" y2="6" />
							<line x1="3" y1="10" x2="21" y2="10" />
						</svg>
						May 27–28, 2026
					</div>
					<div className="hero-meta-item">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
							<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
							<circle cx="12" cy="10" r="3" />
						</svg>
						Bucharest, Romania
					</div>
					<div className="hero-meta-item">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
							<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
							<circle cx="9" cy="7" r="4" />
							<path d="M23 21v-2a4 4 0 0 0-3-3.87" />
							<path d="M16 3.13a4 4 0 0 1 0 7.75" />
						</svg>
						200+ attendees
					</div>
				</div>
				<div className="hero-cta-group reveal reveal-delay-4">
					<a href="https://form.jotform.com/261182815945362" target="_blank" rel="noopener noreferrer" className="btn-primary">
						Confirm dinner seat
					</a>
					<a
						href="https://www.eventbrite.com/e/1980132676138/?discount=VIPCEE"
						target="_blank"
						rel="noopener noreferrer"
						className="btn-secondary"
					>
						Get Complementary VIP Ticket
					</a>
				</div>
			</section>

			<section className="section" id="dinner">
				<div className="section-inner">
					<p className="section-label reveal">Private Dinner</p>
					<h2 className="section-heading reveal reveal-delay-1">
						An evening before
						<br />
						the main stage.
					</h2>
					<p className="section-intro reveal reveal-delay-2">
						The night before the meetup, we're hosting a curated dinner for a small group of brand and retail leaders we've personally
						selected. No pitches, no agenda, just great conversations over a great meal.
					</p>
					<div className="dinner-card reveal reveal-delay-3">
						<div className="exclusive-tag">
							<svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.5">
								<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
							</svg>
							Invite-only · Strictly limited seats
						</div>
						<div className="details-grid">
							<div className="detail-item">
								<div className="detail-icon">
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
										<rect x="3" y="4" width="18" height="18" rx="2" />
										<line x1="16" y1="2" x2="16" y2="6" />
										<line x1="8" y1="2" x2="8" y2="6" />
										<line x1="3" y1="10" x2="21" y2="10" />
									</svg>
								</div>
								<div className="detail-text">
									<span className="detail-label">Date</span>
									<span>Tuesday, May 27, 2026</span>
								</div>
							</div>
							<div className="detail-item">
								<div className="detail-icon">
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
										<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
										<circle cx="12" cy="10" r="3" />
									</svg>
								</div>
								<div className="detail-text">
									<span className="detail-label">Venue</span>
									<span>
										<a href="https://akos-restaurant.ro/" target="_blank" rel="noopener noreferrer" className="detail-link">
											Akos Restaurant
										</a>
										, Bucharest
									</span>
								</div>
							</div>
							<div className="detail-item">
								<div className="detail-icon">
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
										<circle cx="12" cy="12" r="10" />
										<polyline points="12 6 12 12 16 14" />
									</svg>
								</div>
								<div className="detail-text">
									<span className="detail-label">Time</span>
									<span>19:00</span>
								</div>
							</div>
							<div className="detail-item">
								<div className="detail-icon">
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
										<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
										<circle cx="9" cy="7" r="4" />
										<path d="M23 21v-2a4 4 0 0 0-3-3.87" />
										<path d="M16 3.13a4 4 0 0 1 0 7.75" />
									</svg>
								</div>
								<div className="detail-text">
									<span className="detail-label">Hosted by</span>
									<span>
										<a href="https://vevolmedia.com/" target="_blank" rel="noopener noreferrer" className="detail-link">
											Vevol Media
										</a>
										,{' '}
										<a href="https://ecommerce-today.com/" target="_blank" rel="noopener noreferrer" className="detail-link">
											Ecommerce Today
										</a>{' '}
										&amp;{' '}
										<a href="https://axon.ai/en" target="_blank" rel="noopener noreferrer" className="detail-link">
											Axon
										</a>
									</span>
								</div>
							</div>
						</div>
						<ul className="dinner-perks">
							<li>Intimate gathering of 20-30 carefully selected eCommerce leaders</li>
							<li>Curated guest list of key retailers, ecosystem builders, and leading Shopify representatives</li>
							<li>No pitches, no slides, just great conversations over a great dinner</li>
							<li>Complementary VIP Dinner & Drinks</li>
							<li>A warm start to the biggest Shopify event in Central and Eastern Europe</li>
						</ul>
						<a href="https://form.jotform.com/261182815945362" target="_blank" rel="noopener noreferrer" className="btn-primary">
							Confirm my seat at the dinner
						</a>
					</div>
				</div>
			</section>

			<section className="section section-white" id="event">
				<div className="section-inner">
					<p className="section-label reveal">The Main Event</p>
					<h2 className="section-heading reveal reveal-delay-1">Shopify Meetup CEE 2026</h2>
					<p className="section-intro reveal reveal-delay-2">
						The biggest official Shopify Meetup in Europe returns for its 2nd edition. After 200+ attendees in 2025, we're going bigger.
						Grand Hotel Bucharest, May 28.
					</p>
					<div className="details-grid reveal reveal-delay-3 event-details-grid">
						<div className="detail-item">
							<div className="detail-icon">
								<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
									<rect x="3" y="4" width="18" height="18" rx="2" />
									<line x1="16" y1="2" x2="16" y2="6" />
									<line x1="8" y1="2" x2="8" y2="6" />
									<line x1="3" y1="10" x2="21" y2="10" />
								</svg>
							</div>
							<div className="detail-text">
								<span className="detail-label">Date</span>
								<span>Wednesday, May 28, 2026</span>
							</div>
						</div>
						<div className="detail-item">
							<div className="detail-icon">
								<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
									<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
									<polyline points="9 22 9 12 15 12 15 22" />
								</svg>
							</div>
							<div className="detail-text">
								<span className="detail-label">Venue</span>
								<span>Grand Hotel Bucharest (ex-Intercontinental)</span>
							</div>
						</div>
						<div className="detail-item">
							<div className="detail-icon">
								<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
									<circle cx="12" cy="12" r="10" />
									<polyline points="12 6 12 12 16 14" />
								</svg>
							</div>
							<div className="detail-text">
								<span className="detail-label">Hours</span>
								<span>8:00 AM - 6:00 PM</span>
							</div>
						</div>
						<div className="detail-item">
							<div className="detail-icon">
								<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
									<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
									<circle cx="9" cy="7" r="4" />
									<path d="M23 21v-2a4 4 0 0 0-3-3.87" />
									<path d="M16 3.13a4 4 0 0 1 0 7.75" />
								</svg>
							</div>
							<div className="detail-text">
								<span className="detail-label">Attendance</span>
								<span>250+ expected</span>
							</div>
						</div>
					</div>

					<p className="sub-heading reveal">Agenda</p>
					<div className="track-tabs reveal reveal-delay-1" role="tablist" aria-label="Agenda tracks">
						<button
							type="button"
							className={`track-tab ${activeTrack === 'main' ? 'active' : ''}`}
							onClick={() => setActiveTrack('main')}
							role="tab"
							aria-selected={activeTrack === 'main'}
						>
							🎤 Main Stage
						</button>
						<button
							type="button"
							className={`track-tab ${activeTrack === 'workshops' ? 'active' : ''}`}
							onClick={() => setActiveTrack('workshops')}
							role="tab"
							aria-selected={activeTrack === 'workshops'}
						>
							🛠 Workshops
						</button>
					</div>

					{activeTrack === 'workshops' && <p className="workshop-note">Workshops run in parallel with the main stage in the Opera room.</p>}

					<div className="track-content active reveal reveal-delay-2">
						{activeAgenda.map((slot) => (
							<div key={`${slot.time}-${slot.title}`} className={`agenda-slot ${slot.type || ''}`.trim()}>
								<div className="agenda-time">{slot.time}</div>
								<div>
									<div className="agenda-title">{slot.title}</div>
									{slot.speaker && <div className="agenda-speaker">{slot.speaker}</div>}
								</div>
							</div>
						))}
					</div>

					<p className="sub-heading reveal">Speakers</p>
					<div className="speakers-grid reveal reveal-delay-1">
						{speakers.map((speaker, index) => (
							<div
								key={`${speaker.initials}-${speaker.name}-${index}`}
								className={`speaker-card ${speaker.surprise ? 'surprise' : ''}`.trim()}
							>
								<div className="speaker-avatar" style={{ background: speaker.bg }}>
									{speaker.image ? <img src={speaker.image} alt={speaker.name} loading="lazy" /> : speaker.initials}
								</div>
								<div className="speaker-name">{speaker.name}</div>
								<div className="speaker-role">{speaker.role}</div>
							</div>
						))}
					</div>

					<p className="sub-heading reveal">What to expect</p>
					<div className="expect-grid reveal reveal-delay-1">
						{expectedItems.map((item) => {
							const icon = item.split(' ')[0];
							const text = item.replace(`${icon} `, '');
							return (
								<div key={item} className="expect-item">
									<div className="expect-icon">{icon}</div>
									<div className="expect-text">{text}</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			<footer className="cee-dinner-footer">
				<div className="footer-inner">
					<div className="footer-brand">
						<a href="https://vevolmedia.com/" target="_blank" rel="noopener noreferrer" className="footer-brand-link">
							Vevol Media
						</a>
						<span className="footer-brand-sep">&amp;</span>
						<a href="https://ecommerce-today.com/" target="_blank" rel="noopener noreferrer" className="footer-brand-link">
							Ecommerce Today
						</a>
					</div>
					<div className="footer-sub">Shopify Plus Partners · Organisers Of CEE Shopify Meetup</div>
					<a href="https://www.linkedin.com/company/11138525" target="_blank" rel="noopener noreferrer" className="footer-link">
						<svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
							<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
							<rect x="2" y="9" width="4" height="12" />
							<circle cx="4" cy="4" r="2" />
						</svg>
						Follow on LinkedIn
					</a>
					<div className="footer-divider"></div>
					<div className="footer-legal">© 2026 Vevol Media · CEE Shopify Meetup · Bucharest, Romania</div>
				</div>
			</footer>
		</Layout>
	);
}
