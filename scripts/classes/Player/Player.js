export class Player {
    constructor(size, color, ctx) {
        this.color = color;
        this.ctx = ctx;
        this.size = size;
        this.#scaleSide();
        this.y = (window.innerHeight - this.side) / 2;
        this.#updatePosition();
        this.#draw(this.color);
    }

    #scaleSide() {
        this.side = (window.innerHeight + window.innerWidth) / 500 * this.size;
    }

    #updatePosition(canvasDifferenceRatio = 1) {
        this.x = window.innerWidth / this.side;
        this.y = canvasDifferenceRatio * this.y;
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
        this.y = this.y - this.side / 2 * 1.5;
        this.#draw(this.color);
    }
}