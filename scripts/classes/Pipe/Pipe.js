import { Rectangle } from "../Rectangle/Rectangle.js";

export class Pipe extends Rectangle {
    constructor(x, y, width, height, color, ctx) {
        super(x, y, width, height, color, ctx);
        super.initialize();
    }
}