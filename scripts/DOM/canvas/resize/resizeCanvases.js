export const resizeCanvases = () => {
    const canvases = document.querySelectorAll(".canvas");
    canvases.forEach(canvas => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    })
}