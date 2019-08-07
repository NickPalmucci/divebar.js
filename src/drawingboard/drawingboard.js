import 'drawingboard.js/dist/drawingboard.css';
import 'drawingboard.js/dist/drawingboard.js';

export const initBoard = (opts) => {
    const board = new window.DrawingBoard.Board('drawingboard', opts);
};
