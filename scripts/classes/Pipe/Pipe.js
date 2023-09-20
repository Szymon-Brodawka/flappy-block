import { clearCanvas } from "../../DOM/canvas/clearCanvas.js";

export class Pipe {
    constructor(x, color, ctx, playerSide) {
        this.x = x;
        this.y = 0;
        this.randomNumber = Math.random() * (Math.random() * 10) + 2;
        this.height = Math.floor(window.innerHeight / this.randomNumber);
        this.width = playerSide * 1.5;
        this.gap = playerSide * 3;
        this.ctx = ctx;
        this.color = color;
        this.speed = 200;
        this.#initialize();
    }
    
    #initialize() {
        this.draw();
        this.#createBottomPipe();
    }
    
    #createBottomPipe() {
        this.ctx.fillRect(this.x, this.height + this.gap, this.width, window.innerHeight - (this.height + this.gap));
    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    scale(playerSide) {
        this.width = playerSide * 1.5;
        this.height = window.innerHeight / this.randomNumber;
        this.gap = playerSide * 2.5;
        this.draw();
        this.#createBottomPipe();
    }

    moveLeft(secondsPassed) {
        if(this.x <= -this.width) return;

        clearCanvas(this.ctx);
        this.x -= secondsPassed * this.speed;
        this.draw();
        this.#createBottomPipe();
    }
}