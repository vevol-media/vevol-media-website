import React from 'react';

export default function RegisterSection() {
	return (
		<section className="section" id="register">
			<div className="section-inner">
				<p className="section-label reveal">Get Your Ticket</p>
				<div className="register-card reveal reveal-delay-1">
					<h3>Secure your spot at CEE Shopify Meetup 2026</h3>
					<p>
						Seats are limited. Join hundreds of eCommerce professionals for a full day of insights, connections, and community at Grand
						Hotel Bucharest.
					</p>
					<ul className="register-perks">
						<li>Full-day access to Main Stage &amp; Workshops</li>
						<li>Buffet lunch included</li>
						<li>Afterparty access</li>
						<li>Networking with 250+ attendees</li>
						<li>Exclusive Shopify content &amp; surprise guests</li>
						<li>Expo area with booths from top solution providers</li>
					</ul>
					<div className="register-cta-group">
						<a href="https://www.eventbrite.ie/e/1980132676138?aff=oddtdtcreator" target="_blank" rel="noopener noreferrer" className="btn-primary">
							<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5">
								<path d="M20 12V22H4V12" />
								<path d="M22 7H2v5h20V7z" />
								<path d="M12 22V7" />
								<path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
								<path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
							</svg>
							Get Your Event Ticket
						</a>
						<a href="https://www.linkedin.com/company/11138525" target="_blank" rel="noopener noreferrer" className="btn-secondary">
							<svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
								<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
								<rect x="2" y="9" width="4" height="12" />
								<circle cx="4" cy="4" r="2" />
							</svg>
							Follow on LinkedIn
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
