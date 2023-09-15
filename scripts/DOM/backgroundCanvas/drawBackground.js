export const drawBackground = () => {
    const backgroundCanvas = document.querySelector(".background-canvas");
    const backgroundCanvasCtx = backgroundCanvas.getContext("2d");

    const sky = {
        x: 0,
        y: 0,
        width: window.innerWidth,
        height: Math.floor(window.innerHeight / 1.1),
        color: "lightblue"
    }

    const grass = {
        x: 0,
        y: window.innerHeight - sky.height,
        width: window.innerWidth,
        height: Math.ceil(window.innerWidth - sky.height),
        color: "lightGreen"
    }
    //set the heights positions, colors of the sky and grass
    // backgroundCanvasCtx.fillRect();
}