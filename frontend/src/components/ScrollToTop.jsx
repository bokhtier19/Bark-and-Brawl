import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation(); // Get current page URL

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top when pathname changes
    }, [pathname]);

    return null; // This component does not render anything
};

export default ScrollToTop;
