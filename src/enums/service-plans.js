const servicePlans = {
	en: [
		{
			title: 'ScaleUp',
			description:
				'For brands with more custom and complex requirements. We become part of your day-to-day website management, planning and development.',
			hours: 60,
			totalHours: {
				monthly: 60,
				quaterly: 240,
				yearly: 720,
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
		{
			title: 'StartUp',
			description: `For more established brands. We'll take care of your monthly website maintenance and development.`,
			hours: 30,
			totalHours: {
				monthly: 30,
				quaterly: 120,
				yearly: 360,
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
			title: 'Entrepreneur',
			description:
				'For new brands or entrepreneurs. We will help getting your website up to speed and within industry standards',
			hours: 15,
			totalHours: {
				monthly: 15,
				quaterly: 60,
				yearly: 180,
			},
			features: ['Website QA & Testing', 'Custom Development', 'Bug Fixing', 'Support & Maintenance'],
			prices: {
				monthly: 582,
				quaterly: 2328,
				yearly: 6624,
			},
		},
	],
	ro: [
		{
			title: 'ScaleUp',
			description:
				'Pentru brand-uri cu nevoi complexe și volum mare de dezvoltare. Echipa noastră devine parte integrantă din managementul zilnic al website-ului, ocupându-se de planificare strategică, dezvoltare continuă și optimizare avansată.',
			hours: 60,
			totalHours: {
				monthly: 60,
				quaterly: 240,
				yearly: 720,
			},
			features: [
				'Mentenanță tehnică și suport prioritar',
				'Dezvoltare pe cerere (funcționalități noi și personalizări)',
				'Audit UX/UI și redesign iterativ',
				'Remediere imediată a bug-urilor critice',
				'Developer dedicat proiectului',
				'Audit CRO + implementare teste A/B',
				'Analiză de date și rapoarte detaliate',
				'Verificări regulate de optimizare viteză',
				'Suport extins în afara orelor de program',
				'Planificare strategică + sesiune lunară de brainstorming',
				'Consultanță pentru arhitectură tehnică și scalabilitate',
			],
			prices: {
				monthly: 2710,
				quaterly: 10440,
				yearly: 29520,
			},
		},
		{
			title: 'StartUp',
			description:
				'Pentru brand-uri aflate în expansiune. Ne ocupăm de mentenanța continuă și dezvoltarea funcționalităților necesare lunar, asigurând performanță și scalabilitate.',
			hours: 30,
			totalHours: {
				monthly: 30,
				quaterly: 120,
				yearly: 360,
			},
			features: [
				'Mentenanță tehnică și suport',
				'Dezvoltare personalizată (funcții noi & ajustări)',
				'Corectare bug-uri și îmbunătățiri rapide',
				'Optimizare viteză și performanță',
				'Design UX/UI incremental',
				'Consultanță strategică lunară',
				'Raport lunar de activitate',
			],
			prices: {
				monthly: 1380,
				quaterly: 4140,
				yearly: 15660,
			},
		},
		{
			title: 'Entrepreneur',
			description:
				'Pentru brand-uri noi și antreprenori. Asigurăm configurarea corectă, mentenanța esențială și dezvoltări punctuale pentru a alinia website-ul la standardele industriei.',
			hours: 15,
			totalHours: {
				monthly: 15,
				quaterly: 60,
				yearly: 180,
			},
			features: [
				'Mentenanță de bază și suport',
				'Dezvoltări personalizate esențiale',
				'Corectare bug-uri minore',
				'Optimizare inițială de performanță',
				'Raport de status trimestrial',
			],
			prices: {
				monthly: 582,
				quaterly: 2328,
				yearly: 6624,
			},
		},
	],
};

export default servicePlans;
