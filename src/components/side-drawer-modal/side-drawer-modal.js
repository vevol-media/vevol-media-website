import React from 'react';
import './side-drawer-modal.scss';
import iconClose from '../../images/icon-close.svg';

export default function SideDrawerModal({children,toggleModalContact,valueToggleModalContact,}) {
	return (
		<div
			onClick={(e) => toggleModalContact(e)}
			className={`side-drawer ${
				valueToggleModalContact ? 'side-drawer--open' : ''
			} `}
		>
			<div className="side-drawer__container">
				<div className="side-drawer__close" onClick={(e) => toggleModalContact(e)}>
					<img className="side-drawer__close-image" src={iconClose}  alt="Close side drawer"/>
				</div>
				{children}
			</div>
		</div>
	);
}
