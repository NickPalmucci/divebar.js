import React from 'react';
import {setTextToCanvas} from './utils/utils';

const canvasStyle = {
    display: "block",
    border: "1px solid black",
    marginBottom: "2rem"
};

export default class StickerCanvas extends React.Component {

    state = {
        canvas: '',
        context: '',
    };

    componentDidMount = async () => {
        await this.setState({canvas: document.getElementById("newSticker")});
        await this.setState({context: this.state.canvas.getContext("2d")});

        this.props.setAppState({stickerCanvas: this.state.context.canvas})
    };

    componentDidUpdate = () => {
        const appState = this.props.appState;
        const context = this.state.context;
        const setAppState = this.props.setAppState;

        if (context) {
            this.setCanvasState(appState, context, setAppState);
        }
    };

    setCanvasState = (data, context, setAppState) => {
        const fontString = "bold " + data.stickerFontSize + "px " + data.stickerFont;

        context.clearRect(0, 0, data.stickerWidth, data.stickerHeight);

        context.fillStyle = data.stickerBackgroundColor;
        context.fillRect(0, 0, data.stickerWidth, data.stickerHeight);

        context.fillStyle = data.stickerTextColor;
        context.font = fontString;
        // context.fillText(data.stickerText, fillX, fillY);

        setTextToCanvas(
            context,
            data.stickerText,
            2,
            4,
            data.stickerWidth,
            data.stickerLineHeight,
            setAppState
        )
    };


    render () {
        const {appState} = this.props;

        return (
            <canvas
                id="newSticker"
                style={canvasStyle}
                height={appState.stickerHeight}
                width={appState.stickerWidth}
            ></canvas>
        )
    }
}