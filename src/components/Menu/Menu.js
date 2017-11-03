import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import Login from './Login'
import Logout from './Logout'
import logoIcon from '../../images/sword-feather-icon.png';
import tavernIcon from '../../images/ab-tavern-icon.svg';

function Menu({ title, user }) {

	return (
		<div className="menu">
			<div className="logo-container">
				<div className="logo-box">
					<img className="logo-icon" src={logoIcon} alt="" />
				</div>
				<Link to='/'><h1 className="title">Adventure Builder</h1></Link>
				<h2 className={`page-title ${title}`}>{title}</h2>
			</div>
			<nav>

				<Link to='/about' className="nav-item">About</Link>
				{
					user.user_id
						?
						<div>
							<Link to='/newstory' className="nav-item">Story&nbsp;Creator</Link>
							<Logout />
							<Link to='/tavern' className="nav-item tavern-btn">
								<img className="tavern-icon" src={tavernIcon} alt="Tavern" />
							</Link>
						</div>
						:

						<div>
							<Login />
						</div>
				}

			</nav>
		</div>
	)
}
function mapStateToProps(state) {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps, {})(Menu);