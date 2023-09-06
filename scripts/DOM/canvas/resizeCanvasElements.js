export const resizeCanvasElements = (grass, sky, player) => {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    sky.scale(0, 0, windowWidth, windowHeight / 2);
    grass.scale(0, windowHeight, windowWidth, -(windowHeight / 2));
    player.scale(windowWidth, windowHeight);
}