export const getNewCanvas = (oldCanvas) => {
    const newCanvas = document.createElement("canvas");
    const newCtx = newCanvas.getContext("2d");
    newCanvas.height = oldCanvas.height;
    newCanvas.width = oldCanvas.width;
    newCtx.drawImage(oldCanvas, 0, 0);

    return newCanvas;
}