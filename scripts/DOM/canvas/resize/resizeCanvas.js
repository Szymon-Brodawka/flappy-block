import { getNewCanvas } from "../getNewCanvas.js";

export const resizeCanvas = () => {
    const canvas = document.querySelector("#canvas");
    const context = canvas.getContext("2d");
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;    
    const newCanvas = getNewCanvas(canvas);
    canvas.width = windowWidth;
    canvas.height = windowHeight;
    context.drawImage(newCanvas, 0, 0);
}