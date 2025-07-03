import en from '../locales/en.json';
import ro from '../locales/ro.json';

const locales = {
	en,
	ro,
};

// Mapping of English routes to Romanian routes (one-to-one)
const routeMapping = {
	// Main pages
	'/': '/ro/',
	'/about': '/ro/despre-noi',
	'/contact': '/ro/contact',

	// Services
	'/services': '/ro/servicii-shopify',
	'/services/shopify-development': '/ro/servicii-shopify/dezvoltare-teme',
	'/services/shopify-plus': '/ro/servicii-shopify/shopify-plus',
	'/services/shopify-apps': '/ro/servicii-shopify/aplicatii-si-integrari',
	'/services/shopify-migration': '/ro/servicii-shopify/migrari',
	'/services/seo-services': '/ro/servicii-shopify/seo',
	'/services/ui-ux-web-design': '/ro/servicii-shopify/design-web',
	'/services/conversion-rate-optimisation': '/ro/servicii-shopify/cro-optimizare-rata-conversie',
	'/service-plans': '/ro/servicii-shopify/mentenanta-si-suport',

	// Work/Projects
	'/work': '/ro/proiecte/magazine-shopify',
	'/apps': '/ro/proiecte/aplicatii-shopify',
	'/apps/addison-lee': '/ro/proiecte/aplicatii-shopify/addison-lee',
	'/apps/aqurate': '/ro/proiecte/aplicatii-shopify/aqurate',
	'/apps/dispotrading': '/ro/proiecte/aplicatii-shopify/dispotrading',
	'/apps/company-form-romania': '/ro/proiecte/aplicatii-shopify/validare-cui-romania',
	'/themes/noblesse': '/ro/teme/noblesse',
};

// Romanian routes that don't have English equivalents (redirect to English homepage)
const romanianOnlyRoutes = [
	'/ro/shopify-romania',
	// Add any other Romanian-only routes here
];

// Multiple Romanian routes that map to the same English route
const romanianToEnglishMapping = {
	// Multiple Romanian URLs pointing to the same English page
	'/ro/proiecte': '/work',
	'/ro/proiecte/magazine-shopify': '/work',
	'/ro/proiecte/aplicatii-shopify': '/apps',
	'/ro/proiecte/aplicatii-shopify/addison-lee': '/apps/addison-lee',
	'/ro/proiecte/aplicatii-shopify/aqurate': '/apps/aqurate',
	'/ro/proiecte/aplicatii-shopify/dispotrading': '/apps/dispotrading',
	'/ro/proiecte/aplicatii-shopify/validare-cui-romania': '/apps/company-form-romania',

	// Services mapping
	'/ro/servicii-shopify': '/services',
	'/ro/servicii-shopify/dezvoltare-teme': '/services/shopify-development',
	'/ro/servicii-shopify/shopify-plus': '/services/shopify-plus',
	'/ro/servicii-shopify/aplicatii-si-integrari': '/services/shopify-apps',
	'/ro/servicii-shopify/migrari': '/services/shopify-migration',
	'/ro/servicii-shopify/seo': '/services/seo-services',
	'/ro/servicii-shopify/design-web': '/services/ui-ux-web-design',
	'/ro/servicii-shopify/cro-optimizare-rata-conversie': '/services/conversion-rate-optimisation',
	'/ro/servicii-shopify/mentenanta-si-suport': '/service-plans',

	// Main pages
	'/ro/despre-noi': '/about',
	'/ro/contact': '/contact',
	'/ro/teme/noblesse': '/themes/noblesse',
	'/ro/servicii-shopify/digitalizare': '/',
};

export const t = (key, locale = 'en') => {
	const keys = key.split('.');
	let value = locales[locale] || locales.en;

	for (const k of keys) {
		if (value && value[k] !== undefined) {
			value = value[k];
		} else {
			// Fallback to English if translation not found
			value = locales.en;

			for (const fallbackKey of keys) {
				if (value && value[fallbackKey] !== undefined) {
					value = value[fallbackKey];
				} else {
					return key; // Return the key if no translation found
				}
			}
			break;
		}
	}

	return value;
};

export const getCurrentLocale = () => {
	if (typeof window !== 'undefined') {
		const path = window.location.pathname;

		if (path.startsWith('/ro')) {
			return 'ro';
		}
	}

	return 'en';
};

export const switchLocale = (newLocale) => {
	if (typeof window !== 'undefined') {
		const currentPath = window.location.pathname;
		let newPath;

		if (newLocale === 'ro') {
			// Switch to Romanian
			if (currentPath.startsWith('/ro')) {
				newPath = currentPath; // Already on Romanian
			} else {
				// Check if Romanian version exists
				const romanianPath = routeMapping[currentPath];

				if (romanianPath) {
					newPath = romanianPath;
				} else {
					// Redirect to Romanian homepage if no Romanian version exists
					newPath = '/ro/';
				}
			}
		} else {
			// Switch to English
			if (currentPath.startsWith('/ro')) {
				// Check if this is a Romanian-only route
				if (romanianOnlyRoutes.includes(currentPath)) {
					newPath = '/'; // Redirect to English homepage
				} else {
					// Check if English version exists
					const englishPath = romanianToEnglishMapping[currentPath];

					if (englishPath) {
						newPath = englishPath;
					} else {
						// Redirect to English homepage if no English version exists
						newPath = '/';
					}
				}
			} else {
				newPath = currentPath; // Already on English
			}
		}

		// Handle root path
		if (newPath === '/ro') {
			newPath = '/ro/';
		}
		if (newPath === '') {
			newPath = '/';
		}

		// Dispatch custom event before navigation
		window.dispatchEvent(new CustomEvent('localeChanged'));

		window.location.href = newPath;
	}
};
