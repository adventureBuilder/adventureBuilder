import React from 'react';

import Menu from './../Menu/Menu';
import Footer from './../Menu/Footer';

// import blakeImg2 from './../../images/blake-bio2.png';
import blakeImg from './../../images/blake-adams.png';
import paulImg from './../../images/paul-polzer.png';
import sethImg from './../../images/seth-stephenson.png';
import danImg from './../../images/daniel-valentine.png';
import victoriaImg from './../../images/victoria-yorgesen.png';

export default function About() {

	return (
		<div className="about">
			<Menu />
			<div className="page">

				<h1 className="view-title">About Adventure Builder</h1>
				<div className="block-card-inner">
					<p className="mobile-pad">Adventure Builder is a DevMountain student project designed to empower the player with the freedom to create their own story adventure and then play it.  
					</p>
					<p className="mobile-pad">You can play through an adventure shared by other players or create your own using the story builder tool!  Use your imagination to forge your own encounters, obstacles, and path choices.  Decide the fate of those that succeed and fail your adventure. Travel across beautiful landscapes, encounter dangerous opposition, overcome odds of the dice, and become a legendary hero.</p>
				</div>

				<div className="block-card">

					<h1 className="sub-title">Meet The Team</h1>
					<div className="block-card-inner">
						<p></p>


						<div className="team-row">
							<div className="team-col">
								<img className="bio-img" src={blakeImg} alt="" />
							</div>
							<div className="team-col">
								<h2>Blake Adams</h2>
								<h3>Roles</h3>
								<p>Design | Styling | Animations | Components | React Reducer | Testing</p>
								<h3>Bio</h3>
								<p>Blake joined DevMountain to push his development skills to the next level, desiring to be a true full-stack developer instead of just a front-end developer/designer.</p>
							</div>

						</div>
						<div className="team-row">
						<div className="team-col hide-desktop">
								<img className="bio-img" src={paulImg} alt="" />
							</div>
							<div className="team-col">
								<h2>Paul Polzer</h2>
								<h3>Roles</h3>
								<p>Story Writing | Database | Styling | Components | Animations | Testing</p>
								<h3>Bio</h3>
								<p>Excited by the concept of digitizing creative ideas, Paul moved back from Japan to America to pursue a new career in computer programming.</p>
							</div>
							<div className="team-col hide-mobile">
								<img className="bio-img" src={paulImg} alt="" />
							</div>

						</div>
						<div className="team-row">
							<div className="team-col">
								<img className="bio-img" src={sethImg} alt="" />
							</div>
							<div className="team-col">
								<h2>Seth Stephenson</h2>
								<h3>Roles</h3>
								<p>Design | Illustration | Components | React Reducer | Testing </p>
								<h3>Bio</h3>
								<p>Seth joined DevMountain because he likes to build things (pottery, jewelry, tee shirts, businesses) and is excited to combine that passion with the powerful tools available through web development.</p>
							</div>

						</div>
						<div className="team-row">
						<div className="team-col hide-desktop">
								<img className="bio-img" src={danImg} alt="" />
							</div>
							<div className="team-col">
								<h2>Dan Valentine</h2>
								<h3>Roles</h3>
								<p>Database Architect | Server | Components | Animation | Testing</p>
								<h3>Bio</h3>
								<p>Live it. Rock it. Do it. Volcom.</p>
							</div>
							<div className="team-col hide-mobile">
								<img className="bio-img" src={danImg} alt="" />
							</div>

						</div>
						<div className="team-row">
							<div className="team-col">
								<img className="bio-img" src={victoriaImg} alt="" />
							</div>
							<div className="team-col">
								<h2>Victoria Yorgesen</h2>
								<h3>Roles</h3>
								<p>Database | Server | React Reducer | Components | Styling | Testing</p>
								<h3>Bio</h3>
								<p>Victoria joined DevMountain in search of career that demanded constant fast paced learning and problem solving. Originally, she worked in HCA hospitals after graduating from BYU Provo with a degree in Medical Laboratory Science B.S. After being introduced to programming, she realized that software development would provide her with new material to learn at a much faster pace than her previous career. She enjoys the chance to learn, problem solve and exercise her creativity.</p>
							</div>

						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}
