import React from 'react';

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
    };

    componentDidUpdate = () => {
        const appState = this.props.appState;
        const context = this.state.context;

        if (context) {
            this.setCanvasState(appState, context);
        }
    };

    setCanvasState = (data, context) => {
        const fillX = data.stickerWidth / 2;
        const fillY = data.stickerWidth / 2;
        const fontString = "bold " + data.stickerFontSize + "px " + data.stickerFont;

        context.clearRect(0, 0, data.stickerWidth, data.stickerHeight);

        context.fillStyle = data.stickerBackgroundColor;
        context.fillRect(0, 0, data.stickerWidth, data.stickerHeight);

        context.fillStyle = data.stickerTextColor;
        context.font = fontString;
        context.fillText(data.stickerText, fillX, fillY);
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