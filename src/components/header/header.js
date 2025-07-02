import React, { useState } from 'react';
import MenuAnimation from './menu-animation';
import { Link } from 'gatsby';
import { Container } from 'bloomer';
import iconClose from '../../images/icon-close.svg';
import logoWhite from '../../images/logo-vevol-media.svg';
import logoBlack from '../../images/logo-vevol-media-black.svg';
import LanguageSwitcher from '../language-switcher/language-switcher';
import { useTranslations } from '../../helpers/useTranslations';
import './header.scss';

export default function Header({ background, isStatic, isTransparent }) {
	const [isNavVisible, setIsNavVisible] = useState(false);
	const { t, currentLocale } = useTranslations();

	return (
		<div
			id="header"
			className={`vm-header vm-header--${background ? 'white' : 'black'} vm-header--${
				isStatic ? 'relative' : ''
			} vm-header--${isTransparent ? 'transparent' : ''}`}
		>
			<Container>
				<Link to={currentLocale === 'ro' ? '/ro/' : '/'} className="vm-header__logo">
					<img src={background === 'white' ? logoBlack : logoWhite} alt={t('common.vevolMediaLogo')} />
				</Link>

				<div className="vm-header__navigation">
					<div className="navigation__item">
						<Link to={currentLocale === 'ro' ? '/ro/servicii-shopify' : '/services'}>
							{t('navigation.services')}
						</Link>
						<div className="navigation__subnav">
							<Link
								to={
									currentLocale === 'ro'
										? '/ro/servicii-shopify/dezvoltare-teme'
										: '/services/shopify-development'
								}
							>
								{t('navigation.shopifyDevelopment')}
							</Link>
							<Link
								to={
									currentLocale === 'ro'
										? '/ro/servicii-shopify/shopify-plus'
										: '/services/shopify-plus'
								}
							>
								{t('navigation.shopifyPlus')}
							</Link>
							<Link
								to={
									currentLocale === 'ro'
										? '/ro/servicii-shopify/aplicatii-si-integrari'
										: '/services/shopify-apps'
								}
							>
								{t('navigation.shopifyApps')}
							</Link>
							<Link
								to={
									currentLocale === 'ro'
										? '/ro/servicii-shopify/migrari'
										: '/services/shopify-migration'
								}
							>
								{t('navigation.shopifyMigration')}
							</Link>
							<Link to={currentLocale === 'ro' ? '/ro/servicii-shopify/seo' : '/services/seo-services'}>
								{t('navigation.seoServices')}
							</Link>
							<Link
								to={
									currentLocale === 'ro'
										? '/ro/servicii-shopify/design-web'
										: '/services/ui-ux-web-design'
								}
							>
								{t('navigation.uiUxWebDesign')}
							</Link>
							<Link
								className="navigation__service-plans"
								to={
									currentLocale === 'ro'
										? '/ro/servicii-shopify/mentenanta-si-suport'
										: '/service-plans'
								}
							>
								<p>{t('navigation.servicePlans')}</p>
								<p>{t('navigation.servicePlansDescription')}</p>
							</Link>
						</div>
					</div>
					<div className="navigation__item">
						<Link to={currentLocale === 'ro' ? '/ro/proiecte' : '/work'}>
							{t('navigation.ourWork')} <span className="navigation__notification">1</span>
						</Link>
						<div className="navigation__subnav no-padding">
							<Link
								className="navigation__service-plans no-margin"
								to={currentLocale === 'ro' ? '/ro/proiecte/magazine-shopify' : '/work'}
							>
								<p>{t('navigation.shopifyBuilds')}</p>
								<p>{t('navigation.shopifyBuildsDescription')}</p>
							</Link>
							<Link
								className="navigation__service-plans no-margin"
								to={currentLocale === 'ro' ? '/ro/proiecte/aplicatii-shopify' : '/apps'}
							>
								<span>{t('navigation.new')}</span>
								<p>{t('navigation.shopifyApps')}</p>
								<p>{t('navigation.shopifyAppsDescription')}</p>
							</Link>
						</div>
					</div>
				</div>
				<div
					className="vm-header__burger"
					role="button"
					tabIndex={0}
					onKeyDown={(e) => {
						if (e.keyCode === 13) {
							setIsNavVisible(!isNavVisible);
						}
					}}
					onClick={() => {
						setIsNavVisible(!isNavVisible);
					}}
				>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<div className={`vm-header__extra-nav ${isNavVisible ? 'show-nav' : ''}`}>
					<Link to={currentLocale === 'ro' ? '/ro/servicii-shopify' : '/services'}>
						{t('navigation.services')}
					</Link>
					<Link to={currentLocale === 'ro' ? '/ro/servicii-shopify/mentenanta-si-suport' : '/service-plans'}>
						{t('navigation.servicePlans')}
					</Link>
					<Link to={currentLocale === 'ro' ? '/ro/proiecte' : '/work'}>{t('navigation.ourWork')}</Link>
					{currentLocale === 'en' && <Link to="/learn">{t('navigation.learn')}</Link>}
					<Link to={currentLocale === 'ro' ? '/ro/despre-noi' : '/about'}>{t('navigation.aboutUs')}</Link>
					<Link to={currentLocale === 'ro' ? '/ro/contact' : '/contact'}>{t('navigation.contactUs')}</Link>
					{currentLocale === 'en' && <Link to="/blog">{t('navigation.blog')}</Link>}
					{currentLocale === 'en' && <Link to="/faqs">{t('navigation.faq')}</Link>}
					{currentLocale === 'en' && (
						<Link to="/strategic-partnerships">{t('navigation.strategicPartnerships')}</Link>
					)}

					<LanguageSwitcher />

					<div
						className="extra-nav__close"
						role="button"
						tabIndex={0}
						onKeyDown={(e) => {
							if (e.keyCode === 13) {
								setIsNavVisible(!isNavVisible);
							}
						}}
						onClick={() => {
							setIsNavVisible(!isNavVisible);
						}}
					>
						<img src={iconClose} alt={t('common.close')} />
					</div>

					<MenuAnimation />
				</div>
			</Container>
		</div>
	);
}
