export const resizeCanvas = () => {
    const canvas = document.querySelector("#canvas");
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    canvas.width = windowWidth;
    canvas.height = windowHeight;
}