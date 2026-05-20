import React, { useEffect } from 'react';

export default function ClutchWidget() {
	useEffect(() => {
		let cancelled = false;

		let attempts = 0;
		const maxAttempts = 60;
		const intervalMs = 100;

		const tryInit = () => {
			if (cancelled) {
				return;
			}

			if (typeof window !== 'undefined' && window.CLUTCHCO?.Init) {
				try {
					window.CLUTCHCO.Init();
				} catch (error) {
					console.warn('Clutch widget: Init failed', error);
				}

				return;
			}

			attempts += 1;

			if (attempts < maxAttempts) {
				window.setTimeout(tryInit, intervalMs);
			}
		};

		tryInit();

		return () => {
			cancelled = true;
		};
	}, []);

	return (
		<div className="clutch-widget-wrapper">
			<div
				className="clutch-widget"
				data-url="https://widget.clutch.co"
				data-widget-type="2"
				data-height="45"
				data-nofollow="true"
				data-expandifr="true"
				data-scale="100"
				data-clutchcompany-id="1807454"
				data-theme="white"
			></div>
		</div>
	);
}
