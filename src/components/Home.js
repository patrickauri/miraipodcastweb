import React from 'react';
import { BlogPreview } from './Blog';

const Home = () => {
	return (
		<div className='content'>
			<div className='content-jumbo' />
			<div className='paragraph'>
				<BlogPreview />
			</div>
		</div>
	);
};

export default Home;
