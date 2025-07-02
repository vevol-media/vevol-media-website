import React from 'react';
import { Link } from 'gatsby';
import { useTranslations } from '../../helpers/useTranslations';

export default function TagNav({ isBuildsPage }) {
	const { t, currentLocale } = useTranslations();

	return (
		<nav className="tag-nav" aria-label="Shopify navigation">
			<ul className="tag-nav__list">
				<li>
					{isBuildsPage ? (
						<span className="tag-nav__tag tag-nav__tag--selected" aria-current="page">
							{t('navigation.shopifyBuilds')}
						</span>
					) : (
						<Link
							className="tag-nav__tag"
							to={currentLocale === 'ro' ? '/ro/proiecte/magazine-shopify' : '/work'}
						>
							{t('navigation.shopifyBuilds')}
						</Link>
					)}
				</li>
				<li>
					{!isBuildsPage ? (
						<span className="tag-nav__tag tag-nav__tag--selected" aria-current="page">
							{t('navigation.shopifyApps')}
						</span>
					) : (
						<Link
							className="tag-nav__tag"
							to={currentLocale === 'ro' ? '/ro/proiecte/aplicatii-shopify' : '/apps'}
						>
							{t('navigation.shopifyApps')}
						</Link>
					)}
				</li>
			</ul>
		</nav>
	);
}
