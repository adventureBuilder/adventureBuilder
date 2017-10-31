import React from 'react';
import { Link } from 'react-router-dom';


export default function Footer() {

	return (
		<div className="footer">
			<h1 className="title">Adventure Builder | <span className="footer-font">A&nbsp;DevMountain Student Project</span></h1>
			<Link to='/about'><h3 className="text-link">Learn More About This Project</h3></Link>
		</div>
	)
}
