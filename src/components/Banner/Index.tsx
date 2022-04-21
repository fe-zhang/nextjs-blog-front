import React, {useCallback, useEffect, useRef} from 'react';
import {observer} from "mobx-react";

// hooks
import useViewport from '../../hooks/useViewport';

// store
import {IBanner} from '@store/homeStore';

const Banner: React.FC<IBanner> = props => {
    const canvasRef = useRef(null);
    const viewport = useViewport();

    const {
        src,
        title,
        desc
    } = props;

    const loadImg = useCallback((url: string) => {
        const img = new Image();
        img.src = url;
        return new Promise<HTMLImageElement>((resolve, reject) => {
            img.onload = () => {
                resolve(img);
            }
            img.onerror = () => {
                reject();
            }
        });
    }, []);

    useEffect(() => {
        if (!canvasRef.current) return;
        const canvas: HTMLCanvasElement = canvasRef.current;
        canvas.width = viewport.width;
        canvas.height = 256;
        const ctx = canvas.getContext('2d');
        loadImg(src)
            .then(res => {
                ctx!.drawImage(res, 0, 0, viewport.width, 256);
            })
    }, [loadImg, src, viewport.width])


    return (
        <div>
            <canvas ref={canvasRef}></canvas>
        </div>
    );
}

export default observer(Banner);
