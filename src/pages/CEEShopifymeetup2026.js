import React, { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import '../components/cee-meetup-2026/cee-meetup-2026.scss';
import Layout from '../components/layout/layout';
import abhishekChandraImage from '../images/cee-meetup-2026-private-dinner/abhishek-chandra.svg';
import anaOpritaImage from '../images/cee-meetup-2026-private-dinner/ana-oprita.svg';
import bogdanDogaruImage from '../images/cee-meetup-2026-private-dinner/bogdan-dogaru.svg';
import catalinCiochinaImage from '../images/cee-meetup-2026-private-dinner/catalin-ciochina.svg';
import ciprianCazacuImage from '../images/cee-meetup-2026-private-dinner/ciprian-cazacu.svg';
import davidSimaImage from '../images/cee-meetup-2026-private-dinner/david-sima.svg';
import graceRadleyImage from '../images/cee-meetup-2026-private-dinner/grace-radley.svg';
import ilieMihalacheImage from '../images/cee-meetup-2026-private-dinner/ilie-mihalache.svg';
import paulApostuImage from '../images/cee-meetup-2026-private-dinner/paul-apostu.svg';
import prakharShrivastavaImage from '../images/cee-meetup-2026-private-dinner/prakhar-shrivastava.svg';
import raresBanescuImage from '../images/cee-meetup-2026-private-dinner/rares-banescu.svg';
import thanasisPsychogiosImage from '../images/cee-meetup-2026-private-dinner/thanasis-psychogios.svg';
import tudorGoiceaImage from '../images/cee-meetup-2026-private-dinner/tudor-goicea.svg';
import aquarateLogo from '../images/cee-meetup-2026/aquarate.svg';
import axonLogo from '../images/cee-meetup-2026/axon.svg';
import businessLeagueLogo from '../images/cee-meetup-2026/business_league_logo.webp';
import dataRevoltLogo from '../images/cee-meetup-2026/data_revolt.svg';
import easySalesLogo from '../images/cee-meetup-2026/easy_sales.svg';
import foxSellLogo from '../images/cee-meetup-2026/fox_sell.svg';
import fulfiloLogo from '../images/cee-meetup-2026/fulfilo.svg';
import kleverLogo from '../images/cee-meetup-2026/klever.svg';
import lastYearPhotoOne from '../images/cee-meetup-2026/last_year_photos/last_year_1.webp';
import lastYearPhotoTwo from '../images/cee-meetup-2026/last_year_photos/last_year_2.webp';
import lastYearPhotoThree from '../images/cee-meetup-2026/last_year_photos/last_year_3.webp';
import lastYearPhotoFour from '../images/cee-meetup-2026/last_year_photos/last_year_4.webp';
import lastYearPhotoFive from '../images/cee-meetup-2026/last_year_photos/last_year_5.webp';
import lastYearPhotoSix from '../images/cee-meetup-2026/last_year_photos/last_year_6.webp';
import lastYearPhotoSeven from '../images/cee-meetup-2026/last_year_photos/last_year_7.webp';
import lastYearPhotoEight from '../images/cee-meetup-2026/last_year_photos/last_year_8.webp';
import loveLoyaltyLogo from '../images/cee-meetup-2026/love_loyalty.svg';
import mejixLogo from '../images/cee-meetup-2026/mejix.svg';
import mollieLogo from '../images/cee-meetup-2026/mollie.svg';
import neuCurrentLogo from '../images/cee-meetup-2026/neu_current.svg';
import locationPhotoOne from '../images/cee-meetup-2026/location/grand_hotel_1.webp';
import locationPhotoTwo from '../images/cee-meetup-2026/location/grand_hotel_2.webp';
import locationPhotoThree from '../images/cee-meetup-2026/location/grand_hotel_3.webp';
import skroutzLogo from '../images/cee-meetup-2026/skroutz.svg';
import syncapLogo from '../images/cee-meetup-2026/syncap.svg';
import theMarketerLogo from '../images/cee-meetup-2026/the_marketer.svg';
import vevolThemesLogo from '../images/cee-meetup-2026/vevol_themes_logo.webp';
import videoWiseLogo from '../images/cee-meetup-2026/video_wise.svg';
import xConnectorLogo from '../images/cee-meetup-2026/x_connectpr.svg';

const mainAgenda = [
	{ time: '08:00-08:45', title: 'Reception and Check-in: pastries, coffee and tea', type: 'break' },
	{
		time: '09:20-09:35',
		title: 'What 1,000+ CEE Merchants Taught Us About Multichannel Growth',
		speaker: 'Ciprian Cazacu · Co-Founder & CEO, Easy Sales',
	},
	{
		time: '09:40-10:10',
		title: 'Migration to Shopify: From Fragmentation to Unified Execution',
		speaker: 'David Sima · Key Account Executive, Vevol Media',
	},
	{
		time: '10:20-10:35',
		title: 'How a Luxury Bundle Builder Became a Premium Commerce Experience',
		speaker: 'Prakhar Shrivastava · Co-founder, FoxSell Bundles',
	},
	{
		time: '10:40-11:10',
		title: 'The Power of Data in eCommerce and Communication',
		speaker: 'Rareș Bănescu · Owner & Founder, TheMarketer',
	},
	{ time: '11:15-11:45', title: 'Networking break: snacks and beverages', type: 'break' },
	{
		time: '11:50-12:20',
		title: 'Decoding the Cart: Consumer Patterns from 50K Eshop-Affiliate Partnerships',
		speaker: 'Ana Opriță · Deputy CEO, BusinessLeague',
	},
	{
		time: '12:25-12:40',
		title: 'The Power of Less: Scaling a Global Brand with 6 People',
		speaker: 'Grace Radley · Senior Country Partnerships Manager, Mollie',
	},
	{
		time: '12:40-12:50',
		title: 'Shopping Simplified: From Cross-border to Borderless',
		speaker: 'Thanasis Psychogios · Sr. Intl. BD Manager, Skroutz',
	},
	{ time: '13:00-14:00', title: 'Lunch break: buffet included', type: 'break' },
	{ time: '14:00-15:00', title: 'Panel Discussion', speaker: '6 special guests · TBC' },
	{ time: '15:05-15:40', title: 'Abhishek Chandra', speaker: 'CRO, Gokwik' },
	{
		time: '15:45-16:15',
		title: 'AI-Powered Email Automation: Smarter Journeys. Higher Profits.',
		speaker: 'Paul Apostu · Chief Growth Officer, Ecommerce Today',
	},
	{ time: '16:20-16:35', title: 'Session TBA' },
	{ time: '16:40-17:10', title: 'Surprise Guests from Shopify', type: 'special' },
];

const workshopAgenda = [
	{ time: '09:00-10:15', title: 'Gokwik Workshop', speaker: 'Topic TBA' },
	{ time: '10:15-11:30', title: 'Ecommerce Today Workshop', speaker: 'Topic TBA' },
	{
		time: '11:30-12:45',
		title: 'More Revenue, Same Traffic: A Step-by-Step Guide to AI Personalization That Converts',
		speaker: 'Aqurate',
	},
	{ time: '14:00-15:15', title: 'From Data to Success: Automated Flows That Bring Results', speaker: 'TheMarketer' },
	{ time: '15:15-16:30', title: 'Vevol Media Workshop', speaker: 'Topic TBA' },
	{ time: '16:30-17:45', title: 'xConnector Workshop', speaker: 'Topic TBA' },
];

const speakers = [
	{ initials: 'C', name: 'Ciprian Cazacu', role: 'Co-Founder & CEO · Easy Sales', bg: '#1a1a1a', image: ciprianCazacuImage },
	{ initials: 'D', name: 'David Sima', role: 'Key Account Executive · Vevol Media', bg: '#5C6AC4', image: davidSimaImage },
	{ initials: 'P', name: 'Prakhar Shrivastava', role: 'Co-founder · FoxSell Bundles', bg: '#22ffb8', image: prakharShrivastavaImage },
	{ initials: 'R', name: 'Rareș Bănescu', role: 'Founder · TheMarketer', bg: '#2c5282', image: raresBanescuImage },
	{ initials: 'A', name: 'Ana Opriță', role: 'Deputy CEO · BusinessLeague', bg: '#744210', image: anaOpritaImage },
	{ initials: 'G', name: 'Grace Radley', role: 'Sr. Country Partnerships · Mollie', bg: '#276749', image: graceRadleyImage },
	{ initials: 'T', name: 'Thanasis Psychogios', role: 'Sr. Intl. BD Manager · Skroutz', bg: '#702459', image: thanasisPsychogiosImage },
	{ initials: 'Ab', name: 'Abhishek Chandra', role: 'CRO · Gokwik', bg: '#1a365d', image: abhishekChandraImage },
	{ initials: 'Pa', name: 'Paul Apostu', role: 'Chief Growth Officer · Ecommerce Today', bg: '#553c9a', image: paulApostuImage },
	{ initials: 'B', name: 'Bogdan Dogaru', role: 'CTO · Vevol Media', bg: '#0a6e4a', image: bogdanDogaruImage },
	{ initials: 'I', name: 'Ilie Mihalache', role: 'Partnership Support · TheMarketer', bg: '#b45309', image: ilieMihalacheImage },
	{ initials: 'Tu', name: 'Tudor Goicea', role: 'Co-founder & CRO · Aqurate', bg: '#1e6091', image: tudorGoiceaImage },
	{ initials: 'Ca', name: 'Catalin Ciochina', role: 'Founder · xConnector', bg: '#6b21a8', image: catalinCiochinaImage },
	{ initials: '?', name: 'Surprise Guest', role: 'Shopify', bg: '#22ffb8', surprise: true },
	{ initials: '?', name: 'Surprise Guest', role: 'Shopify', bg: '#0fd49a', surprise: true },
	{ initials: '?', name: 'Surprise Guest', role: 'Shopify', bg: '#0fd49a', surprise: true },
	{ initials: '?', name: 'Surprise Guest', role: 'Retail Industry Leader', bg: '#3b6fd4', surprise: true, surpriseBlue: true },
	{ initials: '?', name: 'Surprise Guest', role: 'Retail Industry Leader', bg: '#3b6fd4', surprise: true, surpriseBlue: true },
];

const expectedItems = [
	'🎤 High-impact talks from top eCommerce leaders across CEE and beyond',
	'🛠 Hands-on workshops with practical takeaways you can use straight away',
	'🤝 Real networking with 250+ merchants, agencies and app developers',
	'🏪 Expo area with booths from top Shopify solution providers — see the tools in action and talk directly to the teams building them',
	'🍽️ Lunch included, because great ideas need fuel',
	'🍸 Afterparty to keep the conversations going after the talks end',
	"⭐ A curated Shopify community experience you'll want to return to every year",
	'🌍 Attendees from across Central & Eastern Europe — merchants, founders, and operators all under one roof',
];

const carouselLogos = [
	{ name: 'GoKwik' },
	{ name: 'BusinessLeague', image: businessLeagueLogo },
	{ name: 'TheMarketer', image: theMarketerLogo },
	{ name: 'Mollie', image: mollieLogo },
	{ name: 'xConnector', image: xConnectorLogo },
	{ name: 'FoxSell', image: foxSellLogo },
	{ name: 'Easy Sales', image: easySalesLogo },
	{ name: 'Videowise', image: videoWiseLogo },
	{ name: 'Aqurate', image: aquarateLogo },
	{ name: 'Skroutz', image: skroutzLogo },
	{ name: 'Fulfilo', image: fulfiloLogo },
	{ name: 'Axon', image: axonLogo },
	{ name: 'Klever', image: kleverLogo },
	{ name: 'Consentmo' },
	{ name: 'Mejix', image: mejixLogo },
	{ name: 'NeuCurrent', image: neuCurrentLogo },
	{ name: 'Love Loyalty', image: loveLoyaltyLogo },
	{ name: 'DataRevolt', image: dataRevoltLogo },
	{ name: 'Vevol Themes', image: vevolThemesLogo },
	{ name: 'Syncap', image: syncapLogo },
];

const sponsorTiers = [
	{
		key: 'premier',
		label: 'Premier Sponsor',
		items: [
			{
				name: 'GoKwik',
				url: 'https://www.gokwik.co/uk/product/kwikengage',
				cardStyle: { background: '#fff8e6', borderColor: '#e8c840' },
				pillStyle: { color: '#7a5c00' },
			},
		],
	},
	{
		key: 'plus',
		label: 'Plus Sponsors',
		items: [
			{
				name: 'BusinessLeague',
				url: 'https://businessleague.com/',
				image: businessLeagueLogo,
				logoColor: 'original',
				logoScale: 3.8,
				cardStyle: { background: '#f0f6ff', borderColor: '#a0c4f5' },
				pillStyle: { color: '#0c447c' },
			},
			{
				name: 'TheMarketer',
				url: 'https://themarketer.com/',
				image: theMarketerLogo,
				logoScale: 3.2,
				logoFilter: 'contrast(2.8) brightness(0.42) saturate(1.2)',
				cardStyle: { background: '#fff0f4', borderColor: '#f5a0bc' },
				pillStyle: { color: '#8b0030' },
			},
			{
				name: 'Mollie',
				url: 'https://www.mollie.com/',
				image: mollieLogo,
				logoScale: 3.3,
				cardStyle: { background: '#f5f0ff', borderColor: '#c4a8f5' },
				pillStyle: { color: '#3b0080' },
			},
			{
				name: 'xConnector',
				url: 'https://about.xconnector.app/',
				image: xConnectorLogo,
				logoScale: 3.4,
				logoFilter: 'contrast(2.8) brightness(0.4) saturate(1.2)',
				cardStyle: { background: '#f0fff8', borderColor: '#a0f0d0' },
				pillStyle: { color: '#0a5e42' },
			},
		],
	},
	{
		key: 'bronze',
		label: 'Bronze Sponsors',
		items: [
			{
				name: 'FoxSell',
				url: 'https://foxsell.com/',
				image: foxSellLogo,
				logoScale: 3,
				cardStyle: { background: '#fff5e6', borderColor: '#f5c880' },
				pillStyle: { color: '#7a3a00' },
			},
			{
				name: 'Easy Sales',
				url: 'https://easy-sales.com/',
				image: easySalesLogo,
				logoScale: 3.45,
				cardStyle: { background: '#e6fff5', borderColor: '#80f5c8' },
				pillStyle: { color: '#004d30' },
			},
			{
				name: 'Videowise',
				url: 'https://videowise.com/',
				image: videoWiseLogo,
				logoScale: 3,
				cardStyle: { background: '#f0f0ff', borderColor: '#b0b0f5' },
				pillStyle: { color: '#1a1a7a' },
			},
			{
				name: 'Aqurate',
				url: 'https://aqurate.ai/en/',
				image: aquarateLogo,
				logoScale: 3,
				cardStyle: { background: '#e6f8ff', borderColor: '#80d8f5' },
				pillStyle: { color: '#003d5c' },
			},
			{
				name: 'Skroutz',
				url: 'https://www.skroutz.ro/',
				image: skroutzLogo,
				logoScale: 3.2,
				cardStyle: { background: '#fff5e6', borderColor: '#f5a880' },
				pillStyle: { color: '#7a2200' },
			},
			{
				name: 'Fulfilo',
				url: 'https://www.fulfilo.ro/',
				image: fulfiloLogo,
				logoScale: 3.8,
				logoFilter: 'contrast(2.9) brightness(0.38) saturate(1.15)',
				cardStyle: { background: '#f5f5f5', borderColor: '#cccccc' },
				pillStyle: { color: '#333333' },
			},
			{
				name: 'Axon',
				url: 'https://axon.ai/en',
				image: axonLogo,
				logoScale: 3.1,
				cardStyle: { background: '#f0fff0', borderColor: '#90e090' },
				pillStyle: { color: '#1a4d1a' },
			},
			{
				name: 'Klever',
				url: 'https://klever.agency/',
				image: kleverLogo,
				logoScale: 3.15,
				cardStyle: { background: '#fffae6', borderColor: '#f5e080' },
				pillStyle: { color: '#5c4400' },
			},
			{
				name: 'Consentmo',
				url: 'https://www.consentmo.com/',
				cardStyle: { background: '#f0f8ff', borderColor: '#90c8f5' },
				pillStyle: { color: '#003366' },
			},
			{
				name: 'Mejix',
				url: 'https://www.mejix.com/',
				image: mejixLogo,
				logoScale: 3.2,
				cardStyle: { background: '#fff0f8', borderColor: '#f5a0d0' },
				pillStyle: { color: '#6b0040' },
			},
		],
	},
	{
		key: 'partners',
		label: 'Event Partners',
		items: [
			{
				name: 'NeuCurrent',
				url: 'https://neucurrent.com/',
				image: neuCurrentLogo,
				logoScale: 3.25,
				cardStyle: { background: '#f0f8ff', borderColor: '#90c0f0' },
				pillStyle: { color: '#003366' },
			},
			{
				name: 'Love Loyalty',
				url: 'https://www.loveloyalty.app/',
				image: loveLoyaltyLogo,
				logoScale: 3.35,
				logoFilter: 'contrast(2.7) brightness(0.42) saturate(1.2)',
				cardStyle: { background: '#fff0f4', borderColor: '#f5a0bc' },
				pillStyle: { color: '#8b0030' },
			},
			{
				name: 'DataRevolt',
				url: 'https://datarevolt.agency/ro/',
				image: dataRevoltLogo,
				logoScale: 3.25,
				cardStyle: { background: '#f5f0ff', borderColor: '#c4a0f5' },
				pillStyle: { color: '#3b0080' },
			},
			{
				name: 'Vevol Themes',
				url: 'https://vevolthemes.com/',
				image: vevolThemesLogo,
				logoScale: 3.5,
				logoFilter: 'contrast(2.9) brightness(0.36) saturate(1.2)',
				cardStyle: { background: '#f0fffa', borderColor: '#a0f5dc' },
				pillStyle: { color: '#0a5e42' },
			},
		],
	},
];

const editionsGallerySlots = [
	{ image: lastYearPhotoSeven, className: 'tall' },
	{ image: lastYearPhotoTwo, className: '' },
	{ image: lastYearPhotoThree, className: '' },
	{ image: lastYearPhotoFour, className: 'wide' },
	{ image: lastYearPhotoFive, className: '' },
	{ image: lastYearPhotoSix, className: '' },
	{ image: lastYearPhotoOne, className: '' },
	{ image: lastYearPhotoEight, className: 'wide' },
];

const editionsStats = [
	{ value: '200+', label: 'Attendees' },
	{ value: '10+', label: 'Speakers' },
	{ value: '8', label: 'Countries represented' },
	{ value: '1', label: 'Unforgettable day' },
];

export default function CeeMeetup2026PrivateDinnerPage() {
	const [activeTrack, setActiveTrack] = useState('main');

	useEffect(() => {
		if (typeof window === 'undefined' || !window.IntersectionObserver) {
			return undefined;
		}

		const observer = new window.IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('visible');
					}
				});
			},
			{ threshold: 0.08 },
		);

		const revealElements = document.querySelectorAll('.cee-dinner-page .reveal');
		revealElements.forEach((element) => observer.observe(element));

		const carouselMarquee = document.querySelector('.carousel-marquee');
		const firstCarouselTrack = carouselMarquee?.querySelector('.carousel-track');

		const updateCarouselShift = () => {
			if (!(carouselMarquee instanceof HTMLElement) || !(firstCarouselTrack instanceof HTMLElement)) {
				return;
			}

			const trackGap = 16;
			const shift = firstCarouselTrack.scrollWidth + trackGap;
			carouselMarquee.style.setProperty('--carousel-shift', `${shift}px`);
		};

		updateCarouselShift();
		window.addEventListener('resize', updateCarouselShift);

		const countdownTargetDate = new Date('2026-05-28T08:00:00');
		const countdownElements = {
			days: document.getElementById('cd-days'),
			hours: document.getElementById('cd-hours'),
			mins: document.getElementById('cd-mins'),
			secs: document.getElementById('cd-secs'),
		};

		const padCountdownValue = (value) => String(value).padStart(2, '0');
		let countdownIntervalId;

		const updateCountdown = () => {
			const now = new Date();
			const difference = countdownTargetDate.getTime() - now.getTime();

			if (!countdownElements.days || !countdownElements.hours || !countdownElements.mins || !countdownElements.secs) {
				return;
			}

			if (difference <= 0) {
				countdownElements.days.textContent = '00';
				countdownElements.hours.textContent = '00';
				countdownElements.mins.textContent = '00';
				countdownElements.secs.textContent = '00';
				return;
			}

			const days = Math.floor(difference / 86400000);
			const hours = Math.floor((difference % 86400000) / 3600000);
			const minutes = Math.floor((difference % 3600000) / 60000);
			const seconds = Math.floor((difference % 60000) / 1000);

			countdownElements.days.textContent = padCountdownValue(days);
			countdownElements.hours.textContent = padCountdownValue(hours);
			countdownElements.mins.textContent = padCountdownValue(minutes);
			countdownElements.secs.textContent = padCountdownValue(seconds);
		};

		updateCountdown();
		countdownIntervalId = window.setInterval(updateCountdown, 1000);

		const heroSectionElement = document.getElementById('hero');
		const heroCanvasElement = document.getElementById('hero-canvas');
		let animationFrameId;
		let canvasResizeTimeoutId;
		let heroMouseMoveHandler;
		let heroMouseLeaveHandler;
		let canvasResizeHandler;

		if (heroSectionElement && heroCanvasElement instanceof HTMLCanvasElement) {
			const canvasContext = heroCanvasElement.getContext('2d');
			if (canvasContext) {
				let canvasWidth = 0;
				let canvasHeight = 0;
				let dots = [];
				const mousePosition = { x: -9999, y: -9999 };
				const dotSpacing = 36;
				const baseDotRadius = 1.5;
				const influenceRadius = 110;
				const maxShift = 6;
				const ease = 0.08;

				const buildDotGrid = () => {
					dots = [];
					const columns = Math.ceil(canvasWidth / dotSpacing) + 1;
					const rows = Math.ceil(canvasHeight / dotSpacing) + 1;
					const offsetX = (canvasWidth - (columns - 1) * dotSpacing) / 2;
					const offsetY = (canvasHeight - (rows - 1) * dotSpacing) / 2;

					for (let row = 0; row < rows; row += 1) {
						for (let column = 0; column < columns; column += 1) {
							const originX = offsetX + column * dotSpacing;
							const originY = offsetY + row * dotSpacing;
							dots.push({ ox: originX, oy: originY, x: originX, y: originY, alpha: 0.13 });
						}
					}
				};

				const resizeCanvas = () => {
					canvasWidth = heroSectionElement.offsetWidth;
					canvasHeight = heroSectionElement.offsetHeight;
					heroCanvasElement.width = canvasWidth;
					heroCanvasElement.height = canvasHeight;
					buildDotGrid();
				};

				const drawDots = () => {
					canvasContext.clearRect(0, 0, canvasWidth, canvasHeight);

					dots.forEach((dot) => {
						const dx = mousePosition.x - dot.ox;
						const dy = mousePosition.y - dot.oy;
						const distance = Math.sqrt(dx * dx + dy * dy);
						const proximity = Math.max(0, 1 - distance / influenceRadius);
						const targetX = dot.ox - dx * proximity * (maxShift / influenceRadius) * distance * 0.08;
						const targetY = dot.oy - dy * proximity * (maxShift / influenceRadius) * distance * 0.08;

						dot.x += (targetX - dot.x) * ease;
						dot.y += (targetY - dot.y) * ease;
						dot.alpha += (0.13 + proximity * 0.5 - dot.alpha) * 0.1;

						canvasContext.beginPath();
						canvasContext.arc(dot.x, dot.y, baseDotRadius + proximity * 1.4, 0, Math.PI * 2);
						canvasContext.fillStyle = proximity > 0.05 ? `rgba(34,255,184,${dot.alpha})` : `rgba(10,158,114,${dot.alpha})`;
						canvasContext.fill();
					});

					animationFrameId = window.requestAnimationFrame(drawDots);
				};

				heroMouseMoveHandler = (event) => {
					const rect = heroCanvasElement.getBoundingClientRect();
					mousePosition.x = event.clientX - rect.left;
					mousePosition.y = event.clientY - rect.top;
				};

				heroMouseLeaveHandler = () => {
					mousePosition.x = -9999;
					mousePosition.y = -9999;
				};

				canvasResizeHandler = () => {
					window.clearTimeout(canvasResizeTimeoutId);
					canvasResizeTimeoutId = window.setTimeout(resizeCanvas, 50);
				};

				heroSectionElement.addEventListener('mousemove', heroMouseMoveHandler);
				heroSectionElement.addEventListener('mouseleave', heroMouseLeaveHandler);
				window.addEventListener('resize', canvasResizeHandler);

				resizeCanvas();
				drawDots();
			}
		}

		return () => {
			revealElements.forEach((element) => observer.unobserve(element));
			observer.disconnect();
			window.removeEventListener('resize', updateCarouselShift);
			window.clearInterval(countdownIntervalId);
			window.clearTimeout(canvasResizeTimeoutId);

			if (heroSectionElement && heroMouseMoveHandler) {
				heroSectionElement.removeEventListener('mousemove', heroMouseMoveHandler);
			}

			if (heroSectionElement && heroMouseLeaveHandler) {
				heroSectionElement.removeEventListener('mouseleave', heroMouseLeaveHandler);
			}

			if (canvasResizeHandler) {
				window.removeEventListener('resize', canvasResizeHandler);
			}

			if (animationFrameId) {
				window.cancelAnimationFrame(animationFrameId);
			}
		};
	}, []);

	const activeAgenda = useMemo(() => (activeTrack === 'main' ? mainAgenda : workshopAgenda), [activeTrack]);

	const metaTitle = "CEE Shopify Meetup 2026 - You're Invited";
	const metaDescription = 'Exclusive pre-event dinner invitation and VIP access for CEE Shopify Meetup 2026 in Bucharest, May 27-28.';
	const pageUrl = 'https://www.vevolmedia.com/CEEShopifymeetup2026';

	return (
		<Layout hasMainForm={false} hasHeader={false} hasFooter={false} customClass={'cee-dinner-page'}>
			<Helmet>
				<title>{metaTitle}</title>
				<meta name="description" content={metaDescription} />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link
					href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,300&family=DM+Serif+Display:ital@0;1&display=swap"
					rel="stylesheet"
				/>
				<link rel="canonical" href={pageUrl} />
				<meta property="og:url" content={pageUrl} />
				<meta property="og:type" content="website" />
				<meta property="og:title" content={metaTitle} />
				<meta property="og:description" content={metaDescription} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:creator" content="@VevolMedia" />
				<meta property="twitter:domain" content="vevolmedia.com" />
				<meta property="twitter:url" content={pageUrl} />
				<meta name="twitter:title" content={metaTitle} />
				<meta name="twitter:description" content={metaDescription} />
			</Helmet>

			<header className="top-bar">
				<div className="top-bar-brand">
					<div className="dot"></div>
					CEE Shopify Meetup 2026
				</div>
				<span className="top-bar-badge">May 28 · Bucharest</span>
			</header>

			<section className="hero" id="hero">
				<canvas id="hero-canvas"></canvas>
				<div className="reveal">
					<div className="hero-eyebrow">
						<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5">
							<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
						</svg>
						Official Shopify Meetup · Central & Eastern Europe
					</div>
				</div>
				<h1 className="reveal reveal-delay-1">
					<span className="w">Central</span> <span className="w">&amp;</span> <span className="w">Eastern</span>{' '}
					<span className="w">European</span>
					<br />
					<span className="w">Shopify</span> <span className="w">Meetup</span> <span className="w">2026</span>
				</h1>
				<p className="hero-organisers reveal reveal-delay-2">
					<a href="https://vevolmedia.com/" target="_blank" rel="noopener noreferrer">
						Vevol Media
					</a>
					<span className="sep">&amp;</span>
					<a href="https://ecommerce-today.com/" target="_blank" rel="noopener noreferrer">
						Ecommerce Today
					</a>
				</p>
				<div className="hero-stats reveal reveal-delay-3">
					<div className="hero-stat">
						<div className="hero-stat-num">
							<em>250+</em>
						</div>
						<div className="hero-stat-label">Attendees</div>
					</div>
					<div className="hero-stat">
						<div className="hero-stat-num">
							<em>18+</em>
						</div>
						<div className="hero-stat-label">Speakers</div>
					</div>
					<div className="hero-stat">
						<div className="hero-stat-num">
							<em>2</em>
						</div>
						<div className="hero-stat-label">Tracks</div>
					</div>
					<div className="hero-stat">
						<div className="hero-stat-num">
							<em>1</em>
						</div>
						<div className="hero-stat-label">Day</div>
					</div>
				</div>
				<div className="hero-meta reveal reveal-delay-4">
					<div className="hero-meta-item">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
							<rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
							<line x1="16" y1="2" x2="16" y2="6" />
							<line x1="8" y1="2" x2="8" y2="6" />
							<line x1="3" y1="10" x2="21" y2="10" />
						</svg>
						Wednesday, May 28, 2026
					</div>
					<div className="hero-meta-item">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
							<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
							<circle cx="12" cy="10" r="3" />
						</svg>
						Grand Hotel Bucharest
					</div>
					<div className="hero-meta-item">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
							<circle cx="12" cy="12" r="10" />
							<polyline points="12 6 12 12 16 14" />
						</svg>
						8:00 AM - 6:00 PM
					</div>
				</div>
				<div className="hero-countdown reveal reveal-delay-4" id="hero-countdown">
					<div className="countdown-unit">
						<span className="countdown-num" id="cd-days">
							--
						</span>
						<span className="countdown-label">Days</span>
					</div>
					<div className="countdown-unit">
						<span className="countdown-num" id="cd-hours">
							--
						</span>
						<span className="countdown-label">Hours</span>
					</div>
					<div className="countdown-unit">
						<span className="countdown-num" id="cd-mins">
							--
						</span>
						<span className="countdown-label">Minutes</span>
					</div>
					<div className="countdown-unit">
						<span className="countdown-num" id="cd-secs">
							--
						</span>
						<span className="countdown-label">Seconds</span>
					</div>
				</div>
				<div className="hero-cta-group reveal reveal-delay-4">
					<a
						href="https://www.eventbrite.ie/e/1980132676138?aff=oddtdtcreator"
						target="_blank"
						rel="noopener noreferrer"
						className="btn-primary"
					>
						<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5">
							<path d="M20 12V22H4V12" />
							<path d="M22 7H2v5h20V7z" />
							<path d="M12 22V7" />
							<path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
							<path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
						</svg>
						Register Now
					</a>
				</div>
			</section>

			<div className="carousel-strip">
				<p className="carousel-label">Supported by</p>
				<div className="carousel-track-wrap">
					<div className="carousel-marquee">
						<div className="carousel-track">
							{carouselLogos.map((logo) => (
								<div
									key={logo.name}
									className={`carousel-logo-ph ${logo.image ? 'has-image' : 'is-fallback'}`.trim()}
									aria-label={logo.name}
								>
									{logo.image ? <img src={logo.image} alt={logo.name} className="carousel-logo-img" loading="lazy" /> : logo.name}
								</div>
							))}
						</div>
						<div className="carousel-track" aria-hidden="true">
							{carouselLogos.map((logo) => (
								<div key={`${logo.name}-duplicate`} className={`carousel-logo-ph ${logo.image ? 'has-image' : 'is-fallback'}`.trim()}>
									{logo.image ? <img src={logo.image} alt="" className="carousel-logo-img" loading="lazy" /> : logo.name}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			<section className="section section-white" id="event">
				<div className="section-inner">
					<p className="section-label reveal">The Event</p>
					<h2 className="section-heading reveal reveal-delay-1">Shopify Meetup CEE 2026</h2>
					<p className="section-intro reveal reveal-delay-2">
						The biggest official Shopify Meetup in Europe returns for its 2nd edition. After 200+ attendees in 2025, we're going bigger —
						Grand Hotel Bucharest, May 28. One day of high-impact talks, hands-on workshops, and real networking with the best minds in
						Shopify commerce across the region.
					</p>
					<div className="details-grid reveal reveal-delay-3 event-details-grid">
						<div className="detail-item">
							<div className="detail-icon">
								<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
									<rect x="3" y="4" width="18" height="18" rx="2" />
									<line x1="16" y1="2" x2="16" y2="6" />
									<line x1="8" y1="2" x2="8" y2="6" />
									<line x1="3" y1="10" x2="21" y2="10" />
								</svg>
							</div>
							<div className="detail-text">
								<span className="detail-label">Date</span>
								<span>Wednesday, May 28, 2026</span>
							</div>
						</div>
						<div className="detail-item">
							<div className="detail-icon">
								<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
									<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
									<polyline points="9 22 9 12 15 12 15 22" />
								</svg>
							</div>
							<div className="detail-text">
								<span className="detail-label">Venue</span>
								<span>
									<a href="https://www.grandhotelbucharest.com/" target="_blank" rel="noopener noreferrer">
										Grand Hotel Bucharest (ex-Intercontinental)
									</a>
								</span>
							</div>
						</div>
						<div className="detail-item">
							<div className="detail-icon">
								<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
									<circle cx="12" cy="12" r="10" />
									<polyline points="12 6 12 12 16 14" />
								</svg>
							</div>
							<div className="detail-text">
								<span className="detail-label">Hours</span>
								<span>8:00 AM – 6:00 PM</span>
							</div>
						</div>
						<div className="detail-item">
							<div className="detail-icon">
								<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
									<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
									<circle cx="9" cy="7" r="4" />
									<path d="M23 21v-2a4 4 0 0 0-3-3.87" />
									<path d="M16 3.13a4 4 0 0 1 0 7.75" />
								</svg>
							</div>
							<div className="detail-text">
								<span className="detail-label">Attendance</span>
								<span>250+ expected</span>
							</div>
						</div>
					</div>

					<p className="sub-heading reveal" id="agenda">
						Agenda
					</p>
					<div className="track-tabs reveal reveal-delay-1" role="tablist" aria-label="Agenda tracks">
						<button
							type="button"
							className={`track-tab ${activeTrack === 'main' ? 'active' : ''}`}
							onClick={() => setActiveTrack('main')}
							role="tab"
							aria-selected={activeTrack === 'main'}
						>
							🎤 Main Stage
						</button>
						<button
							type="button"
							className={`track-tab ${activeTrack === 'workshops' ? 'active' : ''}`}
							onClick={() => setActiveTrack('workshops')}
							role="tab"
							aria-selected={activeTrack === 'workshops'}
						>
							🛠 Workshops
						</button>
					</div>

					{activeTrack === 'workshops' && <p className="workshop-note">Workshops run in parallel with the main stage in the Opera room.</p>}

					<div className="track-content active reveal reveal-delay-2">
						{activeAgenda.map((slot) => (
							<div key={`${slot.time}-${slot.title}`} className={`agenda-slot ${slot.type || ''}`.trim()}>
								<div className="agenda-time">{slot.time}</div>
								<div>
									<div className="agenda-title">{slot.title}</div>
									{slot.speaker && <div className="agenda-speaker">{slot.speaker}</div>}
								</div>
							</div>
						))}
					</div>

					<p className="sub-heading reveal">Speakers</p>
					<div className="speakers-grid reveal reveal-delay-1">
						{speakers.map((speaker, index) => (
							<div
								key={`${speaker.initials}-${speaker.name}-${index}`}
								className={`speaker-card ${speaker.surprise ? 'surprise' : ''}`.trim()}
							>
								{(() => {
									const [speakerTitle = '', speakerCompany = ''] = (speaker.role || '').split('·').map((part) => part.trim());

									return (
										<>
											<div className="speaker-media">
												<div className="speaker-avatar" style={{ background: speaker.bg }}>
													{speaker.image ? <img src={speaker.image} alt={speaker.name} loading="lazy" /> : speaker.initials}
												</div>
											</div>
											<div className="speaker-content">
												<div className="speaker-name">{speaker.name}</div>
												<div className="speaker-role">{speakerTitle || speaker.role}</div>
												{speakerCompany && <div className="speaker-company">{speakerCompany}</div>}
											</div>
										</>
									);
								})()}
							</div>
						))}
					</div>

					<p className="sub-heading reveal">What to expect</p>
					<div className="expect-grid reveal reveal-delay-1">
						{expectedItems.map((item) => {
							const icon = item.split(' ')[0];
							const text = item.replace(`${icon} `, '');
							return (
								<div key={item} className="expect-item">
									<div className="expect-icon">{icon}</div>
									<div className="expect-text">{text}</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			<section className="section" id="sponsors">
				<div className="section-inner">
					<p className="section-label reveal">Our Sponsors</p>
					<h2 className="section-heading reveal reveal-delay-1">The companies making it happen</h2>
					<p className="section-intro reveal reveal-delay-2">
						CEE Shopify Meetup 2026 is made possible by the support of industry-leading partners across eCommerce, technology, and growth.
					</p>

					{sponsorTiers.map((tier, tierIndex) => (
						<div key={tier.key} className={`sponsor-tier ${tier.key} reveal reveal-delay-${Math.min(4, tierIndex + 2)}`}>
							<div className="sponsor-tier-label">{tier.label}</div>
							<div className="sponsor-logos">
								{tier.items.map((sponsor) => (
									<a
										key={sponsor.name}
										href={sponsor.url}
										target="_blank"
										rel="noopener noreferrer"
										className={`sponsor-logo-card ${sponsor.image ? 'has-image' : 'has-text'}`.trim()}
										title={sponsor.name}
										style={sponsor.cardStyle}
									>
										{sponsor.image ? (
											<span className="sponsor-logo-frame">
												<img
													src={sponsor.image}
													alt={sponsor.name}
													className={`sponsor-logo-image ${
														sponsor.logoColor === 'original' ? '' : 'sponsor-logo-image--black'
													}`.trim()}
													loading="lazy"
												/>
											</span>
										) : (
											<div className="sponsor-name-pill" style={sponsor.pillStyle}>
												{sponsor.name}
											</div>
										)}
									</a>
								))}
							</div>
						</div>
					))}
				</div>
			</section>

			<section className="section section-white" id="editions">
				<div className="section-inner">
					<p className="section-label reveal">2025 Edition</p>
					<h2 className="section-heading reveal reveal-delay-1">See what happened last year</h2>
					<p className="section-intro reveal reveal-delay-2">
						Over 200 merchants, agencies, and partners gathered in Bucharest for the first CEE Shopify Meetup. Here's a glimpse of what it
						looked like.
					</p>

					<div className="gallery-grid reveal reveal-delay-3">
						{editionsGallerySlots.map((slot, index) => (
							<div key={`gallery-slot-${slot.className || 'default'}-${index}`} className={`gallery-photo ${slot.className}`.trim()}>
								<img src={slot.image} alt={`CEE Shopify Meetup 2025 gallery item ${index + 1}`} loading="lazy" />
							</div>
						))}
					</div>

					<div className="gallery-stat-row reveal reveal-delay-4">
						{editionsStats.map((stat) => (
							<div key={stat.label} className="gallery-stat">
								<div className="gallery-stat-num">{stat.value}</div>
								<div className="gallery-stat-label">{stat.label}</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="section" id="location">
				<div className="section-inner">
					<p className="section-label reveal">Getting Here</p>
					<h2 className="section-heading reveal reveal-delay-1">Grand Hotel Bucharest</h2>
					<p className="section-intro reveal reveal-delay-2">
						Right in the heart of Bucharest, one of the most iconic addresses in the city. Easy to reach by metro, taxi, or car -
						and well worth the trip.
					</p>

					<div className="location-grid reveal reveal-delay-3">
						<div>
							<div className="map-embed">
								<img src={locationPhotoOne} alt="Grand Hotel Bucharest venue view" loading="lazy" />
							</div>
							<div className="location-photos location-photos-offset">
								<div className="location-photo">
									<img src={locationPhotoTwo} alt="Grand Hotel Bucharest interior view" loading="lazy" />
								</div>
								<div className="location-photo">
									<img src={locationPhotoThree} alt="Grand Hotel Bucharest hall detail" loading="lazy" />
								</div>
							</div>
						</div>

						<div className="location-details">
							<div className="location-address">
								<div className="location-address-name">
									<a href="https://www.grandhotelbucharest.com/" target="_blank" rel="noopener noreferrer">
										Grand Hotel Bucharest
									</a>
								</div>
								<div className="location-address-line">Bulevardul Nicolae Balcescu 4, Bucharest, Romania</div>
							</div>

							<div className="transport-item">
								<div className="transport-icon">
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
										<rect x="5" y="2" width="14" height="20" rx="2" />
										<line x1="12" y1="17" x2="12" y2="17.5" strokeWidth="3" strokeLinecap="round" />
										<line x1="9" y1="6" x2="15" y2="6" />
									</svg>
								</div>
								<div>
									<div className="transport-label">Metro</div>
									<div className="transport-text">
										Nearest stop: <strong>Universitate</strong> (M2 Blue Line) - 2 min walk.
									</div>
								</div>
							</div>

							<div className="transport-item">
								<div className="transport-icon">
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
										<path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3" />
										<rect x="9" y="11" width="14" height="10" rx="2" />
										<circle cx="12" cy="21" r="1" />
										<circle cx="20" cy="21" r="1" />
									</svg>
								</div>
								<div>
									<div className="transport-label">Taxi &amp; Rideshare</div>
									<div className="transport-text">
										Bolt and Uber are widely available in Bucharest. Drop-off directly on Calea Victoriei in front of the hotel.
										Expect 5-10 min from most central areas.
									</div>
								</div>
							</div>

							<div className="transport-item">
								<div className="transport-icon">
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
										<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
										<rect x="9" y="12" width="6" height="9" />
									</svg>
								</div>
								<div>
									<div className="transport-label">From Henri Coanda Airport (OTP)</div>
									<div className="transport-text">
										<strong>Express 783 bus</strong> to Piata Unirii, then 10 min walk or short taxi - ~55 min total.{' '}
										<strong>Taxi/Bolt</strong> direct to the hotel takes 30-45 min depending on traffic and costs approx. EUR 15-20.
									</div>
								</div>
							</div>

							<div className="transport-item">
								<div className="transport-icon">
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
										<circle cx="12" cy="12" r="10" />
										<path d="M12 8v4l3 3" />
									</svg>
								</div>
								<div>
									<div className="transport-label">Parking</div>
									<div className="transport-text">
										Hotel offers underground valet parking. Public parking available at <strong>Piata Universitatii</strong> and on
										neighbouring streets. Expect limited availability - arriving by metro or taxi is recommended.
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="section" id="register">
				<div className="section-inner">
					<p className="section-label reveal">Get Your Ticket</p>
					<div className="register-card reveal reveal-delay-1">
						<h3>Secure your spot at CEE Shopify Meetup 2026</h3>
						<p>
							Seats are limited. Join hundreds of eCommerce professionals for a full day of insights, connections, and community at
							Grand Hotel Bucharest.
						</p>
						<ul className="register-perks">
							<li>Full-day access to Main Stage &amp; Workshops</li>
							<li>Buffet lunch included</li>
							<li>Afterparty access</li>
							<li>Networking with 250+ attendees</li>
							<li>Exclusive Shopify content &amp; surprise guests</li>
							<li>Expo area with booths from top solution providers</li>
						</ul>
						<div className="register-cta-group">
							<a href="https://www.eventbrite.ie/e/1980132676138?aff=oddtdtcreator" target="_blank" rel="noopener noreferrer" className="btn-primary">
								<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5">
									<path d="M20 12V22H4V12" />
									<path d="M22 7H2v5h20V7z" />
									<path d="M12 22V7" />
									<path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
									<path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
								</svg>
								Get Your Event Ticket
							</a>
							<a href="https://www.linkedin.com/company/11138525" target="_blank" rel="noopener noreferrer" className="btn-secondary">
								<svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
									<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
									<rect x="2" y="9" width="4" height="12" />
									<circle cx="4" cy="4" r="2" />
								</svg>
								Follow on LinkedIn
							</a>
						</div>
					</div>
				</div>
			</section>

			<footer className="cee-dinner-footer">
				<div className="footer-inner">
					<div className="footer-brand">
						<a href="https://vevolmedia.com/" target="_blank" rel="noopener noreferrer" className="footer-brand-link">
							Vevol Media
						</a>
						<span className="footer-brand-sep">&amp;</span>
						<a href="https://ecommerce-today.com/" target="_blank" rel="noopener noreferrer" className="footer-brand-link">
							Ecommerce Today
						</a>
					</div>
					<div className="footer-sub">Shopify Plus Partners · Organisers Of CEE Shopify Meetup</div>
					<a href="https://www.linkedin.com/company/11138525" target="_blank" rel="noopener noreferrer" className="footer-link">
						<svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
							<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
							<rect x="2" y="9" width="4" height="12" />
							<circle cx="4" cy="4" r="2" />
						</svg>
						Follow on LinkedIn
					</a>
					<div className="footer-divider"></div>
					<div className="footer-legal">© 2026 Vevol Media · CEE Shopify Meetup · Bucharest, Romania</div>
				</div>
			</footer>
		</Layout>
	);
}
