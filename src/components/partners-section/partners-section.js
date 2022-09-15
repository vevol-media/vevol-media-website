import React, { useState } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { getImageByName } from '../../helpers/helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import './partners-section.scss';
import { Title } from 'bloomer/lib/elements/Title';

export default function PartnersSection({ logos, partnersList }) {
	const [partners, setPartners] = useState(partnersList);
	const [activeFilter, setActiveFilter] = useState('all');
	const filtersList = [
		...new Set(partnersList.map((partner) => [...partner.tags]).reduce((a, b) => a.concat(b), [])),
	].sort();

	return (
		<div className="trusted-partners">
			<ul className="trusted-partners__filters">
				<li
					className={activeFilter === 'all' ? 'active' : ''}
					onClick={(e) => {
						setActiveFilter('all');
						setPartners(partnersList);
					}}
					onKeyDown={(e) => {
						if (e.keyCode === 32) {
							setActiveFilter('all');
							setPartners(partnersList);
						}
					}}
					role="presentation"
				>
					{'All'}
				</li>
				{filtersList.map((filter, index) => (
					<li
						key={index}
						className={filter === activeFilter ? 'active' : ''}
						onClick={(e) => {
							setActiveFilter(filter);
							setPartners(partnersList.filter((partner) => partner.tags.includes(filter)));
						}}
						onKeyDown={(e) => {
							if (e.keyCode === 32) {
								setActiveFilter(filter);
								setPartners(partnersList.filter((partner) => partner.tags.includes(filter)));
							}
						}}
						role="presentation"
					>
						{filter}
					</li>
				))}
			</ul>
			<div className="trusted-partners__info">
				<p>
					<FontAwesomeIcon icon={faCheckCircle} />
					<span>- Our clients use this partner's service or software</span>
				</p>
				<p>
					<FontAwesomeIcon icon={faThumbsUp} />
					<span>- We have worked directly with and we recommended this partner's services or software</span>
				</p>
			</div>
			<div className="trusted-partners__list">
				{partners.map((partner, index) => (
					<a key={index} href={partner.website} target={'_blank'} rel="noreferrer">
						<GatsbyImage
							image={getImageByName(logos, partner.logo)}
							alt={`${partner.name} - Vevol Media Partner`}
							objectFit={'contain'}
						/>
						<Title tag="h3" isSize={4}>
							{partner.name}
						</Title>
						<div className="trusted-partners__badges">
							<FontAwesomeIcon icon={faCheckCircle} className={`${partner.isUsed ? 'active' : ''}`} />
							<FontAwesomeIcon icon={faThumbsUp} className={`${partner.isTrusted ? 'active' : ''}`} />
						</div>
						<p>{partner.intro}</p>
						<span className="vm-button vm-button--black-transparent vm-button--small">Visit Partner</span>
					</a>
				))}
			</div>
		</div>
	);
}
