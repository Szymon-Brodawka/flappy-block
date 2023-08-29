import { debounce } from "../utility/debounce.js";
import { resizeCanvas } from "./resizeCanvas.js";

export const debounceResizeCanvas = debounce(resizeCanvas, 1000);