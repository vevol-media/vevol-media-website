import React from 'react';
import { Column, Columns, Container } from 'bloomer';
import Fade from 'react-reveal/Fade';
import './cookie-bar.scss';

export default function CookieBar({setCookieConsentValue, setShowCookieBar, setCookie}) {
    const handleConsentClick = (value) => {
        setCookieConsentValue(value)
        setCookie(value)
        setShowCookieBar(false)
    }

	return (
		<Container className="cookie-bar is-max-desktop">
			<Fade bottom>
				<Columns className="container">
					<Column isSize={{ mobile: 12, default: 9 }} className="cookie-bar__info">
						We use cookies to enhance your experience on our website. Some are essential for basic functionality, while others help us
						improve and personalize your experience. By clicking 'Allow all' you consent to the use of all cookies.
					</Column>
					<Column isSize={{ mobile: 12, default: 3 }} className="cookie-bar__buttons-wrapper">
						<button className={`vm-button vm-button--white button`} onClick={() => handleConsentClick('essential')}>Use necessary cookies</button>
						<button className={`vm-button vm-button--green-alt button`} onClick={() => handleConsentClick('all')}>Allow all</button>
					</Column>
				</Columns>
			</Fade>
		</Container>
	);
}
