import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = {
    button: {
        margin: '0.5rem 0'
    }
};

const buttonNames = ['small', 'medium', 'large', 'xxxl'];

const sizeMap = {
    'small': {stickerHeight: 100, stickerWidth: 100},
    'medium': {stickerHeight: 200, stickerWidth: 200},
    'large': {stickerHeight: 300, stickerWidth: 250},
    'xxxl': {stickerHeight: 400, stickerWidth: 350}
};

const sizePick = (props) => {
    const {classes, stickerSize, setAppState} = props;

    const handleClick = (size) => {
        const dimensions = sizeMap[size];
        setAppState({...dimensions, stickerSize: size})
    };

    const buttons = buttonNames.map((name, i)=>{
        return (
            <Button
                color="primary"
                size="small"
                disabled={stickerSize === name}
                className={classes.button}
                onClick={event=>handleClick(name)}
                key={i}
            >
                {name}
            </Button>
        )
    });

    return (
        <div style-={{display: 'flex'}}>
            {buttons}
        </div>
    )
};

export default withStyles(styles)(sizePick);