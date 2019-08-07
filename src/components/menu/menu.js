import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import StickerIcon from '../stickers/sticker-svgrepo-com';

export default (props) => {

    return (
        <div style={{float: 'right', padding: '0 1rem 1rem 1rem'}}>
            <Fab onClick={event => {props.setAppState({modal: true})}}>
                <StickerIcon/>
            </Fab>
        </div>
    )
}