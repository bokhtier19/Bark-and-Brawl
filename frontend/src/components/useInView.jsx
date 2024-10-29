import { useState, useEffect } from 'react';

const useInView = (ref) => {
	const [isInView, setIsInView] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsInView(entry.isIntersecting);
			},
			{ threshold: 0.5 } // Trigger when 20% of the element is in view
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			if (ref.current) {
				observer.unobserve(ref.current);
			}
		};
	}, [ref]);

	return isInView;
};

export default useInView;
