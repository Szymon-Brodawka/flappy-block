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

    scale(windowWidth, windowHeight) {
        this.x = windowWidth / 1.25;
        this.width = windowWidth / 25;
        this.gap = windowHeight / 50;
        // this.x = windowWidth / 30;
        // this.y = windowHeight / 10;
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);

        this.#createBottomPipe();
    }
}