import React from 'react';
import './side-drawer.scss';
import { AppContext } from '../../context/app-context';
import iconClose from '../../images/icon-close.svg';

export default function SideDrawer({ children }) {
	return (
		<AppContext.Consumer>
			{({ isSideDrawerOpen, handleSideDrawer }) => {
				return (
					<div
						className={`side-drawer ${
							isSideDrawerOpen ? 'side-drawer--open' : ''
						}`}
					>
						<div
							className="side-drawer__overlay"
							onClick={() => {
								handleSideDrawer(false);
							}}
							onKeyDown={() => {
								handleSideDrawer(false);
							}}
							role="button"
							tabIndex={0}
							aria-label="Close side drawer"
						></div>
						<div className="side-drawer__content">
							<div className="side-drawer__header">
								<div
									className="extra-nav__close"
									role="button"
									tabIndex={0}
									onClick={() => {
										handleSideDrawer(false);
									}}
									onKeyDown={() => {
										handleSideDrawer(false);
									}}
								>
									<img
										src={iconClose}
										alt="Close side drawer"
									/>
								</div>
							</div>
							{children}
						</div>
					</div>
				);
			}}
		</AppContext.Consumer>
	);
}
