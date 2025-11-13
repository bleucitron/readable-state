import type { Attachment } from 'svelte/attachments';

export function onVisible(cb: () => () => void): Attachment {
	let destroy: (() => void) | null = null;

	const observer = new IntersectionObserver(([entry]) => {
		if (entry.isIntersecting) {
			destroy = cb();
			document.addEventListener('visibilitychange', handleDocumentVisibility);
		} else {
			document.removeEventListener('visibilitychange', handleDocumentVisibility);
			destroy?.();
			destroy = null;
		}
	});

	function handleDocumentVisibility() {
		if (document.visibilityState === 'visible') {
			destroy = cb();
		} else {
			destroy?.();
			destroy = null;
		}
	}

	return (element) => {
		observer.observe(element);

		return () => {
			observer.unobserve(element);
			document.removeEventListener('visibilitychange', handleDocumentVisibility);
			destroy?.();
		};
	};
}
