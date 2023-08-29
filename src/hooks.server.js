export async function handle({ event, resolve }) {
	// eslint-disable-next-line no-param-reassign
	event.locals.answer = 42;
	// eslint-disable-next-line no-return-await
	return await resolve(event);
}
