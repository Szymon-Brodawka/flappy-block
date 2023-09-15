import { clearCanvas } from "../../DOM/canvas/clearCanvas.js";
import { drawNewCanvas } from "../../DOM/canvas/drawNewCanvas.js";

export const handlePlayerMovement = (event, player) => {
    if(player.y <= 1) {
        return;
    }

    if(event.type === "click" || event.key === "ArrowUp" ) {
        clearCanvas(player.ctx);
        player.moveUp();
    }
}