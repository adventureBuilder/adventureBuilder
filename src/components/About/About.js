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
					<div className="mobile-pad">
					<p>Adventure Builder is a DevMountain student project designed to empower the player with the freedom to create their own story adventure and then journey through it.
					</p>
					<h3>Battle Roll</h3>
					<p>No journey encounter will be quite the same with our 'Battle Roll' which will roll a 1d6 die and check the result against the condition for success of each encounter.
					</p>
					<h3>Character Stats</h3>
					<p>The class you choose and its strengths will influence how your character attempts to overcome each encounter. The Battle Roll will be enhanced (or reduced) by the corresponding stat to determine the outcome.  Your character must then face the consequences of the 'Success' or 'Failure' before continuing on their journey.
					</p>
					<h3>Build & Share Adventures</h3>
					<p>You can create an adventure using the story builder tool, and share it for other players to journey through.  Use your imagination to forge new stories with encounters, obstacles, and path choices and decide the fate of those that succeed and fail your adventure.</p>
					<h4><i>Travel across beautiful landscapes, encounter dangerous opposition, overcome odds of the dice, and become a legendary hero.</i></h4>
					
					</div>
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
								<h1 className="bio-name">Blake Adams</h1>
								<h3 className="nickname">"CSS Soothsayer"</h3>
								<p className="bio-blurb">Blake joined DevMountain to push his development skills to the next level, desiring to be a true full-stack developer instead of just a front-end developer/designer.</p>
								{/* <h3 className="bio-subhead">Roles</h3> */}
								<p className="bio-roles">
									<span className="role">Design</span>
									<span className="role">Styling</span>
									<span className="role">Animations</span>
									<span className="role">Components</span>
									<span className="role">Redux</span>
									<span className="role">Testing</span>
								</p>
								{/* <h3 className="bio-subhead">Bio</h3> */}

							</div>

						</div>
						<div className="team-row">
							<div className="team-col hide-desktop">
								<img className="bio-img" src={paulImg} alt="" />
							</div>
							<div className="team-col">
								<h1 className="bio-name">Paul Polzer</h1>
								<h3 className="nickname">"Master Wordsmith"</h3>
								<p className="bio-blurb">Excited by the concept of digitizing creative ideas, Paul moved back from Japan to America to pursue a new career in computer programming.</p>
								{/* <h3 className="bio-subhead">Roles</h3> */}
								<p className="bio-roles">
									<span className="role">Story Writing</span>
									<span className="role">Database</span>
									<span className="role">Styling</span>
									<span className="role">Components</span>
									<span className="role">Animations</span>
									<span className="role">Testing</span>
								</p>
								{/* <h3 className="bio-subhead">Bio</h3> */}
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
								<h1 className="bio-name">Seth Stephenson</h1>
								<h3 className="nickname">"The Artisan"</h3>
								<p className="bio-blurb">Seth joined DevMountain because he likes to build things (pottery, jewelry, tee shirts, businesses) and is excited to combine that passion with the powerful tools available through web development.</p>
								{/* <h3 className="bio-subhead">Roles</h3> */}
								<p className="bio-roles">
									<span className="role">Design</span>
									<span className="role">Illustration</span>
									<span className="role">Components</span>
									<span className="role">Redux</span>
									<span className="role">Testing</span>
								</p>
								{/* <h3 className="bio-subhead">Bio</h3> */}
							</div>

						</div>
						<div className="team-row">
							<div className="team-col hide-desktop">
								<img className="bio-img" src={danImg} alt="" />
							</div>
							<div className="team-col">
								<h1 className="bio-name">Dan Valentine</h1>
								<h3 className="nickname">"Database Slayer"</h3>
								<p className="bio-blurb">Live it. Rock it. Do it. Volcom.</p>
								{/* <h3 className="bio-subhead">Roles</h3> */}
								<p className="bio-roles">
									<span className="role">Database Architect</span>
									<span className="role">Server</span>
									<span className="role">Components</span>
									<span className="role">Animation</span>
									<span className="role">Testing</span>
								</p>
								{/* <h3 className="bio-subhead">Bio</h3> */}
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
								<h1 className="bio-name">Victoria Yorgesen</h1>
								<h3 className="nickname">"Redux Warrior"</h3>
								<p className="bio-blurb">Victoria joined DevMountain in search of career that demanded constant fast paced learning and problem solving. Originally, she worked in HCA hospitals after graduating from BYU Provo with a degree in Medical Laboratory Science B.S. After being introduced to programming, she realized that software development would provide her with new material to learn at a much faster pace than her previous career. She enjoys the chance to learn, problem solve and exercise her creativity.</p>
								{/* <h3 className="bio-subhead">Roles</h3> */}
								<p className="bio-roles">
									<span className="role">Database</span>
									<span className="role">Server</span>
									<span className="role">Redux</span>
									<span className="role">Components</span>
									<span className="role">Styling</span>
									<span className="role">Testing</span>
								</p>
								{/* <h3 className="bio-subhead">Bio</h3> */}
							</div>

						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}
