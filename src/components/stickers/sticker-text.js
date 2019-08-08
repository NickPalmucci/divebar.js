import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import InsertEmoticon from '@material-ui/icons/InsertEmoticon';

export default (props) => {
    const inputStyle = {
        display: "block"
    };

    const { setAppState, stickerText, showEmoji } = props;

    const handleShowEmoji = () => {
        setAppState({showEmoji: !showEmoji})
    };

    return (
        <TextField
            style={inputStyle}
            value={stickerText}
            fullWidth
            multiline={true}
            onChange={event => setAppState({stickerText: event.target.value})}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <InsertEmoticon onClick={handleShowEmoji}/>
                    </InputAdornment>
                )
            }}
        />
    )
}

