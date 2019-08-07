import React from 'react';
import Modal from '@material-ui/core/Modal';
import Sticker from '../stickers/stickers'

export default (props) => {
    const {appState, openModal, setAppState} = props;

    return (
        <Modal
            open={openModal}
            onClose={event => setAppState({modal: false})}
        >
            <Sticker
                setAppState={setAppState}
                appState={appState}
            />
        </Modal>
    )

}