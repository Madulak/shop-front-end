import React from 'react';
import classes from './UserContainer.module.css';

import Toolbar from '../../Components/User/Toolbar/Toolbar';
import Newsletter from '../../Components/User/Newsletter/Newsletter';

const Usercontainer = (props) => {

    return (
        <div style={props.style} className={classes.Usercontainer}>
            <Toolbar />
            {props.children}
            <Newsletter />
        </div>
    );
}

export default Usercontainer;