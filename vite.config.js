import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
	plugins: [sveltekit(), eslint()],
	server: { host: '0.0.0.0', port: 8080 }
});
