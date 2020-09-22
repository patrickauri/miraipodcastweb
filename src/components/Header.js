import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/MiraiLogo_Blue.png';

const Header = () => {
	return (
		<div className='header'>
			<Link to='/' className='logo'>
				<img src={Logo} className='logo-img' />
			</Link>
			<ul className='nav-list'>
				<Link to='/'>
					<li className='nav-item'>Hjem</li>
				</Link>
				<Link to='/om'>
					<li className='nav-item'>Om</li>
				</Link>
				<Link to='/kontakt'>
					<li className='nav-item'>Kontakt</li>
				</Link>
			</ul>
		</div>
	);
};

export default Header;
