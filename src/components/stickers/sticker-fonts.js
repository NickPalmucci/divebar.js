import React from 'react';
import FontPicker from "font-picker-react";
import TextField from '@material-ui/core/TextField';


export default (props) => {

    return (
        <FontPicker
            apiKey="XXXX"
            activeFontFamily={props.stickerFont}
            onChange={nextFont =>
                props.setAppState({
                    stickerFont: nextFont.family,
                })
            }
        />

    )
}

export const StickerFontSize = (props) => {
    const {stickerFontSize, setAppState} = props;

    return (
        <TextField
            style={{width: '75px', alignSelf: 'center'}}
            type="number"
            value={stickerFontSize}
            label="Font Size"
            onChange={event => setAppState({stickerFontSize: event.target.value})}
        />
    )
};