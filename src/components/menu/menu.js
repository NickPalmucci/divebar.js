import React from 'react';
import Fab from '@material-ui/core/Fab';
import StickerIcon from '../stickers/sticker-svgrepo-com';
import {FormatPaint} from '@material-ui/icons';

const menuStyle= {
    padding: '0 1rem 1rem 1rem',
    position: 'absolute',
    top: '1rem',
    left: '1rem',
    zIndex: 9000,
    display: 'flex',
    flexDirection: 'column'
};

const buttonStlye = {
  marginTop: '0.5rem'
};

export default (props) => {

    return (
        <div style={menuStyle}>
            <Fab
                style={buttonStlye}
                onClick={event => {props.setAppState({modal: true, modalType: 'brush'})}}
            >
                <FormatPaint/>
            </Fab>
            <Fab
                style={buttonStlye}
                onClick={event => {props.setAppState({modal: true, modalType: 'sticker'})}}
            >
                <StickerIcon/>
            </Fab>
        </div>
    )
}