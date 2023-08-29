import { fail } from '@sveltejs/kit';
import * as db from '$lib/server/database';

export function load({ cookies }) {
	const id = cookies.get('userid');

	if (!id) {
		cookies.set('userid', crypto.randomUUID(), { path: '/', secure: false });
	}

	return {
		todos: db.getTodos(id) ?? []
	};
}

export const actions = {
	create: async ({ cookies, request }) => {
		await new Promise((fulfil) => {
			setTimeout(fulfil, 1000);
		});
		const data = await request.formData();

		try {
			db.createTodo(cookies.get('userid'), data.get('description'));
			return { message: 'suceess', error: null }; // returnしたものは`form` propで受け取れる
		} catch (e) {
			return fail(422, {
				description: data.get('description'),
				error: e.message
			});
		}
	},

	delete: async ({ cookies, request }) => {
		await new Promise((fulfil) => {
			setTimeout(fulfil, 1000);
		});
		const data = await request.formData();
		db.deleteTodo(cookies.get('userid'), data.get('id'));
	}
};
