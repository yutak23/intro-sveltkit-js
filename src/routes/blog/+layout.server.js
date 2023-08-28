import { posts } from '@/routes/blog/data';

// eslint-disable-next-line import/prefer-default-export
export function load() {
	return {
		summaries: posts.map((post) => ({
			slug: post.slug,
			title: post.title
		}))
	};
}
