import { Rectangle } from "./classes/Rectangle/Rectangle.js";
import { Player } from "./classes/Player/Player.js";
import { handlePlayerMovement } from "./classes/Player/handlePlayerMovement.js";
import { Pipe } from "./classes/Pipe/Pipe.js";
import { debounceResizeCanvas } from "./DOM/canvas/resize/debounceResizeCanvas.js";
import { resizeCanvas } from "./DOM/canvas/resize/resizeCanvas.js";
import { debounceresizeCanvasElements } from "./DOM/canvas/resize/debounceresizeCanvasElements.js";
import { clearCanvas } from "./DOM/canvas/clearCanvas.js";
import { drawNewCanvas } from "./DOM/canvas/drawNewCanvas.js";
import { repaintCanvas } from "./DOM/canvas/repaintCanvas.js";

// resizeCanvas();

const backgroundCanvas = document.querySelector(".background-canvas");
const backgroundCanvasCtx = backgroundCanvas.getContext("2d");

const WINDOW_HEIGHT = window.innerHeight;
const WINDOW_WIDTH = window.innerWidth;

// const PLAYER_SIZE = 10;
// const PLAYER_COLOR = "purple";
const SKY_HEIGHT = Math.ceil(WINDOW_HEIGHT / 1.25);
const GRASS_HEIGHT = WINDOW_HEIGHT - SKY_HEIGHT;

// const PIPE_X_SPAWN = WINDOW_WIDTH / 1.25;

const sky = new Rectangle(0, 0, WINDOW_WIDTH, SKY_HEIGHT, "lightblue", backgroundCanvasCtx);
const grass = new Rectangle(0, GRASS_HEIGHT, WINDOW_WIDTH, GRASS_HEIGHT, "green", backgroundCanvasCtx);
// const player = new Player(PLAYER_SIZE, PLAYER_COLOR, ctx);
// const pipe = new Pipe(PIPE_X_SPAWN, "red", ctx, player.side);

// window.addEventListener("resize", () => debounceResizeCanvas());
// // window.addEventListener("resize", () => debounceresizeCanvasElements(grass, sky, player, pipe));
// window.addEventListener("click", (event) => {
//     handlePlayerMovement(event, player);
// });
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