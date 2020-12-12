import React, { useEffect, useState } from 'react';
import sanity from '../client';
import BlockContent from '@sanity/block-content-to-react';

export default function Home() {
	const [postData, setPost] = useState(null);

	useEffect(() => {
		sanity
			.fetch(`*[_type == "post"]{title, body}`)
			.then((data) => setPost(data))
			.catch(console.error);
	}, []);

	if (!postData) return <div>Loading...</div>;

	return (
		<div className='mt-10 max-w-screen-md mx-auto'>
			{postData &&
				postData.map((post, index) => (
					<article className='mb-4' key={index}>
						<h2>{post.title}</h2>
						<div>
							<BlockContent
								blocks={post.body}
								projectId='r7pg0bvr'
								dataset='production'
							/>
						</div>
					</article>
				))}
		</div>
	);
}
