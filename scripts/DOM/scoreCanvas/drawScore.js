export const drawScore = () => {
    const score = 0;
    const scoreCanvas = document.querySelector(".score-canvas");
    const scoreCanvasCtx = scoreCanvas.getContext("2d");
    const fontSize = 60;
    const scoreXPositon = Math.floor((window.innerWidth - fontSize) / 2);
    const scoreYPosition = 100;
    
    scoreCanvasCtx.font = `${fontSize}px Silkscreen`;
    scoreCanvasCtx.fillText(score, scoreXPositon, scoreYPosition);
}