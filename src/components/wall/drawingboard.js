import 'drawingboard.js/dist/drawingboard.css';
import 'drawingboard.js/dist/drawingboard.js';

export const initBoard = (opts) => {
    const board = new window.DrawingBoard.Board('drawingboard', opts);
};

export const sliceBoardControlNode = () => {
    const controlNode = window.document.getElementsByClassName('drawing-board-controls')[0];
    controlNode.parentNode.removeChild(controlNode);

    return controlNode
};