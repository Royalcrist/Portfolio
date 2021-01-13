import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProjectsContext } from './contexts/ProjectsProvider.jsx';
import UsaFlag from '../../assets/static/UsaFlag.png';
import SpainFlag from '../../assets/static/SpainFlag.png';
import LangArrow from '../LangArrow';
import useStatus from '../useStatus';

const LanguageButton = props => {
	const { color } = props;
	const langBtn = useStatus();
	const { language, setLanguage } = useContext(ProjectsContext);

	return (
		<div className={`lang ${langBtn.status}`} onClick={langBtn.handleStatus}>
			<Link
				to={null}
				className={`item ${langBtn.status === 'show' ? color : ''}`}
			>
				<div>
					<img src={UsaFlag} alt='USA Flag' />
					<p>English</p>
					<LangArrow className='arrow' />
				</div>
			</Link>
			<Link to='/es' className={`item ${langBtn.status}`}>
				<div>
					<img src={SpainFlag} alt='Spain Flag' />
					<p>Spanish</p>
				</div>
			</Link>
		</div>
	);
};

export default LanguageButton;
