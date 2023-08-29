export const debounce = (callbackFunction, delay = 1000) => {
    let timeout;

    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            callbackFunction(...args);
        }, delay);
    }
}