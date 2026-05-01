import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import '../components/cee-meetup-2026/cee-meetup-2026.scss';
import Layout from '../components/layout/layout';
import useMeetupLandingEffects from '../components/cee-meetup-2026/hooks/useMeetupLandingEffects';
import EditionsSection from '../components/cee-meetup-2026/sections/EditionsSection';
import LocationSection from '../components/cee-meetup-2026/sections/LocationSection';
import RegisterSection from '../components/cee-meetup-2026/sections/RegisterSection';
import SponsorsSection from '../components/cee-meetup-2026/sections/SponsorsSection';
import {
	carouselLogos,
	editionsGallerySlots,
	editionsStats,
	expectedItems,
	locationPhotos,
	mainAgenda,
	speakers,
	sponsorTiers,
	workshopAgenda,
} from '../components/cee-meetup-2026/data/meetupData';

export default function CeeShopifyMeetup2026Page() {
	const [activeTrack, setActiveTrack] = useState('main');
	const { locationPhotoOne, locationPhotoTwo, locationPhotoThree } = locationPhotos;

	useMeetupLandingEffects();

	const activeAgenda = useMemo(() => (activeTrack === 'main' ? mainAgenda : workshopAgenda), [activeTrack]);

	const metaTitle = "CEE Shopify Meetup 2026 - You're Invited";
	const metaDescription =
		'Official CEE Shopify Meetup 2026 in Bucharest on May 28. Join 250+ merchants, partners, and operators for talks, workshops, and networking.';
	const pageUrl = 'https://www.vevolmedia.com/CEEShopifymeetup2026';

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
				<span className="top-bar-badge">May 28 · Bucharest</span>
			</header>

			<section className="hero" id="hero">
				<canvas id="hero-canvas"></canvas>
				<div className="reveal">
					<div className="hero-eyebrow">
						<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5">
							<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
						</svg>
						Official Shopify Meetup · Central & Eastern Europe
					</div>
				</div>
				<h1 className="reveal reveal-delay-1">
					<span className="w">Central</span> <span className="w">&amp;</span> <span className="w">Eastern</span>{' '}
					<span className="w">European</span>
					<br />
					<span className="w">Shopify</span> <span className="w">Meetup</span> <span className="w">2026</span>
				</h1>
				<p className="hero-organisers reveal reveal-delay-2">
					<a href="https://vevolmedia.com/" target="_blank" rel="noopener noreferrer">
						Vevol Media
					</a>
					<span className="sep">&amp;</span>
					<a href="https://ecommerce-today.com/" target="_blank" rel="noopener noreferrer">
						Ecommerce Today
					</a>
				</p>
				<div className="hero-stats reveal reveal-delay-3">
					<div className="hero-stat">
						<div className="hero-stat-num">
							<em>250+</em>
						</div>
						<div className="hero-stat-label">Attendees</div>
					</div>
					<div className="hero-stat">
						<div className="hero-stat-num">
							<em>18+</em>
						</div>
						<div className="hero-stat-label">Speakers</div>
					</div>
					<div className="hero-stat">
						<div className="hero-stat-num">
							<em>2</em>
						</div>
						<div className="hero-stat-label">Tracks</div>
					</div>
					<div className="hero-stat">
						<div className="hero-stat-num">
							<em>1</em>
						</div>
						<div className="hero-stat-label">Day</div>
					</div>
				</div>
				<div className="hero-meta reveal reveal-delay-4">
					<div className="hero-meta-item">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
							<rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
							<line x1="16" y1="2" x2="16" y2="6" />
							<line x1="8" y1="2" x2="8" y2="6" />
							<line x1="3" y1="10" x2="21" y2="10" />
						</svg>
						Wednesday, May 28, 2026
					</div>
					<div className="hero-meta-item">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
							<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
							<circle cx="12" cy="10" r="3" />
						</svg>
						Grand Hotel Bucharest
					</div>
					<div className="hero-meta-item">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
							<circle cx="12" cy="12" r="10" />
							<polyline points="12 6 12 12 16 14" />
						</svg>
						8:00 AM - 6:00 PM
					</div>
				</div>
				<div className="hero-countdown reveal reveal-delay-4" id="hero-countdown">
					<div className="countdown-unit">
						<span className="countdown-num" id="cd-days">
							--
						</span>
						<span className="countdown-label">Days</span>
					</div>
					<div className="countdown-unit">
						<span className="countdown-num" id="cd-hours">
							--
						</span>
						<span className="countdown-label">Hours</span>
					</div>
					<div className="countdown-unit">
						<span className="countdown-num" id="cd-mins">
							--
						</span>
						<span className="countdown-label">Minutes</span>
					</div>
					<div className="countdown-unit">
						<span className="countdown-num" id="cd-secs">
							--
						</span>
						<span className="countdown-label">Seconds</span>
					</div>
				</div>
				<div className="hero-cta-group reveal reveal-delay-4">
					<a
						href="https://www.eventbrite.ie/e/1980132676138?aff=oddtdtcreator"
						target="_blank"
						rel="noopener noreferrer"
						className="btn-primary"
					>
						<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5">
							<path d="M20 12V22H4V12" />
							<path d="M22 7H2v5h20V7z" />
							<path d="M12 22V7" />
							<path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
							<path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
						</svg>
						Register Now
					</a>
				</div>
			</section>

			<div className="carousel-strip">
				<p className="carousel-label">Supported by</p>
				<div className="carousel-track-wrap">
					<div className="carousel-marquee">
						<div className="carousel-track">
							{carouselLogos.map((logo) => (
								<div
									key={logo.name}
									className={`carousel-logo-ph ${logo.image ? 'has-image' : 'is-fallback'}`.trim()}
									aria-label={logo.name}
								>
									{logo.image ? <img src={logo.image} alt={logo.name} className="carousel-logo-img" loading="lazy" /> : logo.name}
								</div>
							))}
						</div>
						<div className="carousel-track" aria-hidden="true">
							{carouselLogos.map((logo) => (
								<div key={`${logo.name}-duplicate`} className={`carousel-logo-ph ${logo.image ? 'has-image' : 'is-fallback'}`.trim()}>
									{logo.image ? <img src={logo.image} alt="" className="carousel-logo-img" loading="lazy" /> : logo.name}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			<section className="section section-white" id="event">
				<div className="section-inner">
					<p className="section-label reveal">The Event</p>
					<h2 className="section-heading reveal reveal-delay-1">Shopify Meetup CEE 2026</h2>
					<p className="section-intro reveal reveal-delay-2">
						The biggest official Shopify Meetup in Europe returns for its 2nd edition. After 200+ attendees in 2025, we're going bigger —
						Grand Hotel Bucharest, May 28. One day of high-impact talks, hands-on workshops, and real networking with the best minds in
						Shopify commerce across the region.
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
								<span>
									<a href="https://www.grandhotelbucharest.com/" target="_blank" rel="noopener noreferrer">
										Grand Hotel Bucharest (ex-Intercontinental)
									</a>
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
								<span className="detail-label">Hours</span>
								<span>8:00 AM – 6:00 PM</span>
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

					<p className="sub-heading reveal" id="agenda">
						Agenda
					</p>
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
								{(() => {
									const [speakerTitle = '', speakerCompany = ''] = (speaker.role || '').split('·').map((part) => part.trim());

									return (
										<>
											<div className="speaker-media">
												<div className="speaker-avatar" style={{ background: speaker.bg }}>
													{speaker.image ? <img src={speaker.image} alt={speaker.name} loading="lazy" /> : speaker.initials}
												</div>
											</div>
											<div className="speaker-content">
												<div className="speaker-name">{speaker.name}</div>
												<div className="speaker-role">{speakerTitle || speaker.role}</div>
												{speakerCompany && <div className="speaker-company">{speakerCompany}</div>}
											</div>
										</>
									);
								})()}
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

			<SponsorsSection sponsorTiers={sponsorTiers} />

			<EditionsSection editionsGallerySlots={editionsGallerySlots} editionsStats={editionsStats} />

			<LocationSection locationPhotoOne={locationPhotoOne} locationPhotoTwo={locationPhotoTwo} locationPhotoThree={locationPhotoThree} />

			<RegisterSection />

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
