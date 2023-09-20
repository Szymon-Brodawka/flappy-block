import { Rectangle } from "./classes/Rectangle/Rectangle.js";
import { Player } from "./classes/Player/Player.js";
import { Pipe } from "./classes/Pipe/Pipe.js";
import { resizeCanvases } from "./DOM/canvas/resize/resizeCanvases.js";
import { handlePlayerMovement } from "./classes/Player/handlePlayerMovement.js";
import { debounceresizeCanvasElements } from "./DOM/canvas/resize/debounceresizeCanvasElements.js";
import { debounceResizeCanvases } from "./DOM/canvas/resize/debounceResizeCanvases.js";
import { checkForPipeColision } from "./gameLogic/collisions/checkForPipeColision.js";
import { checkForGrassColision } from "./gameLogic/collisions/checkForGrassColision.js";

resizeCanvases();

let secondsPassed = 0;
let oldTimeStamp = 0;
let isGameOver = false;

const gameLoop = (timeStamp) => {
    if(isGameOver) {
        return;
    }

    secondsPassed = (timeStamp - oldTimeStamp) / 1000;
    secondsPassed = Math.min(secondsPassed, 0.1);
    oldTimeStamp = timeStamp;
    player.moveDown(secondsPassed);
    pipe.moveLeft(secondsPassed);

    if(
        checkForPipeColision(player, [pipe])
        || checkForGrassColision(player, grass)
    ) { isGameOver = true; }

    requestAnimationFrame(gameLoop);
}

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

gameLoop(performance.now());

window.addEventListener("resize", () => debounceResizeCanvases(grass, sky, player, pipe));
window.addEventListener("resize", () => {
    const oldCanvasHeight = window.innerHeight;
    debounceresizeCanvasElements(grass, sky, player, pipe, oldCanvasHeight);
});
window.addEventListener("click", (event) => {
    if(isGameOver) return;

    handlePlayerMovement(event, player);
});
window.addEventListener("keydown", (event) => {
    if(isGameOver) return;

    handlePlayerMovement(event, player);
});