import { useState, useEffect } from 'react';

const useIsMobile = (): boolean => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        let debounceTimer: ReturnType<typeof setTimeout>;

        const debounceResize = () => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                checkIsMobile();
            }, 100);
        };

        checkIsMobile();

        window.addEventListener('resize', debounceResize);

        return () => {
            window.removeEventListener('resize', debounceResize);
            clearTimeout(debounceTimer);
        };
    }, []);

    return isMobile;
};

export default useIsMobile;