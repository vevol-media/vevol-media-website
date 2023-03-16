const servicePlans = [
	{
		title: 'Entrepreneur',
		description:
			'For new brands or entrepreneurs. We will help getting your website up to speed and within industry standards',
		hours: 7,
		totalHours: {
			monthly: 7,
			quaterly: 21,
			yearly: 84,
		},
		features: ['Website QA & Testing', 'Custom Development', 'Bug Fixing', 'Support & Maintenance'],
		prices: {
			monthly: 651,
			quaterly: 1890,
			yearly: 7308,
		},
	},
	{
		title: 'StartUp',
		description: `For more established brands. We'll take care of your monthly website maintenance and development.`,
		hours: 15,
		totalHours: {
			monthly: 15,
			quaterly: 45,
			yearly: 180,
		},
		features: [
			'Monthly Website QA & Testing',
			'Custom Development',
			'Bug Fixing',
			'Speed Optimisation',
			'Support & Maintenance',
			'UX/UI Design',
			'Strategic Consulting',
		],
		prices: {
			monthly: 1320,
			quaterly: 3825,
			yearly: 14760,
		},
	},
	{
		title: 'ScaleUp',
		description:
			'For brands with more custom and complex requirements. We become part of your day-to-day website management, planning and development.',
		hours: 35,
		totalHours: {
			monthly: 35,
			quaterly: 105,
			yearly: 420,
		},
		features: [
			'Monthly Website QA & Testing',
			'On Demand Custom Development',
			'UX/UI Audit & Design',
			'Immediate Bug Fixing',
			'Dedicated Developer',
			'Conversion Rate Optimisation Audit & Actioning',
			'Data Analysis & Reports',
			'Regular Speed Optimisation Checks',
			'Out of Office Hours Support',
			'Monthly Strategic Planning and Brainstorm Meeting',
			'Technical Architecture Consulting',
		],
		prices: {
			monthly: 2905,
			quaterly: 8400,
			yearly: 32340,
		},
	},
];

export default servicePlans;
