import React from 'react';

const YouTube = ({ url }) => {
	return (
		<div className='iframe-container'>
			<iframe
				className='youtube-embed'
				src={url}
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
				allowfullscreen
			/>
		</div>
	);
};

const Twitch = ({ url }) => {
	return 'Twitch';
};

export { YouTube, Twitch };
