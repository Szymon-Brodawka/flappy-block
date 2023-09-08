export class Player {
    constructor(size, color, ctx) {
        this.color = color;
        this.ctx = ctx;
        this.size = size;
        this.#scaleSide();
        this.#updatePosition();
        this.#draw();
    }

    #scaleSide() {
        this.side = (window.innerHeight + window.innerWidth) / 500 * this.size;
    }

    #updatePosition() {
        this.x = window.innerWidth / this.side;
        this.y = (window.innerHeight - this.side) / 2;
    }

    #draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.side, this.side);
    }

    update() {
        this.#scaleSide();
        this.#updatePosition();
        this.#draw();
    }
}