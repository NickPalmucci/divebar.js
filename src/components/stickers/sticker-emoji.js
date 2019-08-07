import React from 'react';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';

export default (props) => {

    const handleSelect = (emoji) => {
        const newText = props.stickerText + "" + emoji.native;
        props.setAppState({stickerText: newText})
    };

    const showEmoji = props.showEmoji ? 'block' : 'none';

    const style = {
        display: showEmoji,
        width: '16rem',
    };

    return (
        <Picker
            set="apple"
            title="divebar.js"
            onSelect={emoji=>handleSelect(emoji)}
            style={style}
        />
    )
}