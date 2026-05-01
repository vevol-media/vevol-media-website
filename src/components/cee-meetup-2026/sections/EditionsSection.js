import React from 'react';

export default function EditionsSection({ editionsGallerySlots, editionsStats }) {
	return (
		<section className="section section-white" id="editions">
			<div className="section-inner">
				<p className="section-label reveal">2025 Edition</p>
				<h2 className="section-heading reveal reveal-delay-1">See what happened last year</h2>
				<p className="section-intro reveal reveal-delay-2">
					Over 200 merchants, agencies, and partners gathered in Bucharest for the first CEE Shopify Meetup. Here's a glimpse of what it
					looked like.
				</p>

				<div className="gallery-grid reveal reveal-delay-3">
					{editionsGallerySlots.map((slot, index) => (
						<div key={`gallery-slot-${slot.className || 'default'}-${index}`} className={`gallery-photo ${slot.className}`.trim()}>
							<img src={slot.image} alt={`CEE Shopify Meetup 2025 gallery item ${index + 1}`} loading="lazy" />
						</div>
					))}
				</div>

				<div className="gallery-stat-row reveal reveal-delay-4">
					{editionsStats.map((stat) => (
						<div key={stat.label} className="gallery-stat">
							<div className="gallery-stat-num">{stat.value}</div>
							<div className="gallery-stat-label">{stat.label}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
