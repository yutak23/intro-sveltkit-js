<script>
	// eslint-disable-next-line import/no-unresolved, import/extensions
	import { page } from '$app/stores';
</script>

<nav>
	<a href="/" aria-current={$page.url.pathname === '/'}> home </a>

	<a href="/about" aria-current={$page.url.pathname === '/about'}> about </a>
</nav>

<slot />
