import React, { useState } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import './partners-section.scss';
import { Title } from 'bloomer/lib/elements/Title';

export default function PartnersSection({ isFeatured, partners }) {
	const [filteredPartners, setFilteredPartners] = useState(partners);
	const [activeFilter, setActiveFilter] = useState('all');

	const filtersList = [
		...new Set(partners.flatMap((partner) => partner.node.tags?.tags || []))
	].sort();

	const handleFilterChange = (filter) => {
		setActiveFilter(filter);
		if (filter === 'all') {
			setFilteredPartners(partners);
		} else {
			setFilteredPartners(partners.filter((partner) => partner.node.tags?.tags?.includes(filter)));
		}
	};

	return (
		<div className="trusted-partners" id="trusted-partners">
			{!isFeatured && (
				<ul className="trusted-partners__filters">
					<li
						className={activeFilter === 'all' ? 'active' : ''}
						onClick={() => handleFilterChange('all')}
						onKeyDown={(e) => e.keyCode === 32 && handleFilterChange('all')}
						role="presentation"
					>
						{'All'}
					</li>
					{filtersList.map((filter, index) => (
						<li
							key={index}
							className={filter === activeFilter ? 'active' : ''}
							onClick={() => handleFilterChange(filter)}
							onKeyDown={(e) => e.keyCode === 32 && handleFilterChange(filter)}
							role="presentation"
						>
							{filter}
						</li>
					))}
				</ul>
			)}
			<div className={`trusted-partners__list ${isFeatured && 'trusted-partners__list--featured'}`}>
				{filteredPartners.map(({ node: partner }, index) => (
					<a
						className={`${isFeatured && 'is-featured'}`}
						key={index}
						href={partner.website}
						target={'_blank'}
						rel="noreferrer"
					>
						<GatsbyImage
							image={getImage(partner.logo)}
							alt={`${partner.name} - Vevol Media Partner`}
							objectFit={'contain'}
						/>
						<Title tag="h3" isSize={4}>
							{partner.name}
						</Title>
						<div className="partner-intro">
							<p>{partner.intro && JSON.parse(partner.intro.raw).content[0].content[0].value}</p>
						</div>
						<span className="vm-button vm-button--black-transparent vm-button--small">Visit Partner</span>
					</a>
				))}
			</div>
		</div>
	);
}