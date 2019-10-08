import React from 'react';
import { useDrop } from 'react-dnd';
import {dropTypes} from '../stickers/sticker';


export default (props) => {

    const [{ isOver }, drop] = useDrop({
        accept: dropTypes.sticker,
        drop: () => console.log('dropped!!', isOver),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
    });

    return (
        <div ref={drop}  id="drawingboard"></div>
    )
}
