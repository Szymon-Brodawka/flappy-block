export const resizeCanvasElements = (grass, sky, player, pipe) => {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    const SKY_HEIGHT = windowHeight / 1.25;
    const GRASS_HEIGHT = windowHeight - SKY_HEIGHT;
    
    sky.scale(0, 0, windowWidth, SKY_HEIGHT);
    grass.scale(0, SKY_HEIGHT, windowWidth, GRASS_HEIGHT);
    player.scale(windowWidth, windowHeight);
    // pipe.scale();
}