import React, { useState } from 'react';
import { Modal } from '@material-ui/core';

const Modals = (props) => {

    const [backdrop, setBackdrop] = useState(false);

    const backdropHandler = () => {
        setBackdrop(state => !state);
    }

    return (
       <Modal open={backdrop} onClose={backdropHandler}>
           {props.children}
       </Modal> 
    );
}

export default Modals;