import { useState, useEffect } from 'react';

export default function useOnScreen(ref, rootMargin = '0px') {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIntersecting(entry.isIntersecting);
            },
            { rootMargin }
        );
        const element = ref.current;
        if (element) {
            observer.observe(element);
        }
        return () => {
            observer.unobserve(element);
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return isIntersecting;
}
