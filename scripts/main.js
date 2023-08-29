import { Rectangle } from "./Rectangle/Rectangle.js";
import { debounceResizeCanvas } from "./canvas/debounceResizeCanvas.js";
import { resizeCanvas } from "./canvas/resizeCanvas.js";
import { handlePlayerMovement } from "./player/handlePlayerMovement.js";

const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");

const rectangle = new Rectangle(200, 100, 50, 100, "blue");
rectangle.create(context);

window.addEventListener("load", () => resizeCanvas());
window.addEventListener("resize", () => debounceResizeCanvas());
window.addEventListener("keydown", (event) =>{
    handlePlayerMovement(event, rectangle);
});