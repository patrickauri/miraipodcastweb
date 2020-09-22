import React from 'react';

const Footer = () => {
	return (
		<React.Fragment>
			<div className='paragraph'>
				<h2>Om oss</h2>
				<p>
					Mirai Podcast er en norsk podkast som tar for seg en rekke fremtidsrettede temaer, blant annet
					språk, politikk, teknologi m.m.
				</p>
				<a href='https://www.facebook.com/MiraiPodcast' target='_blank' className='fa fa-facebook' />
				<a href='https://www.facebook.com/MiraiPodcast' target='_blank' className='fa fa-youtube' />
				<a href='https://www.facebook.com/MiraiPodcast' target='_blank' className='fa fa-twitter' />
			</div>
			<div className='footer-space' />
		</React.Fragment>
	);
};

export default Footer;
