import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import '../../assets/styles/Header.scss';
import SocialMedia from '../components/SocialMedia';
import Menu from '../../assets/static/Menu.svg';
import Close from '../../assets/static/Close.svg';
import LanguageButton from './LanguageButton';

const Header = props => {
	const {
		index,
		showLogo,
		showNav,
		hideMenu,
		hideBg,
		color,
		socialMedia,
	} = props;
	const { github, linkedin } = socialMedia;
	const [logo, setLogo] = useState(null);
	const [menu, setMenu] = useState(null);
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		if (showLogo) {
			setLogo(
				<React.Fragment>
					<div className='logo'>
						<span>cristian</span>
						<div className={`logo-dot ${color}`}></div>
					</div>
				</React.Fragment>,
			);
		} else {
			setLogo(null);
		}
	}, [showLogo, color]);

	useEffect(() => {
		if (!hideMenu) {
			setMenu(
				<>
					<div className={`menu ${isActive ? 'active' : ''}`}>
						<div
							className='navbar-i-group'
							style={!showNav ? { display: 'none' } : {}}
						>
							<div className={`selected-box selected-${index}`}></div>
							<HashLink
								to='/#me'
								className={`navbar-i ${index === 1 ? 'selected' : ''}`}
								onClick={() => {
									if (isActive) setIsActive(!isActive);
								}}
							>
								Home
							</HashLink>
							<HashLink
								to='/#projects'
								className={`navbar-i ${index === 2 ? 'selected' : ''}`}
								onClick={() => {
									if (isActive) setIsActive(!isActive);
								}}
							>
								Projects
							</HashLink>
							<HashLink
								to='/#contact'
								className={`navbar-i ${index === 3 ? 'selected' : ''}`}
								onClick={() => {
									if (isActive) setIsActive(!isActive);
								}}
							>
								Contact
							</HashLink>
						</div>

						<LanguageButton color={color} />

						<div className='media-container-nav'>
							<SocialMedia media={github} />
							<SocialMedia media={linkedin} />
						</div>
					</div>

					<button
						className={`menu-btn ${isActive ? 'active' : ''}`}
						onClick={() => {
							setIsActive(!isActive);
						}}
					>
						<img src={!isActive ? Menu : Close} alt='Menu icon' />
					</button>
				</>,
			);
		} else {
			setMenu(null);
		}
	}, [hideMenu, index, isActive, color, socialMedia]);

	return (
		<nav className={`navbar ${isActive ? 'active' : ''}`}>
			<div className={`nav-bg ${hideBg ? 'hide-bg' : ''}`}></div>

			{logo}

			{menu}
		</nav>
	);
};

export default Header;
