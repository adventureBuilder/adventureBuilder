import React from 'react';
import { Link } from 'react-router-dom';

import Menu from './../Menu/Menu';
import Footer from './../Menu/Footer';

import blakeImg from './../../images/blake-bio2.png';

export default function About() {

	return (
		<div className="about">
			<Menu />
			<div className="page">
				<h1 className="title">About Adventure Builder</h1>

				<h1 className="title">Meet The Team</h1>

				<div className="team-row">
					<div className="team-col">
						<img className="bio-img" src={blakeImg} alt="" />
					</div>
					<div className="team-col">
						<h2>Blake Adams</h2>
						<h3>Roles</h3>
						<p>Design | Components | Styling | React Reducer</p>
						<h3>Bio</h3>
						<p>Blake joined DevMtn to push his development skills to the next level, desiring to be a true full stack developer instead of just a front-end developer/designer.</p>
					</div>

				</div>
				<div className="team-row">
					<div className="team-col">
						<h2>Paul Polzer</h2>
						<h3>Roles</h3>
						<p>Did stuff</p>
						<h3>Bio</h3>
						<p>Paul has a cool bio</p>
					</div>
					<div className="team-col">
						<img className="bio-img" src={blakeImg} alt="" />
					</div>

				</div>
				<div className="team-row">
					<div className="team-col">
						<img className="bio-img" src={blakeImg} alt="" />
					</div>
					<div className="team-col">
						<h2>Seth Stephenson</h2>
						<h3>Roles</h3>
						<p>Did stuff</p>
						<h3>Bio</h3>
						<p>Seth has a cool bio</p>
					</div>

				</div>
				<div className="team-row">
					<div className="team-col">
						<h2>Dan Valentine</h2>
						<h3>Roles</h3>
						<p>Did stuff</p>
						<h3>Bio</h3>
						<p>Dan has a cool bio</p>
					</div>
					<div className="team-col">
						<img className="bio-img" src={blakeImg} alt="" />
					</div>

				</div>
				<div className="team-row">
					<div className="team-col">
						<img className="bio-img" src={blakeImg} alt="" />
					</div>
					<div className="team-col">
						<h2>Victoria Yorgesen</h2>
						<h3>Roles</h3>
						<p>Did stuff</p>
						<h3>Bio</h3>
						<p>Victoria has a cool bio</p>
					</div>

				</div>
			</div>
			<Footer />
		</div>
	)
}
