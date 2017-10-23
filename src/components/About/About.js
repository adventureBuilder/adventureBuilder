import React from 'react';
import { Link } from 'react-router-dom';

import Menu from './../Menu/Menu';
import Footer from './../Menu/Footer';

export default function About() {

	return (
		<div className="about">
            <Menu />
                <div className="page">
					<h1 className="title">About Adventure Builder</h1>

					<h1 className="title">Meet The Team</h1>

					<div className="team-row">
					<div className="team-col">
						<img className="team-img" src="" alt=""/>
						</div>
						<div className="team-col">
							<h2>Blake Adams</h2>
							<h3>Roles</h3>
							<p>Design Components Styling React Reducer</p>
							<h3>Bio</h3>
							<p>Blake joined DevMtn to push his development skills to the next level, desiring to be a true full stack developer instead of just a front-end developer/designer.</p>
						</div>

					</div>
				</div>
			<Footer />
		</div>
	)
}
