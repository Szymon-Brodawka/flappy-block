export const clearCanvas = () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
}