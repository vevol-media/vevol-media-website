import React, { useEffect } from 'react';

export default function ClutchWidget() {
	useEffect(() => {
		typeof window !== 'undefined' && window.CLUTCHCO.Init();
	});

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
