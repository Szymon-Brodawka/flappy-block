import { debounceResizeCanvas } from "./canvas/debounceResizeCanvas.js";
import { resizeCanvas } from "./canvas/resizeCanvas.js";

const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");

window.addEventListener("load", resizeCanvas);
window.addEventListener("resize", () => debounceResizeCanvas());