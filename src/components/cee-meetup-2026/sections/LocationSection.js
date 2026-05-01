import React from 'react';

export default function LocationSection({ locationPhotoOne, locationPhotoTwo, locationPhotoThree }) {
	return (
		<section className="section" id="location">
			<div className="section-inner">
				<p className="section-label reveal">Getting Here</p>
				<h2 className="section-heading reveal reveal-delay-1">Grand Hotel Bucharest</h2>
				<p className="section-intro reveal reveal-delay-2">
					Right in the heart of Bucharest, one of the most iconic addresses in the city. Easy to reach by metro, taxi, or car - and well
					worth the trip.
				</p>

				<div className="location-grid reveal reveal-delay-3">
					<div>
						<div className="map-embed">
							<img src={locationPhotoOne} alt="Grand Hotel Bucharest venue view" loading="lazy" />
						</div>
						<div className="location-photos location-photos-offset">
							<div className="location-photo">
								<img src={locationPhotoTwo} alt="Grand Hotel Bucharest interior view" loading="lazy" />
							</div>
							<div className="location-photo">
								<img src={locationPhotoThree} alt="Grand Hotel Bucharest hall detail" loading="lazy" />
							</div>
						</div>
					</div>

					<div className="location-details">
						<div className="location-address">
							<div className="location-address-name">
								<a href="https://www.grandhotelbucharest.com/" target="_blank" rel="noopener noreferrer">
									Grand Hotel Bucharest
								</a>
							</div>
							<div className="location-address-line">Bulevardul Nicolae Balcescu 4, Bucharest, Romania</div>
						</div>

						<div className="transport-item">
							<div className="transport-icon">
								<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
									<rect x="5" y="2" width="14" height="20" rx="2" />
									<line x1="12" y1="17" x2="12" y2="17.5" strokeWidth="3" strokeLinecap="round" />
									<line x1="9" y1="6" x2="15" y2="6" />
								</svg>
							</div>
							<div>
								<div className="transport-label">Metro</div>
								<div className="transport-text">
									Nearest stop: <strong>Universitate</strong> (M2 Blue Line) - 2 min walk.
								</div>
							</div>
						</div>

						<div className="transport-item">
							<div className="transport-icon">
								<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
									<path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3" />
									<rect x="9" y="11" width="14" height="10" rx="2" />
									<circle cx="12" cy="21" r="1" />
									<circle cx="20" cy="21" r="1" />
								</svg>
							</div>
							<div>
								<div className="transport-label">Taxi &amp; Rideshare</div>
								<div className="transport-text">
									Bolt and Uber are widely available in Bucharest. Drop-off directly on Calea Victoriei in front of the hotel. Expect
									5-10 min from most central areas.
								</div>
							</div>
						</div>

						<div className="transport-item">
							<div className="transport-icon">
								<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
									<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
									<rect x="9" y="12" width="6" height="9" />
								</svg>
							</div>
							<div>
								<div className="transport-label">From Henri Coanda Airport (OTP)</div>
								<div className="transport-text">
									<strong>Express 783 bus</strong> to Piata Unirii, then 10 min walk or short taxi - ~55 min total. <strong>Taxi/Bolt</strong>{' '}
									direct to the hotel takes 30-45 min depending on traffic and costs approx. EUR 15-20.
								</div>
							</div>
						</div>

						<div className="transport-item">
							<div className="transport-icon">
								<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
									<circle cx="12" cy="12" r="10" />
									<path d="M12 8v4l3 3" />
								</svg>
							</div>
							<div>
								<div className="transport-label">Parking</div>
								<div className="transport-text">
									Hotel offers underground valet parking. Public parking available at <strong>Piata Universitatii</strong> and on
									neighbouring streets. Expect limited availability - arriving by metro or taxi is recommended.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
