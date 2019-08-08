import React from 'react';
import InputColor from 'react-input-color';

const containerStyle = {
    display: 'flex',
    flexDirection: 'column'
};

const pickerStyle = {
    display: 'flex',
    flexDirection: 'column',
    padding: '0.5rem 1rem',
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
                <span>Text</span>
            </div>

            <div style={pickerStyle}>
                <InputColor
                    initialHexColor={props.stickerBackgroundColor}
                    onChange={(color)=>{props.setAppState({stickerBackgroundColor: color.hex})}}
                />
                <span>Background</span>
            </div>

        </div>
    )
}
