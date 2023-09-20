export const checkForPipeColision = (player, pipes) => {
    let isColiding = false;
    for(let i = 0; i < pipes.length; i++) {
        let pipe = pipes[i];

        if(pipe.x < 0) {
            return;
        }

        if(
            player.x > pipe.x ||
            player.x > pipe.x && player.y < pipe.y + pipe.height
            || player.x > pipe.x && player.y > pipe.y + pipe.height + pipe.gap
        ) {
            return !isColiding;
        }

        return isColiding;
    }
}