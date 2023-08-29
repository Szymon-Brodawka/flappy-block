import { debounce } from "../utility/debounce.js";
import { resizeCanvas } from "./resizeCanvas.js";

const RESIZE_DELAY = 100;
export const debounceResizeCanvas = debounce(resizeCanvas, RESIZE_DELAY);