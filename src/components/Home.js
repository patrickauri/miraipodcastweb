import React from 'react';
import { BlogPreview } from './Blog';
import data from './Posts.json';
import { YouTube } from './Embed';

const Home = () => {
	return (
		<div className='content'>
			<div className='content-jumbo'>
				<YouTube url={data.posts[0].embed} style='embed-home' />
			</div>
			<div className='paragraph p-home'>
				<BlogPreview limit={3} />
			</div>
		</div>
	);
};

export default Home;
