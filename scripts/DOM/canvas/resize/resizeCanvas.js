import { drawNewCanvas } from "../drawNewCanvas.js";
import { getNewCanvas } from "../getNewCanvas.js";

export const resizeCanvas = () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;    
    const newCanvas = getNewCanvas(canvas);
    canvas.width = windowWidth;
    canvas.height = windowHeight;
    drawNewCanvas(ctx, newCanvas);
}