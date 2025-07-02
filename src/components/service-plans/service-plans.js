import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Title } from 'bloomer/lib/elements/Title';
import './service-plans.scss';
import servicePlans from '../../enums/service-plans';
import { AppContext } from '../../context/app-context';
import { useTranslations } from '../../helpers/useTranslations';

export default function ServicePlans({ scrollToFeatures }) {
	const statigSegments = useRef();
	const fixedSegments = useRef();
	const plansList = useRef();
	const [activeSegment, setActiveSegment] = useState('Quaterly');
	const { t, currentLocale } = useTranslations();
	const useIsInViewport = (ref) => {
		const [isIntersecting, setIsIntersecting] = useState(false);

		const observer = useMemo(
			() =>
				typeof window !== 'undefined'
					? new IntersectionObserver(([entry]) => setIsIntersecting(entry.isIntersecting))
					: null,
			[]
		);

		useEffect(() => {
			observer.observe(ref.current);

			return () => {
				observer.disconnect();
			};
		}, [ref, observer]);

		return isIntersecting;
	};

	const plansInViewport = useIsInViewport(plansList);
	const staticSegmentsInViewport = useIsInViewport(statigSegments);

	return (
		<div className="service-plans">
			<div className="service-plans__segments" ref={statigSegments}>
				{/* <p>Payment Plan:</p> */}
				{/* <div className="segments__types">
					{['Quaterly', 'Yearly'].map((segment, index) => (
						<span
							key={index}
							onClick={() => {
								setActiveSegment(segment);
							}}
							onKeyUp={(e) => {
								if (e.keyCode === 32) {
									setActiveSegment(segment);
								}
							}}
							className={activeSegment === segment ? 'segment-active' : ''}
							role="presentation"
						>
							{segment}
						</span>
					))}
				</div> */}
			</div>
			<div
				className={`service-plans__segments service-plans__segments--fixed ${
					plansInViewport && !staticSegmentsInViewport ? 'service-plans__segments--visible' : ''
				}`}
				ref={fixedSegments}
			>
				<p>{t('servicePlans.paymentPlan')}</p>
				<div className="segments__types">
					{['Quaterly', 'Yearly'].map((segment, index) => (
						<span
							key={index}
							onClick={() => {
								setActiveSegment(segment);
							}}
							onKeyUp={(e) => {
								if (e.keyCode === 32) {
									setActiveSegment(segment);
								}
							}}
							className={activeSegment === segment ? 'segment-active' : ''}
							role="presentation"
						>
							{segment}
						</span>
					))}
				</div>
			</div>
			<div className="service-plans__list" ref={plansList}>
				{servicePlans[currentLocale].map((plan, index) => {
					const currentSegment = activeSegment.toLocaleLowerCase();
					let planPrice = plan.prices[currentSegment];
					const yearlyPrice = (planPrice / 1000).toFixed(1);

					planPrice = `${yearlyPrice}k`;

					return (
						<div className="service-plans__plan" key={index}>
							<div className="service-plan__description">
								<Title tag="h2" isSize={3}>
									{plan.title}
								</Title>
								<p>{plan.description}</p>
							</div>
							{index === 0 && (
								<div className="service-plan__popular">{t('servicePlans.featurePacked')}</div>
							)}
							<div className="service-plan__features">
								<Title tag="h3" isSize={5}>
									{t('servicePlans.features')}
								</Title>
								<ul>
									{plan.features.map((feature, index) => (
										<li key={index}>
											<span>✔</span>
											<p>{feature}</p>
										</li>
									))}
								</ul>
								<span
									className="plan-features__link"
									onClick={() => {
										scrollToFeatures();
									}}
									onKeyUp={(e) => {
										if (e.keyCode === 32) {
											scrollToFeatures();
										}
									}}
									role="presentation"
								>
									{t('servicePlans.viewFeaturesIndex')}
								</span>
							</div>
							<div className="service-plan__hours">
								<p>{t('servicePlans.committedHours')}</p>
								<span>{plan.hours}</span>
							</div>
							<div className="service-plan__actions">
								{/* <div className="plan-actions__pricing">
									<p>€{planPrice}</p>
									<span>(€{perHour.toFixed(2)}/hour)</span>
								</div> */}
								<AppContext.Consumer>
									{({ handleSideDrawer }) => {
										return (
											<div
												className="vm-button vm-button--black"
												onClick={() => {
													handleSideDrawer(true);
												}}
												onKeyDown={() => {
													handleSideDrawer(true);
												}}
												role="button"
												tabIndex={0}
											>
												{t('servicePlans.getStarted')}
											</div>
										);
									}}
								</AppContext.Consumer>
							</div>
						</div>
					);
				})}
				<div className="service-plans__plan enterprise-plan">
					<div className="service-plan__description">
						<Title tag="h2" isSize={3}>
							Enterprise
						</Title>
						<p>{t('servicePlans.enterprisePlanDescription')}</p>
					</div>
					<div className="enterprise-plan__bottom">
						<div className="service-plan__features">
							<Title tag="h3" isSize={5}>
								{t('servicePlans.features')}
							</Title>
							<ul>
								<li>
									<span>✔</span>
									<p>{t('servicePlans.allFeaturesAvailable')}</p>
								</li>
								<li>
									<span>✔</span>
									<p>{t('servicePlans.reducedCosts')}</p>
								</li>
								<li>
									<span>✔</span>
									<p>{t('servicePlans.highPriority')}</p>
								</li>
							</ul>
							<span
								className="plan-features__link"
								onClick={() => {
									scrollToFeatures();
								}}
								onKeyUp={(e) => {
									if (e.keyCode === 32) {
										scrollToFeatures();
									}
								}}
								role="presentation"
							>
								{t('servicePlans.viewFeaturesIndex')}
							</span>
							<div className="service-plan__hours">
								<p>{t('servicePlans.committedHours')}</p>
								<span>{t('servicePlans.fullTime')}</span>
							</div>
						</div>
						<div className="service-plan__actions">
							<div className="plan-actions__pricing">
								<p>{t('servicePlans.customPricing')}</p>
								{/* <span>Starting at €420/day</span> */}
							</div>
							<AppContext.Consumer>
								{({ handleSideDrawer }) => {
									return (
										<div
											className="vm-button vm-button--black"
											onClick={() => {
												handleSideDrawer(true);
											}}
											onKeyDown={() => {
												handleSideDrawer(true);
											}}
											role="button"
											tabIndex={0}
										>
											{t('servicePlans.askForAvailability')}
										</div>
									);
								}}
							</AppContext.Consumer>
						</div>
					</div>
				</div>
			</div>
			{/* <div className="service-plans__notice">
				<p>
					By selecting one of our service plans, you can reduce costs by up to{' '}
					<strong>32%</strong>.
				</p>
				<p>
					The figures have been rounded. For example, €2,328 has been rounded to €2.3k. Precise prices are
					available upon request.
				</p>
				<p>All prices are exclusive of VAT.</p>
			</div> */}
		</div>
	);
}
