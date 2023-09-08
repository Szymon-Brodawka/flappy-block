export class Pipe {
    constructor(x, color, ctx) {
        this.x = x;
        this.y = 0;
        this.width = window.innerWidth / 25;
        this.randomNumber = (Math.random() * 10 + 1)
        this.height = window.innerHeight / this.randomNumber;
        this.color = color;
        this.ctx = ctx;
        this.gap = window.innerHeight / 4;
        this.#initialize();
    }
    
    #initialize() {
        this.draw();
        this.#createBottomPipe();
    }
    
    #createBottomPipe() {
        console.log(this.height, this.height + this.gap)
        this.ctx.fillRect(this.x, this.height + this.gap, this.width, window.innerHeight - (this.height + this.gap + 10));
    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    scale() {
        this.x = window.innerWidth / 1.25;
        this.width = window.innerWidth / 25;
        this.height = window.innerHeight / this.randomNumber;
        this.gap = window.innerHeight / 4;
        this.draw();
        this.#createBottomPipe();
    }
}