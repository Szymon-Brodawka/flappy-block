import { clearCanvas } from "../../DOM/canvas/clearCanvas.js";

export const handlePlayerMovement = (event, player) => {
    if(event.type === "click" || event.key === "ArrowUp" ) {
        clearCanvas(player.ctx);
        player.moveUp();
    }
}