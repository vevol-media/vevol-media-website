import React from 'react';
import { Column, Columns, Container } from 'bloomer';
import Fade from 'react-reveal/Fade';
import './cookie-bar.scss';
import { useTranslations } from '../../helpers/useTranslations';

export default function CookieBar({ setCookieConsentValue, setShowCookieBar, setCookie }) {
	const { t } = useTranslations();

	const handleConsentClick = (value) => {
		setCookieConsentValue(value);
		setCookie(value);
		setShowCookieBar(false);
	};

	return (
		<Container className="cookie-bar is-max-desktop">
			<Fade bottom>
				<Columns className="container">
					<Column isSize={{ mobile: 12, default: 9 }} className="cookie-bar__info">
						{t('cookieBar.info')}
					</Column>
					<Column isSize={{ mobile: 12, default: 3 }} className="cookie-bar__buttons-wrapper">
						<button
							className={`vm-button vm-button--white button`}
							onClick={() => handleConsentClick('essential')}
						>
							{t('cookieBar.useNecessaryCookies')}
						</button>
						<button
							className={`vm-button vm-button--green-alt button`}
							onClick={() => handleConsentClick('all')}
						>
							{t('cookieBar.allowAll')}
						</button>
					</Column>
				</Columns>
			</Fade>
		</Container>
	);
}
