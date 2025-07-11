import React from 'react';
import { Title } from 'bloomer';
import { Link } from 'gatsby';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faAngleDoubleRight, faShoppingCart, faSearchDollar } from '@fortawesome/free-solid-svg-icons';
import { faShopify } from '@fortawesome/free-brands-svg-icons';
import { IconTopo } from '../../helpers/icons';
import plusIcon from '../../images/services-icons/plus-icon.png';
import plusLogo from '../../images/services-icons/shopify-plus.png';
import integrationIcon from '../../images/services-icons/integration-icon.png';
import { useTranslations } from '../../helpers/useTranslations';

export default function ServicePanel({ icon, heading, intro, sublist, url, delayTime }) {
	const { t } = useTranslations();

	const iconSwitch = (iconName) => {
		switch (iconName) {
			case 'faCode':
				return <FontAwesomeIcon icon={faCode} className="hs-block__icon" />;
			case 'faShoppingCart':
				return <FontAwesomeIcon icon={faShoppingCart} className="hs-block__icon" />;
			case 'faSearchDollar':
				return <FontAwesomeIcon icon={faSearchDollar} className="hs-block__icon" />;
			case 'faShopify':
				return <FontAwesomeIcon icon={faShopify} className="hs-block__icon" />;
			case 'plusIcon':
				return <img src={plusIcon} alt="Plus icon" className="hs-block__icon--img" />;
			case 'integrationIcon':
				return <img src={integrationIcon} alt="Integration icon" className="hs-block__icon--img" />;
			default:
				return <FontAwesomeIcon icon={faCode} className="hs-block__icon" />;
		}
	};

	return (
		<Fade bottom delay={delayTime}>
			<li className="hs-list__block hs-list__block--shadow">
				<IconTopo className="hs-block__pattern" />
				<Title tag="h3" isSize={2} className="hs-block__heading">
					{iconSwitch(icon)}
					{heading}
				</Title>
				<p>{intro}</p>
				<ul className="hs-block__items">
					{sublist.map((item, index) => {
						return (
							<li key={index}>
								<FontAwesomeIcon icon={faAngleDoubleRight} className="hs-block-items__icon" />
								<p>{item}</p>
							</li>
						);
					})}
				</ul>
				{icon === 'plusIcon' && (
					<img src={plusLogo} alt="Plus icon" style={{ height: '40px', marginBottom: '20px' }} />
				)}
				<Link to={url}>{t('homepageServices.panelCta')}</Link>
			</li>
		</Fade>
	);
}
