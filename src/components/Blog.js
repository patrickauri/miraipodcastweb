import React from 'react';
import { Link, useParams } from 'react-router-dom';
import data from './Posts.json';
import { YouTube } from './Embed';

const PostPreview = ({ data }) => {
	return (
		<div className='post-preview'>
			<h1 className='post-title'>
				<Link to={`/blog/${data.id}`}>{data.title}</Link>
			</h1>
			<p>
				{data.content}{' '}
				<Link to={`/blog/${data.id}`} className='lesmer'>
					Les mer
				</Link>
			</p>
		</div>
	);
};

const BlogPost = ({ data }) => {
	return (
		<React.Fragment>
			<div className='blog-post'>
				<h1 className='post-title'>
					<Link to={`/blog/${data.id}`}>{data.title}</Link>
				</h1>
				{data.embed.map((e, i) => (
					<YouTube url={e} key={i} />
				))}
				<p>{data.content} </p>
			</div>
		</React.Fragment>
	);
};

const Blog = (props) => {
	const params = useParams();
	const post = data.posts.find((e) => {
		return e.id === params.id;
	});
	if (post !== undefined) {
		return (
			<div className='post paragraph'>
				<BlogPost data={post} />
			</div>
		);
	} else {
		return (
			<div className='post paragraph'>
				<h1>Denne posten finnes ikke.</h1>
			</div>
		);
	}
};

export const BlogPreview = (props) => {
	return data.posts.sort().map((e, i) => <PostPreview key={i} data={e} />);
};

export default Blog;
