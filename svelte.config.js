import adapter from '@sveltejs/adapter-auto';
import { mdsvex } from 'mdsvex'


/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({assets:'docs',pages:'docs'})
	},
	extensions: ['.svelte', '.md', '.svx'],

	preprocess: [
		mdsvex({
		extensions: ['.md']
		})
	]
};

export default config;
