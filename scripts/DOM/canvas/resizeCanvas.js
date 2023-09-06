export const resizeCanvas = () => {
    const inMemoryCanvas = document.createElement("canvas");
    const inMemoryContext = inMemoryCanvas.getContext("2d");
    const canvas = document.querySelector("#canvas");
    const context = canvas.getContext("2d");
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;    
    
    inMemoryCanvas.height = canvas.height;
    inMemoryCanvas.width = canvas.width;
    inMemoryContext.drawImage(canvas, 0, 0);
    
    canvas.width = windowWidth;
    canvas.height = windowHeight;
    context.drawImage(inMemoryCanvas, 0, 0);
}