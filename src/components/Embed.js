import React from 'react';

const YouTube = ({ url, style }) => {
	return (
		<div className={'iframe-container ' + style}>
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
