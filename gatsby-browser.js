import React from 'react';
import RootElement from './src/components/root/root';
import './src/styles/main.scss';

export const wrapRootElement = ({ element }) => {
	return <RootElement>{element}</RootElement>;
};
