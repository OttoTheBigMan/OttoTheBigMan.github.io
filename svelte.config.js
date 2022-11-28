import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
<<<<<<< HEAD
		adapter: adapter()
=======
		adapter: adapter({assets:'docs',pages:'docs'})
>>>>>>> e651295bec91f15143bf3750f33791735ec6ae51
	}
};

export default config;
