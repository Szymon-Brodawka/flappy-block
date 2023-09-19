import { clearCanvas } from "../../DOM/canvas/clearCanvas.js";

export const handlePlayerMovement = (event, player) => {
    if(player.y <= 1) {
        return;
    }

    if(event.type === "click" || event.key === "ArrowUp" ) {
        clearCanvas(player.ctx);
        player.moveUp();
    }
}