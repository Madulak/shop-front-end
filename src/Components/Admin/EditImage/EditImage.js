import React from 'react';
import classes from './EditImage.module.css';

const EditImage = (props) => {

    return (
        <div className={classes.EditImage}>
            <img src={props.imageUrl} alt={props.alt} />
        </div>
    );
}

export default EditImage;