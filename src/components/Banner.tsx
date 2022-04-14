import React, {useCallback, useEffect, useRef, useState} from 'react';
import {IBanner} from '../store/HomeStore';
import useViewport from '../hooks/useViewport';

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
        if (!canvasRef.current) return;

        const canvas: HTMLCanvasElement = canvasRef.current;
        canvas.width = viewport.width;
        canvas.height = 256;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
            return;
        }
        drawImg(ctx)
    })


    return (
        <div>
            <canvas ref={canvasRef}></canvas>
        </div>
    );
}

export default Banner;
