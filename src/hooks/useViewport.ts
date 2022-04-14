/**
 * 获取视口宽高 hook
 */

import {useState, useEffect, useCallback} from "react";
import debounce from 'lodash.debounce';

function useViewport() {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    const onResize = useCallback(() => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }, []);

    const debounceOnResize = debounce(onResize, 500);

    useEffect(() => {
        onResize();
        window.addEventListener('resize', () => {
            debounceOnResize();
        });
    });
    return {
        width,
        height
    }
}

export default useViewport;