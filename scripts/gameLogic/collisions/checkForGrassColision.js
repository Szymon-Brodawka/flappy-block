export const checkForGrassColision = (player, grass) => {
    let isColiding = false;
    
    if(player.y + player.side > grass.y) {
        return !isColiding;
    }

    return isColiding;
}