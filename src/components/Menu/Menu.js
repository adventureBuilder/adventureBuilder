import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {

	return (
		<div className="menu">
			<h1 className="title">Adventure Builder</h1>
			<Link to='/tavern'><button className="btn">Tavern</button></Link>
		</div>
	)
}
