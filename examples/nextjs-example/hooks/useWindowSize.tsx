import { useEffect, useState } from "react";

const mobileBreakPoint = parseInt("992px".replace("px", ""));

export const useWindowSize = () => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [isMobileView, setMobileView] = useState(true);

    useEffect(() => {
        function updateSize() {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
            setMobileView(window.innerWidth < mobileBreakPoint);
        }
        window.addEventListener("resize", updateSize);
        updateSize();
        return () => window.removeEventListener("resize", updateSize);
    }, []);
    return { width, height, isMobileView };
};
