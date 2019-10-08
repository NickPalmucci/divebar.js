import React from 'react';
import Modal from '@material-ui/core/Modal';
import StickerBuilder from '../stickers/stickers'
import Brushes from '../brushes/brushes';

export default (props) => {
    const {
        appState,
        openModal,
        setAppState,
        modalType
    } = props;

    const modal = modalType === 'sticker' ?
        (<StickerBuilder
            setAppState={setAppState}
            appState={appState}
        />) :
        (<Brushes controlsNode={appState.controlsNode}/>);

    return (
        <Modal
            open={openModal}
            onClose={event => setAppState({modal: false})}
        >
            {modal}
        </Modal>
    )

}