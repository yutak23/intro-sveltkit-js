export async function handle({ event, resolve }) {
	if (event.url.pathname === '/ping') {
		return new Response('pong');
	}

	// eslint-disable-next-line no-return-await
	return await resolve(event, {
		transformPageChunk: ({ html }) => html.replace('<body', '<body style="color: hotpink"')
	});
}
