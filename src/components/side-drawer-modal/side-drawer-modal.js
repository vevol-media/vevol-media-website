import React from 'react';
import './side-drawer-modal.scss';
import iconClose from '../../images/icon-close.svg';

export default function SideDrawerModal({
	children,
	toggleModalContact,
	valueToggleModalContact,
}) {
	console.log(toggleModalContact);
	return (
		<div
			onClick={(e) => toggleModalContact(e)}
			className={`side-drawer ${
				valueToggleModalContact ? 'side-drawer--open' : ''
			} `}
		>
			<div className="side-drawer__container">
				<div className="side-drawer__close">
					<img src={iconClose} alt="Close Side drawer" />
				</div>
				{children}
			</div>
		</div>
	);
}
