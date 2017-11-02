import React from 'react';
import { Link } from 'react-router-dom';

import logoIcon from '../../images/sword-feather-icon.png';
import tavernIcon from '../../images/ab-tavern-icon.svg';

export default function GameMenu() {

	return (
		<div className="menu">
			<div className="logo-container">
				<div className="logo-box">
					<img className="logo-icon" src={logoIcon} alt="" />
				</div>
				
			</div>
			<nav>
				
				<Link to='/tavern' className="tavern-btn">
					<img className="tavern-icon" src={tavernIcon} alt="Tavern" />
				</Link>
			</nav>
		</div>
	)
}
