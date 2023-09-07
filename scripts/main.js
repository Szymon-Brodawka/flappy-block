import { Rectangle } from "./classes/Rectangle/Rectangle.js";
import { debounceResizeCanvas } from "./DOM/canvas/debounceResizeCanvas.js";
import { resizeCanvas } from "./DOM/canvas/resizeCanvas.js";
import { Player } from "./classes/Player/Player.js";
import { handlePlayerMovement } from "./classes/Player/handlePlayerMovement.js";
import { debounceresizeCanvasElements } from "./DOM/canvas/debounceresizeCanvasElements.js";
import { Pipe } from "./classes/Pipe/Pipe.js";

resizeCanvas();

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const WINDOW_HEIGHT = window.innerHeight;
const WINDOW_WIDTH = window.innerWidth;
const PLAYER_SIZE = WINDOW_WIDTH / 25;
const PLAYER_X_SPAWN = WINDOW_WIDTH / 20;
const PLAYER_Y_SPAWN = (WINDOW_HEIGHT - PLAYER_SIZE) / 2;
const PLAYER_COLOR = "purple";
const SKY_HEIGHT = WINDOW_HEIGHT / 1.25;
const GRASS_HEIGHT = (WINDOW_HEIGHT - SKY_HEIGHT);
const PIPE_X_SPAWN = 200;
const PIPE_THICKNESS = 50;
const TOP_PIPE_HEIGHT = WINDOW_HEIGHT / (Math.random() * 3 + 2);

const sky = new Rectangle(0, 0, WINDOW_WIDTH, SKY_HEIGHT, "lightblue", ctx);
const grass = new Rectangle(0, SKY_HEIGHT, WINDOW_WIDTH, GRASS_HEIGHT, "lightcyan", ctx);
const pipe = new Pipe(PIPE_X_SPAWN, 0, PIPE_THICKNESS, "red", ctx);
const player = new Player(PLAYER_X_SPAWN, PLAYER_Y_SPAWN, PLAYER_SIZE, PLAYER_SIZE, PLAYER_COLOR, ctx);

window.addEventListener("resize", () => debounceResizeCanvas());
window.addEventListener("resize", () => debounceresizeCanvasElements(grass, sky, player, pipe));

const animate = () => {

}