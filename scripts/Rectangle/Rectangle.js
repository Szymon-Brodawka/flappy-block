export class Rectangle {
    constructor(xPosition, yPosition, width, height, color) {
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    create(context) {
        context.fillStyle = this.color
        context.fillRect(this.xPosition, this.yPosition, this.width, this.height);
    }
}