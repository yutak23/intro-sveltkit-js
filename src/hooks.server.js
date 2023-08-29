/* eslint-disable no-return-await */
// eslint-disable-next-line no-unused-vars
export async function handleFetch({ event, request, fetch }) {
	console.log('handleFetch', request.url);
	const url = new URL(request.url);
	if (url.pathname === '/a') {
		return await fetch('/b');
	}

	return await fetch(request);
}
