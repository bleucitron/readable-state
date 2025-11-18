import { redirect } from '@sveltejs/kit';

export const handleError = async ({ status }) => {
	if (status === 404) redirect(307, '/');
};
