import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = {
    button: {
        margin: '1rem 0'
    }
};

const buttonNames = ['small', 'medium', 'large', 'xxxl'];

const sizePick = (props) => {
    const {classes, stickerSize, setAppState} = props;

    const handleClick = (size) => {
        setAppState({stickerSize: size})
    };

    const buttons = buttonNames.map((name)=>{
        return (
            <Button
                color="primary"
                size="small"
                disabled={stickerSize === name}
                className={classes.button}
                onClick={event=>handleClick(name)}
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