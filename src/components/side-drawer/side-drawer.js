import React from 'react';
import './side-drawer.scss';
import { AppContext } from '../../context/app-context';

export default function SideDrawer({ children }) {
	return (
		<AppContext.Consumer>
			{({ isSideDrawerOpen }) => {
				return (
					<div className={`side-drawer ${isSideDrawerOpen ? 'side-drawer--open' : ''}`}>
						<div className="side-drawer__overlay"></div>
						<div className="side-drawer__content">{children}</div>
					</div>
				);
			}}
		</AppContext.Consumer>
	);
}
