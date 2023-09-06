import { debounce } from "../../utility/debounce.js";
import { RESIZE_DELAY } from "../../variables/resizeDelay.js";
import { resizeCanvasElements } from "./resizeCanvasElements.js";

export const debounceresizeCanvasElements = debounce(resizeCanvasElements, RESIZE_DELAY);