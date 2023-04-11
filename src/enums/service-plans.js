const servicePlans = [
	{
		title: 'Entrepreneur',
		description:
			'For new brands or entrepreneurs. We will help getting your website up to speed and within industry standards',
		hours: 6,
		totalHours: {
			monthly: 6,
			quaterly: 24,
			yearly: 72,
		},
		features: ['Website QA & Testing', 'Custom Development', 'Bug Fixing', 'Support & Maintenance'],
		prices: {
			monthly: 582,
			quaterly: 2328,
			yearly: 6624,
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
			monthly: 1380,
			quaterly: 4140,
			yearly: 15660,
		},
	},
	{
		title: 'ScaleUp',
		description:
			'For brands with more custom and complex requirements. We become part of your day-to-day website management, planning and development.',
		hours: 30,
		totalHours: {
			monthly: 30,
			quaterly: 120,
			yearly: 360,
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
			monthly: 2710,
			quaterly: 10440,
			yearly: 29520,
		},
	},
];

export default servicePlans;
