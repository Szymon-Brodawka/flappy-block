import { debounce } from "../../../utility/debounce.js";
import { RESIZE_DELAY } from "../../../variables/resizeDelay.js";
import { resizeCanvases } from "./resizeCanvases.js";

export const debounceResizeCanvases = debounce(resizeCanvases, RESIZE_DELAY);