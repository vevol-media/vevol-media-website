import React from 'react';
import { switchLocale } from '../../helpers/translations';
import { useTranslations } from '../../helpers/useTranslations';
import './language-switcher.scss';

export default function LanguageSwitcher() {
	const { currentLocale } = useTranslations();

	const handleLanguageChange = (newLocale) => {
		if (newLocale !== currentLocale) {
			switchLocale(newLocale);
		}
	};

	return (
		<div className="vm-language-switcher">
			<button
				className={`vm-language-switcher__option ${currentLocale === 'en' ? 'active' : ''}`}
				onClick={() => handleLanguageChange('en')}
				type="button"
			>
				EN
			</button>
			<span className="vm-language-switcher__separator">|</span>
			<button
				className={`vm-language-switcher__option ${currentLocale === 'ro' ? 'active' : ''}`}
				onClick={() => handleLanguageChange('ro')}
				type="button"
			>
				RO
			</button>
		</div>
	);
}
