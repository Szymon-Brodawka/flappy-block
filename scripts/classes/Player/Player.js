export class Player {
    constructor(size, color, ctx) {
        this.color = color;
        this.ctx = ctx;
        this.size = size;
        this.#scaleSide();
        this.#updatePosition();
        this.#draw(this.color);
    }

    #scaleSide() {
        this.side = (window.innerHeight + window.innerWidth) / 500 * this.size;
    }

    #updatePosition() {
        this.x = window.innerWidth / this.side;
        this.y = (window.innerHeight - this.side) / 2;
    }

    #draw(color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(this.x, this.y, this.side, this.side);
    }

    scale() {
        this.#scaleSide();
        this.#updatePosition();
        this.#draw();
    }

    moveUp() {
        this.clear();
        this.y = this.y - this.side / 2;
        this.#draw(this.color);
    }

    clear() {
        this.ctx.fillStyle = "lightblue";
        this.ctx.fillRect(this.x, this.y, this.side + 1, this.side + 1);
    }
}