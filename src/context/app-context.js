import React, { createContext, useState, useEffect } from 'react';
import { getCurrentLocale } from '../helpers/translations';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);
	const [currentLocale, setCurrentLocale] = useState('en');

	const handleSideDrawer = () => {
		setIsSideDrawerOpen(!isSideDrawerOpen);
	};

	// Update locale when path changes
	useEffect(() => {
		const updateLocale = () => {
			setCurrentLocale(getCurrentLocale());
		};

		// Set initial locale
		updateLocale();

		// Listen for route changes
		window.addEventListener('popstate', updateLocale);

		// Custom event for programmatic navigation
		window.addEventListener('localeChanged', updateLocale);

		return () => {
			window.removeEventListener('popstate', updateLocale);
			window.removeEventListener('localeChanged', updateLocale);
		};
	}, []);

	return (
		<AppContext.Provider
			value={{
				isSideDrawerOpen,
				handleSideDrawer,
				currentLocale,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
