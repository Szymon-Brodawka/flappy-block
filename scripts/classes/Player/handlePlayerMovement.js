import { clearCanvas } from "../../DOM/canvas/clearCanvas.js";
import { drawNewCanvas } from "../../DOM/canvas/drawNewCanvas.js";
import { getNewCanvas } from "../../DOM/canvas/getNewCanvas.js";

export const handlePlayerMovement = (event, player) => {
    if(player.y <= 1) {
        return;
    }

    if(event.type === "click" || event.key === "ArrowUp" ) {
        const canvas = document.querySelector("#canvas");
        const ctx = canvas.getContext("2d");
        player.moveUp();
        const newCanvas = getNewCanvas(canvas);
        clearCanvas();
        drawNewCanvas(ctx, newCanvas);
    }
}