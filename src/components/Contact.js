import React from 'react';

const Contact = () => {
	return (
		<div className='content'>
			<div className='content-jumbo'>
				<p className='jumbo-text'>Kontakt</p>
			</div>
			<div className='paragraph'>
				Er du interessert i å samarbeide med oss? Vi kan kontaktes på Facebook, eller via E-post
			</div>
			<div className='paragraph p-center'>
				<button className='btn'>
					<a href='mailto:miraipodcast@gmail.com' target='_blank'>
						Kontakt via E-post
					</a>
				</button>
				<button className='btn'>
					<a href='https://www.facebook.com/MiraiPodcast' target='_blank'>
						Kontakt via Facebook
					</a>
				</button>
			</div>
		</div>
	);
};

export default Contact;
