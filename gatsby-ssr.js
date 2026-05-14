import React from 'react';
import RootElement from './src/components/root/root';

export const onRenderBody = ({ setHeadComponents }) => {
	setHeadComponents([<script key="ClutchWidgetScript" src="https://widget.clutch.co/static/js/widget.js" />]);
	setHeadComponents([<script key="VevolMediaScript" src="https://r2.leadsy.ai/tag.js" data-pid="LqpyEn9xK88UapNc" data-version="062024" />]);
};

export const wrapRootElement = ({ element }) => {
	return <RootElement>{element}</RootElement>;
};
