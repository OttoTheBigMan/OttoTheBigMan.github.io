import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex'


/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({assets:'docs',pages:'docs', strict: false})
	},
	extensions: ['.svelte', '.md', '.svx'],

	preprocess: [
		mdsvex({
			extensions: ['.md']
		})
	]
};

export default config;
