import { Rectangle } from "./classes/Rectangle/Rectangle.js";
import { Player } from "./classes/Player/Player.js";
import { Pipe } from "./classes/Pipe/Pipe.js";
import { resizeCanvases } from "./DOM/canvas/resize/resizeCanvases.js";
import { handlePlayerMovement } from "./classes/Player/handlePlayerMovement.js";
// import { debounceResizeCanvas } from "./DOM/canvas/resize/debounceResizeCanvas.js";
// import { resizeCanvas } from "./DOM/canvas/resize/resizeCanvas.js";
import { debounceresizeCanvasElements } from "./DOM/canvas/resize/debounceresizeCanvasElements.js";
import { debounceResizeCanvases } from "./DOM/canvas/resize/debounceResizeCanvases.js";
// import { clearCanvas } from "./DOM/canvas/clearCanvas.js";
// import { drawNewCanvas } from "./DOM/canvas/drawNewCanvas.js";
// import { repaintCanvas } from "./DOM/canvas/repaintCanvas.js";

resizeCanvases();
const WINDOW_HEIGHT = window.innerHeight;
const WINDOW_WIDTH = window.innerWidth;

const backgroundCanvas = document.querySelector(".background-canvas");
const backgroundCanvasCtx = backgroundCanvas.getContext("2d");
const SKY_HEIGHT = Math.floor(WINDOW_HEIGHT / 1.25);
const GRASS_HEIGHT = WINDOW_HEIGHT - SKY_HEIGHT;

const playerCanvas = document.querySelector(".player-canvas");
const playerCanvasCtx = playerCanvas.getContext("2d");
const PLAYER_SIZE = 10;

const pipeCanvas = document.querySelector(".pipe-canvas");
const pipeCanvasCtx = pipeCanvas.getContext("2d");
const PIPE_X_SPAWN = WINDOW_WIDTH / 1.3;

const sky = new Rectangle(0, 0, WINDOW_WIDTH, SKY_HEIGHT, "lightblue", backgroundCanvasCtx);
const grass = new Rectangle(0, SKY_HEIGHT, WINDOW_WIDTH, GRASS_HEIGHT, "green", backgroundCanvasCtx);
const player = new Player(PLAYER_SIZE, "purple", playerCanvasCtx);
const pipe = new Pipe(PIPE_X_SPAWN, "red", pipeCanvasCtx, player.side);

window.addEventListener("resize", () => debounceResizeCanvases({ grass, sky, player, pipe }));
// window.addEventListener("resize", () => debounceresizeCanvasElements(grass, sky, player, pipe));
window.addEventListener("click", (event) => {
    handlePlayerMovement(event, player);
});
// window.addEventListener("keydown", (event) => {
//     handlePlayerMovement(event, player);
// });

// const animatePipe = () => {
//     pipe.moveLeft();
//     repaintCanvas();
//     // clearCanvas();
//     // drawNewCanvas(ctx, newCanvas);
//     requestAnimationFrame(animatePipe);
// }

// animatePipe();