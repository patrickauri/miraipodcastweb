import React from 'react';
import Patrick from '../img/Pato_01.png';

const About = () => {
	return (
		<div className='content'>
			<div className='content-jumbo'>
				<p className='jumbo-text'>Hvem er vi?</p>
			</div>
			<div className='paragraph person-box'>
				<img src={Patrick} className='portrait' />
				<div className='info-box'>
					<h1>Patrick Auri</h1>
					<p className='info-desc'>Vert og hovedperson bak Mirai Podcast</p>
					<p className='info-tags'>Lingvistikkstudent, musiker, hobbyprogrammerer</p>
				</div>
			</div>
		</div>
	);
};

export default About;
