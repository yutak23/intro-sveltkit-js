import { error } from '@sveltejs/kit';
import { posts } from '@/routes/blog/data';

// eslint-disable-next-line import/prefer-default-export
export function load({ params }) {
	// eslint-disable-next-line no-shadow
	const post = posts.find((post) => post.slug === params.slug);

	if (!post) throw error(404);

	return {
		post
	};
}
