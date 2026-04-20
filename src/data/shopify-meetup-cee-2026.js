export const MAX_PARTNER_LOGOS = 16;

export const sponsorLogoOrder = [
	'octaine_logo',
	'omnisend_logo',
	'vevol_themes_logo',
	'midsummer_logo',
	'shopify_logo',
	'ecommerce_today_logo',
	'xconnector_logo',
	'newcurrent_logo',
	'upswing_logo',
	'zapiet_logo',
	'frisbo_logo',
	'alien_store_logo',
	'love_logo',
	'krown_themes_logo',
	'business_legue_logo',
	'leanpay_logo',
];

export const otherSponsorships = [
	{ label: 'GIVEAWAY SPONSOR', price: '€1500', imageIndex: 0 },
	{ label: 'PR SPONSOR', price: '€1500', imageIndex: 1 },
	{ label: 'LANYARD SPONSOR', price: '€1500', imageIndex: 2, sold: true },
	{ label: 'FOOD & DRINKS SPONSOR', price: '€2500', imageIndex: 3 },
];

export const aboutImageRefs = [
	{ source: '2025', index: 0 },
	{ source: '2024', index: 1 },
];

export const otherImageRefs = [
	{ source: '2024', index: 7 },
	{ source: '2025', index: 4 },
	{ source: '2024', index: 0 },
	{ source: '2025', index: 5 },
];

export const footerImageRef = { source: '2024', index: 0 };

const premierTierConfig = {
	variant: 'premier',
	title: { prefix: 'BECOME THE', highlight: 'PREMIER', suffix: 'SPONSOR' },
	imageLayout: 'circles',
	imageRefs: [
		{ source: '2024', index: 4 },
		{ source: '2024', index: 5 },
	],
	features: [
		{ text: 'Custom expo stand table' },
		{ text: 'Custom roll-up' },
		{ text: 'Exclusive private dinner (for three - pre-event evening)' },
		{ text: '1-2-1 introductions' },
		{ text: 'Lead list access' },
		{ text: 'Social media exposure' },
		{ text: 'Newsletter exposure' },
		{ text: 'On stage acknowledgement' },
		{ text: 'Main stage speaker slot (35min)', bold: true },
		{ text: 'Panel slot', bold: true },
		{ text: 'Private workshop room (1h 15min)', bold: true },
		{ text: 'Complementary 35/250 tickets' },
		{ text: 'Strategic logo placements' },
		{ text: 'Exclusive event marketing (foto/video) collaterals' },
	],
	availability: 'Only 1x available (exclusive to one sponsor)',
	price: '€10,000',
};

const plusTierConfig = {
	variant: 'plus',
	reverse: true,
	title: { prefix: 'BECOME A', highlight: 'PLUS', suffix: 'SPONSOR' },
	imageLayout: 'stack',
	imageRefs: [
		{ source: '2025', index: 2 },
		{ source: '2025', index: 3 },
	],
	features: [
		{ text: 'Custom expo stand table' },
		{ text: 'Custom roll-up' },
		{ text: 'Exclusive private dinner (for two - pre-event evening)' },
		{ text: '1-2-1 introductions', strike: true },
		{ text: 'Lead list access' },
		{ text: 'Social media exposure' },
		{ text: 'Newsletter exposure' },
		{ text: 'On stage acknowledgement' },
		{ text: 'Main stage speaker slot (30min)', bold: true },
		{ text: 'Panel slot OR Private workshop room (1h 15min)', bold: true },
		{ text: 'Complementary 25/250 tickets' },
		{ text: 'Strategic logo placements' },
	],
	availability: 'Only 5x available',
	price: '€4500',
};

const bronzeTierConfig = {
	variant: 'bronze',
	reverse: true,
	title: { prefix: 'BECOME A', highlight: 'BRONZE', suffix: 'SPONSOR' },
	imageLayout: 'single',
	imageRefs: [{ source: '2024', index: 6 }],
	features: [
		{ text: 'Custom expo stand table', strike: true },
		{ text: 'Custom roll-up' },
		{ text: 'Exclusive private dinner (for one - pre-event evening)' },
		{ text: '1-2-1 introductions', strike: true },
		{ text: 'Lead list access' },
		{ text: 'Social media exposure' },
		{ text: 'Newsletter exposure' },
		{ text: 'On stage acknowledgement' },
		{ text: 'Main stage speaker slot (15min)', bold: true },
		{ text: 'Panel slot', bold: true, strike: true },
		{ text: 'Private workshop room (1.5h)', bold: true, strike: true },
		{ text: 'Complementary 10/250 tickets' },
		{ text: 'Strategic logo placements' },
	],
	availability: '3x available',
	price: '€3200',
};

export const tierConfigs = [premierTierConfig, plusTierConfig, bronzeTierConfig];
