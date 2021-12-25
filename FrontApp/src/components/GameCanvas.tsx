import React, {useRef, useEffect} from "react";

const GameCanvas: React.FC = () => {

    const cvsRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        if (cvsRef)
            setBgColor("black", cvsRef.current!);
    }, [])

    return (
        <canvas id="game" ref={cvsRef}>
            <p>Ваш браузер не поддерживает Canvas</p>
        </canvas>
    )
}

export default GameCanvas

function setBgColor(color: string, canvas: HTMLCanvasElement): void {
    const ctx = canvas.getContext('2d')
    
    if (ctx) {
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, canvas.width, canvas.height)
    }
}