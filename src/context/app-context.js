import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);

	const handleSideDrawer = () => {
		setIsSideDrawerOpen(!isSideDrawerOpen);
	};

	return (
		<AppContext.Provider
			value={{
				isSideDrawerOpen,
				handleSideDrawer,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
