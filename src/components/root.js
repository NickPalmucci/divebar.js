import React from 'react';
import {initBoard} from '../drawingboard/drawingboard';
import Menu from './menu/menu';
import Modal from './modal/modal';
import Sticker from './stickers/sticker';
import './root.css';
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'


class App extends React.Component {

    state = {
        modal: false,
        stickerCanvas: '',
        stickerDrop: true,
        stickerSize: 'small',
        stickerHeight: 100,
        stickerWidth: 100,
        stickerText: '',
        stickerFont: 'Arial',
        stickerFontSize: 12,
        stickerLineHeight: 10,
        stickerTextColor: '#000000',
        stickerBackgroundColor: '#ffffff',
        showEmoji: false
    };

    setAppState = (config) => {
        this.setState(config)
    };

    componentDidMount() {
        initBoard({
            controlsPosition: "bottom-right",
            droppable: true
        })
    }

    render() {

        return (
            <DndProvider backend={HTML5Backend}>
                <div>

                    <div id="drawingboard"/>

                    <Sticker
                        appState={this.state}
                    />

                    <Menu
                        setAppState={this.setAppState}
                    />

                    <Modal
                        openModal={this.state.modal}
                        setAppState={this.setAppState}
                        appState={this.state}
                    />

                </div>
            </DndProvider>
        );
    }

}

export default App;
