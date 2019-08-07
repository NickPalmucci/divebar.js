import React from 'react';
import InputColor from 'react-input-color';

const containerStyle = {
    display: 'flex',
};

const pickerStyle = {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
    alignItems: 'center'
};

export default (props) => {

    return (
        <div style={containerStyle}>

            <div style={pickerStyle}>
                <InputColor
                    initialHexColor={props.stickerTextColor}
                    onChange={(color)=>{props.setAppState({stickerTextColor: color.hex})}}
                />
                <p>Text</p>
            </div>

            <div style={pickerStyle}>
                <InputColor
                    initialHexColor={props.stickerBackgroundColor}
                    onChange={(color)=>{props.setAppState({stickerBackgroundColor: color.hex})}}
                />
                <p>Background</p>
            </div>

        </div>
    )
}
