import React from 'react';
import RootElement from './src/components/root/root';

export const onRenderBody = ({ setHeadComponents }) => {
	setHeadComponents([<script key="ClutchWidgetScript" src="https://widget.clutch.co/static/js/widget.js" />]);
};

export const wrapRootElement = ({ element }) => {
	return <RootElement>{element}</RootElement>;
};
