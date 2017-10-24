import React from 'react';
import { Link } from 'react-router-dom';
import logoIcon from '../../images/sword-feather-icon.png'

export default function Menu() {

	return (
		<div className="menu">
			<div className="logo-container">
				<div className="logo-box">
					<img className="logo-icon" src={logoIcon} alt="" />
				</div>
				<h1 className="title">Adventure Builder</h1>
			</div>
			<Link to='/tavern'><button className="btn">Tavern</button></Link>
		</div>
	)
}
