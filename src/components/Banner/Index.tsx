import React, {useCallback, useEffect, useRef} from 'react';
import {observer} from "mobx-react";

// hooks
import useViewport from '../../hooks/useViewport';

// store
import {IBanner} from '../../store/HomeStore';

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

export default observer(Banner);