import { useEffect } from 'react';

/**
 * Hero / carousel / countdown / reveal observers for CEE meetup landing.
 * Pauses work when off-screen or tab hidden; respects prefers-reduced-motion.
 */
export default function useMeetupLandingEffects() {
	useEffect(() => {
		if (typeof window === 'undefined') {
			return undefined;
		}

		const pageRoot = document.querySelector('.cee-dinner-page');
		const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
		const prefersReducedMotion = () => motionQuery.matches;

		const revealObserved = new WeakSet();
		let revealObserver;
		let revealMutationObserver;

		if (window.IntersectionObserver) {
			revealObserver = new window.IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							entry.target.classList.add('visible');
						}
					});
				},
				{ threshold: 0.08 },
			);

			const observeRevealEl = (el) => {
				if (!(el instanceof Element) || revealObserved.has(el)) {
					return;
				}

				revealObserved.add(el);
				revealObserver.observe(el);
			};

			const scanSubtreeForReveals = (root) => {
				if (!(root instanceof Element)) {
					return;
				}

				if (root.classList.contains('reveal')) {
					observeRevealEl(root);
				}

				root.querySelectorAll('.reveal').forEach(observeRevealEl);
			};

			if (pageRoot) {
				scanSubtreeForReveals(pageRoot);
				revealMutationObserver = new MutationObserver((mutations) => {
					mutations.forEach((mutation) => {
						mutation.addedNodes.forEach((node) => {
							if (node instanceof Element) {
								scanSubtreeForReveals(node);
							}
						});
					});
				});
				revealMutationObserver.observe(pageRoot, { childList: true, subtree: true });
			}
		}

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

		let carouselInView = true;

		const syncCarouselPaused = () => {
			if (!(carouselMarquee instanceof HTMLElement)) {
				return;
			}

			const paused = document.hidden || !carouselInView || prefersReducedMotion();

			carouselMarquee.classList.toggle('is-animation-paused', paused);
		};

		let carouselIo;

		if (window.IntersectionObserver && carouselMarquee) {
			carouselIo = new IntersectionObserver(
				(entries) => {
					carouselInView = entries.some((e) => e.isIntersecting);
					syncCarouselPaused();
				},
				{ threshold: 0, rootMargin: '80px 0px' },
			);
			carouselIo.observe(carouselMarquee);
		}

		syncCarouselPaused();

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

		const startCountdown = () => {
			if (countdownIntervalId != null) {
				return;
			}

			updateCountdown();
			countdownIntervalId = window.setInterval(updateCountdown, 1000);
		};

		const stopCountdown = () => {
			if (countdownIntervalId != null) {
				window.clearInterval(countdownIntervalId);
				countdownIntervalId = undefined;
			}
		};

		const syncCountdownRunning = () => {
			if (document.hidden) {
				stopCountdown();

				return;
			}

			startCountdown();
		};

		syncCountdownRunning();

		let applyHeroCanvasState = () => {};

		const heroSectionElement = document.getElementById('hero');
		const heroCanvasElement = document.getElementById('hero-canvas');
		let animationFrameId;
		let canvasResizeTimeoutId;
		let heroMouseMoveHandler;
		let heroMouseLeaveHandler;
		let canvasResizeHandler;
		let heroIo;
		let drawDots;
		let stopCanvasLoop;
		let startCanvasLoop;

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
				let heroInView = true;
				let canvasLoopActive = false;

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

				const drawStaticDots = () => {
					canvasContext.clearRect(0, 0, canvasWidth, canvasHeight);

					dots.forEach((dot) => {
						canvasContext.beginPath();
						canvasContext.arc(dot.ox, dot.oy, baseDotRadius, 0, Math.PI * 2);
						canvasContext.fillStyle = 'rgba(10,158,114,0.13)';
						canvasContext.fill();
					});
				};

				drawDots = () => {
					if (!canvasLoopActive) {
						return;
					}

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

				stopCanvasLoop = () => {
					canvasLoopActive = false;

					if (animationFrameId != null) {
						window.cancelAnimationFrame(animationFrameId);
						animationFrameId = undefined;
					}
				};

				startCanvasLoop = () => {
					if (prefersReducedMotion()) {
						return;
					}

					if (canvasLoopActive) {
						return;
					}

					canvasLoopActive = true;
					drawDots();
				};

				const syncHeroCanvas = () => {
					if (prefersReducedMotion()) {
						stopCanvasLoop();
						resizeCanvas();
						drawStaticDots();

						return;
					}

					if (document.hidden || !heroInView) {
						stopCanvasLoop();

						return;
					}

					resizeCanvas();
					startCanvasLoop();
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
					canvasResizeTimeoutId = window.setTimeout(() => {
						syncHeroCanvas();
					}, 50);
				};

				if (!prefersReducedMotion()) {
					heroSectionElement.addEventListener('mousemove', heroMouseMoveHandler);
					heroSectionElement.addEventListener('mouseleave', heroMouseLeaveHandler);
				}

				window.addEventListener('resize', canvasResizeHandler);

				if (window.IntersectionObserver) {
					heroIo = new IntersectionObserver(
						(entries) => {
							heroInView = entries.some((e) => e.isIntersecting);
							syncHeroCanvas();
						},
						{ threshold: 0, rootMargin: '120px 0px' },
					);
					heroIo.observe(heroSectionElement);
				}

				applyHeroCanvasState = syncHeroCanvas;
				syncHeroCanvas();
			}
		}

		const onVisibilityChange = () => {
			syncCountdownRunning();
			syncCarouselPaused();
			applyHeroCanvasState();
		};

		const onMotionChange = () => {
			syncCarouselPaused();

			if (heroSectionElement && heroMouseMoveHandler && heroMouseLeaveHandler) {
				if (prefersReducedMotion()) {
					heroSectionElement.removeEventListener('mousemove', heroMouseMoveHandler);
					heroSectionElement.removeEventListener('mouseleave', heroMouseLeaveHandler);
				} else {
					heroSectionElement.addEventListener('mousemove', heroMouseMoveHandler);
					heroSectionElement.addEventListener('mouseleave', heroMouseLeaveHandler);
				}
			}

			applyHeroCanvasState();
		};

		document.addEventListener('visibilitychange', onVisibilityChange);

		if (typeof motionQuery.addEventListener === 'function') {
			motionQuery.addEventListener('change', onMotionChange);
		} else {
			motionQuery.addListener(onMotionChange);
		}

		return () => {
			document.removeEventListener('visibilitychange', onVisibilityChange);

			if (typeof motionQuery.removeEventListener === 'function') {
				motionQuery.removeEventListener('change', onMotionChange);
			} else {
				motionQuery.removeListener(onMotionChange);
			}

			if (revealMutationObserver) {
				revealMutationObserver.disconnect();
			}

			if (revealObserver) {
				revealObserver.disconnect();
			}

			if (carouselIo) {
				carouselIo.disconnect();
			}

			if (heroIo) {
				heroIo.disconnect();
			}

			window.removeEventListener('resize', updateCarouselShift);
			stopCountdown();
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
}
