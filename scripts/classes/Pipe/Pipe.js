import { Rectangle } from "../Rectangle/Rectangle.js";

const RANDOM_PIPE_HEIGHT = window.innerHeight / (Math.random() * 3 + 2);

export class Pipe extends Rectangle {
    constructor(x, y, width, color, ctx) {
        super(x, y, width, RANDOM_PIPE_HEIGHT, color, ctx);
        this.gap = 200;
        this.#createBottomPipe();
    }

    #createBottomPipe() {
        this.y = this.height + this.gap;
        this.height = window.innerHeight - this.height;
        super.initialize();
    }

    initialize() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}