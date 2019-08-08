import React from 'react';
import Canvas from './sticker-canvas';
import StickerSizes from './sticker-sizes';
import StickerFonts from './sticker-fonts';
import {StickerFontSize} from './sticker-fonts';
import StickerText from './sticker-text';
import StickerColors from './sticker-colors';
import StickerEmoji from './sticker-emoji';


const containerStyle = {
    display: 'flex',
    margin: "2rem 5rem",
    backgroundColor: "white",
    justifyContent: "space-between"
};

const canvasStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0 0 1rem 1rem'
};

const optionsStyle = {
    display: 'flex',
    flexDirection: 'column',
};

export default class Sticker extends React.Component {

    render () {

        const {appState, setAppState} = this.props;

        return (
            <div style={containerStyle}>

                <div style={canvasStyle}>
                    <StickerSizes
                        setAppState={setAppState}
                        stickerSize={appState.stickerSize}
                    />

                    <Canvas
                        appState={appState}
                    />

                    <StickerText
                        setAppState={setAppState}
                        stickerText={appState.stickerText}
                        showEmoji={appState.showEmoji}
                    />
                </div>

                <div style={optionsStyle}>

                    <StickerFonts
                        setAppState={setAppState}
                        stickerFont={appState.stickerFont}
                    />

                    <StickerFontSize
                        setAppState={setAppState}
                        stickerFontSize={appState.stickerFontSize}
                    />

                    <StickerColors
                        setAppState={setAppState}
                        stickerTextColor={appState.stickerTextColor}
                        stickerBackgroundColor={appState.stickerBackgroundColor}
                    />

                    <StickerEmoji
                        setAppState={setAppState}
                        stickerText={appState.stickerText}
                        showEmoji={appState.showEmoji}
                    />

                </div>

            </div>
        )
    }

}
