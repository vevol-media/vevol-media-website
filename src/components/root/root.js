import React from 'react';
import { AppProvider } from '../../context/app-context';

export default function RootElement({ children }) {
	return <AppProvider>{children}</AppProvider>;
}
