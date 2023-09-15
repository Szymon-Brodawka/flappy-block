import { resizeCanvasElements } from "./resizeCanvasElements.js";

export const resizeCanvases = (canvasElements) => {
    const canvases = document.querySelectorAll(".canvas");
    canvases.forEach(canvas => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    })

    // console.log(canvasElements);

    // resizeCanvasElements(canvasElements)
}