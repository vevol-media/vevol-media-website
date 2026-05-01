import React from 'react';

export default function SponsorsSection({ sponsorTiers }) {
	return (
		<section className="section" id="sponsors">
			<div className="section-inner">
				<p className="section-label reveal">Our Sponsors</p>
				<h2 className="section-heading reveal reveal-delay-1">The companies making it happen</h2>
				<p className="section-intro reveal reveal-delay-2">
					CEE Shopify Meetup 2026 is made possible by the support of industry-leading partners across eCommerce, technology, and growth.
				</p>

				{sponsorTiers.map((tier, tierIndex) => (
					<div key={tier.key} className={`sponsor-tier ${tier.key} reveal reveal-delay-${Math.min(4, tierIndex + 2)}`}>
						<div className="sponsor-tier-label">{tier.label}</div>
						<div className="sponsor-logos">
							{tier.items.map((sponsor) => (
								<a
									key={sponsor.name}
									href={sponsor.url}
									target="_blank"
									rel="noopener noreferrer"
									className={`sponsor-logo-card ${sponsor.image ? 'has-image' : 'has-text'}`.trim()}
									title={sponsor.name}
									style={sponsor.cardStyle}
								>
									{sponsor.image ? (
										<span className="sponsor-logo-frame">
											<img
												src={sponsor.image}
												alt={sponsor.name}
												className={`sponsor-logo-image ${sponsor.logoColor === 'original' ? '' : 'sponsor-logo-image--black'}`.trim()}
												loading="lazy"
											/>
										</span>
									) : (
										<div className="sponsor-name-pill" style={sponsor.pillStyle}>
											{sponsor.name}
										</div>
									)}
								</a>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
