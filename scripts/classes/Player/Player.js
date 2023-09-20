import { clearCanvas } from "../../DOM/canvas/clearCanvas.js";

export class Player {
    constructor(size, color, ctx) {
        this.color = color;
        this.ctx = ctx;
        this.size = size;
        this.#scaleSide();
        this.y = Math.floor((window.innerHeight - this.side) / 2);
        this.speed = this.side * 2;
        this.#updatePosition();
        this.#draw(this.color);
    }

    #scaleSide() {
        this.side = (window.innerHeight + window.innerWidth) / 500 * this.size;
    }

    #updatePosition(canvasDifferenceRatio = 1) {
        this.x = Math.floor(window.innerWidth / this.side);
        this.y = Math.floor(canvasDifferenceRatio * this.y + this.side / 2);
    }

    #draw(color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(this.x, this.y, this.side, this.side);
    }

    scale(oldCanvasHeight) {
        this.#scaleSide();
        this.#updatePosition(oldCanvasHeight / window.innerHeight);
        this.#draw(this.color);
    }

    moveUp() {
        if(this.y <= 1) {
            return;
        }

        this.y -= this.speed / 2;
        this.#draw(this.color);
    }

    moveDown(secondsPassed) {
        if(this.y >= window.innerHeight - this.side) {
            this.#draw(this.color);
            return;
        }

        clearCanvas(this.ctx);
        this.y += this.speed * secondsPassed;
        this.#draw(this.color);
    }
}