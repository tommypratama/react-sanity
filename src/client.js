import sanityClient from '@sanity/client';

export default sanityClient({
	projectId: 'r7pg0bvr',
	dataset: 'production',
	useCdn: true,
});
