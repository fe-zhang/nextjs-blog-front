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

    const drawImg = useCallback((ctx: CanvasRenderingContext2D) => {
        const img = new Image();
        img.onload = () => {
            ctx.drawImage(img, 0, 0, viewport.width, 256);
        }
        img.src = src;
    }, [src])

    useEffect(() => {
        // 还没想好用不用个canvas效果，后面再改
        if (!canvasRef.current) return;

        const canvas: HTMLCanvasElement = canvasRef.current;
        canvas.width = viewport.width;
        canvas.height = 256;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
            return;
        }
        drawImg(ctx)
    }, [drawImg, viewport.width])


    return (
        <div>
            <canvas ref={canvasRef}></canvas>
        </div>
    );
}

export default observer(Banner);
