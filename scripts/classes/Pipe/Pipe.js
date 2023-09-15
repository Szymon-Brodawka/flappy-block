export class Pipe {
    constructor(x, color, ctx, playerSide) {
        this.x = x;
        this.y = 0;
        this.randomNumber = Math.random() * (Math.random() * 10) + 2;
        this.height = Math.floor(window.innerHeight / this.randomNumber);
        this.width = playerSide * 1.5;
        this.ctx = ctx;
        this.color = color;
        this.gap = playerSide * 4;
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
        this.x = window.innerWidth / 1.25;
        this.width = playerSide * 1.5;
        this.height = window.innerHeight / this.randomNumber;
        this.gap = playerSide * 4;
        this.draw();
        this.#createBottomPipe();
    }

    moveLeft() {
        if(this.x <= 0) return;
        this.x -= 10;
        this.draw();
        this.#createBottomPipe();
    }
}