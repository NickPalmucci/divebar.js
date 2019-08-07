import React from 'react';
import FontPicker from "font-picker-react";

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