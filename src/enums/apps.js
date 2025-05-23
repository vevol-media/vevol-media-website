const appsPortfolio = [
	{
		name: 'Company Form - Romania',
		description: 'Company Form is a simple and effective way to collect company information from your customers.',
		internalUrl: '/apps/company-form-romania',
		externalUrl: 'https://apps.shopify.com/company-form-romania',
		featuredImage: 'company-form-romania',
		isPublic: true,
		isVevolApp: true,
		caseStudy: {
			imagesFolder: 'company-form-romania',
			title: 'Company Form - Romania',
			description:
				'Company Form is a simple and effective way to collect company information from your customers.',
			problem: [
				'Manual CUI validation is time-consuming and error-prone',
				'Businesses struggle with collecting accurate company information for invoicing',
				'No automated way to verify Romanian company details during checkout',
				'Manual data entry leads to invoicing errors and delays',
				'Difficulty in handling VAT registration status for Romanian companies',
				'Lack of standardized company information collection in Shopify stores',
				'Time wasted on verifying company details manually',
				'Risk of incorrect invoicing due to manual data entry',
				'No automated solution for Romanian business-to-business transactions',
				'Complex process of managing company data for multiple orders',
			],
			solution: [
				'Real-time CUI validation and company data retrieval',
				'Automated company information population during checkout',
				'Seamless integration with Shopify checkout process',
				'Instant verification of VAT registration status',
				'Customizable company information form',
				'Automatic cart attribute updates',
				'Flexible theme integration options',
				'Multi-language support for better accessibility',
				'Secure data handling and GDPR compliance',
				'Mutation observer for dynamic cart updates',
			],
			technologies: [
				'Shopify App Bridge',
				'React',
				'GraphQL',
				'Shopify Polaris',
				'Shopify Checkout Extensions API',
				'Shopify Theme App Extensions',
				'Shopify Billing API',
				'Shopify Webhooks',
				'Gadget.dev',
			],
		},
	},
	{
		name: 'Addison Lee',
		description:
			'Addison Lee app enables merchants to offer a premium Same-Day delivery experience using time slots.',
		internalUrl: '/apps/addison-lee',
		externalUrl: 'https://apps.shopify.com/addison-lee',
		featuredImage: 'addison-lee',
		isPublic: true,
		isVevolApp: false,
	},
];

export default appsPortfolio;
