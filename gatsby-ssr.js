import React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
	setHeadComponents([<script key="ClutchWidgetScript" src="https://widget.clutch.co/static/js/widget.js" />]);
};
