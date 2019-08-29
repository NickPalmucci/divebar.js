import React from 'react';
import { useDrag } from 'react-dnd'

class Sticker extends React.Component  {

    state = {
        canvas: '',
        context: '',
    };

    componentDidMount = async () => {
        await this.setState({canvas: document.getElementById("dndSticker")});
        await this.setState({context: this.state.canvas.getContext("2d")});
    };

    componentDidUpdate = () => {
        const appState = this.props.appState;
        const context = this.state.context;
        const canvas = appState.stickerCanvas;

        if (context && canvas) {
            context.drawImage(canvas, 0, 0);
        }
    };


    render () {
        const {appState} = this.props;

        const show = appState.stickerDrop ? "block" : "none";

        const canvasStyle = {
            display: show,
            border: "1px solid black",
        };

        return (

            <canvas
                id="dndSticker"
                style={canvasStyle}
                height={appState.stickerHeight}
                width={appState.stickerWidth}
            ></canvas>

        )
    }

}

export default (props) => {

    const [{isDragging}, drag] = useDrag({
        item: { type: 'STICKER' },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    });

    return (

        <div
            ref={drag}
            style={{opacity: isDragging ? 0.5 : 1,}}
        >
            <Sticker
                appState={props.appState}
            />
        </div>

    )

}