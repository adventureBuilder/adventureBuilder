import React from 'react';
import { Link } from 'react-router-dom';


export default function Footer() {

	return (
		<div className="footer">

			<h1 className="title">Footer</h1>
			<Link to='/about'><button className="btn">About This Project</button></Link>
			<h4></h4>

			<h1 className="title">Adventure Builder | <span className="footer-font">A&nbsp;DevMountain Student Project</span></h1>
			<Link to='/about'><h3 className="text-link">Learn More About This Project</h3></Link>


		</div>
	)
}
