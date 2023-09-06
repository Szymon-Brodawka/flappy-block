import { Rectangle } from "./Rectangle/Rectangle.js";
import { debounceResizeCanvas } from "./DOM/canvas/debounceResizeCanvas.js";
import { resizeCanvas } from "./DOM/canvas/resizeCanvas.js";
import { Player } from "./Player/Player.js";
import { handlePlayerMovement } from "./Player/handlePlayerMovement.js";
import { debounceresizeCanvasElements } from "./DOM/canvas/debounceresizeCanvasElements.js";

resizeCanvas();

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const WINDOW_HEIGHT = window.innerHeight;
const WINDOW_WIDTH = window.innerWidth;
const PLAYER_SIZE = WINDOW_WIDTH / 25;
const PLAYER_X_SPAWN = WINDOW_WIDTH / 20;
const PLAYER_Y_SPAWN = (WINDOW_HEIGHT - PLAYER_SIZE) / 2;
const PLAYER_COLOR = "purple";

const sky = new Rectangle(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT / 2, "lightblue", ctx);
const grass = new Rectangle(0, WINDOW_HEIGHT, WINDOW_WIDTH, -(WINDOW_HEIGHT / 2), "lightcyan", ctx);
const player = new Player(PLAYER_X_SPAWN, PLAYER_Y_SPAWN, PLAYER_SIZE, PLAYER_SIZE, PLAYER_COLOR, ctx);

window.addEventListener("resize", () => debounceResizeCanvas());
window.addEventListener("resize", () => debounceresizeCanvasElements(grass, sky, player));