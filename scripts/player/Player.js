import { Rectangle } from "../Rectangle/Rectangle.js";

export class Player extends Rectangle{
    constructor(x, y, width, height, color, ctx) {
        super(x, y, width, height, color, ctx);
        super.initialize();
    }

    scale(windowWidth, windowHeight) {
        this.x = windowWidth / 20;
        this.y = (windowHeight - this.height) / 2;
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}