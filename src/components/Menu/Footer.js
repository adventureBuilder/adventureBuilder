import React from 'react';
import { Link } from 'react-router-dom';


export default function Footer() {

	return (
		<div className="footer">
			<h1 className="title">Footer</h1>
			<Link to='/about'><button className="btn">About This Project</button></Link>
		</div>
	)
}
