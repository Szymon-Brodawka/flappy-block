export const repaintCanvas = () => {
    //save old canvas drawing
    //draw it on the new canvas
    //resize canvas
    //clearcanvas
    //draw the new drawing of new canvas on the canvas element
    const newCanvas = document.createElement("canvas");
    const newCtx = newCanvas.getContext("2d");
    const oldCanvas = document.querySelector("#canvas");
    const oldCtx = oldCanvas.getContext("2d");
    newCanvas.height = oldCanvas.height;
    newCanvas.width = oldCanvas.width;
    newCtx.drawImage(oldCanvas, 0, 0);

    return newCanvas;
}