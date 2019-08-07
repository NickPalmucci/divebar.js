import React from 'react';
import {initBoard} from '../drawingboard/drawingboard';
import Menu from './menu/menu';
import Modal from './modal/modal';
import './root.css';


class App extends React.Component {

    state = {
        modal: false,
        stickerSize: 'small',
        stickerHeight: 100,
        stickerWidth: 200,
        stickerText: '',
        stickerFont: 'Arial',
        stickerTextSize: 12,
        stickerTextColor: '#5e72e4',
        stickerBackgroundColor: '#5e72e4',
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
            <div>

                <div id="drawingboard"/>

                <Menu
                    setAppState={this.setAppState}
                />

                <Modal
                    openModal={this.state.modal}
                    setAppState={this.setAppState}
                    appState={this.state}
                />

            </div>
        );
    }

}

export default App;
