import { debounce } from "../../../utility/debounce.js";
import { RESIZE_DELAY } from "../../../variables/resizeDelay.js";
import { resizeCanvas } from "./resizeCanvas.js";

export const debounceResizeCanvas = debounce(resizeCanvas, RESIZE_DELAY);