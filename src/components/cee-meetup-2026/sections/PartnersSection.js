import React from 'react';

export default function PartnersSection({ partnerTiers }) {
	return (
		<section className="section" id="partners">
			<div className="section-inner">
				<p className="section-label reveal">Our Partners</p>
				<h2 className="section-heading reveal reveal-delay-1">The companies making it happen</h2>
				<p className="section-intro reveal reveal-delay-2">
					CEE Shopify Meetup 2026 is made possible by the support of industry-leading partners across eCommerce, technology, and growth.
				</p>

				{partnerTiers.map((tier, tierIndex) => (
					<div key={tier.key} className={`partner-tier ${tier.key} reveal reveal-delay-${Math.min(4, tierIndex + 2)}`}>
						<div className="partner-tier-label">{tier.label}</div>
						<div className="partner-logos">
							{tier.items.map((partner) => (
								<a
									key={partner.name}
									href={partner.url}
									target="_blank"
									rel="noopener noreferrer"
									className={`partner-logo-card ${partner.image ? 'has-image' : 'has-text'}`.trim()}
									title={partner.name}
									style={partner.cardStyle}
								>
									{partner.image ? (
										<span className="partner-logo-frame">
											<img
												src={partner.image}
												alt={partner.name}
												className={`partner-logo-image ${
													partner.logoColor === 'original' ? '' : 'partner-logo-image--black'
												}`.trim()}
												loading="lazy"
											/>
										</span>
									) : (
										<div className="partner-name-pill" style={partner.pillStyle}>
											{partner.name}
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
