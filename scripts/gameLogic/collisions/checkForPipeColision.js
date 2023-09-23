const rectIntersect = (x1, y1, w1, h1, x2, y2, w2, h2) => {
    if (x2 > w1 + x1 || x1 > w2 + x2 || y2 > h1 + y1 || y1 > h2 + y2) {
        return false;
    }
    return true;
}

export const checkForPipeColision = (player, pipes) => {
    let isColiding = false;
    
    for(let i = 0; i < pipes.length; i++) {
        let pipe = pipes[i];
        let bottomPipeHeight = window.innerHeight - pipe.height - pipe.gap;
        let bottomPipeY = pipe.height + pipe.gap;

        if(
            rectIntersect(
                player.x, player.y, player.side, player.side,
                pipe.x, pipe.y, pipe.width, pipe.height
            )
            || rectIntersect(
                player.x, player.y, player.side, player.side,
                pipe.x, bottomPipeY, pipe.width, bottomPipeHeight
            )
        ) {
            return !isColiding;
        }

        return isColiding;;
    }
}