import React from 'react';
import classes from './AdminContainer.module.css';

import Toolbar from '../../Components/Admin/Toolbar/Toolbar';

const AdminContainer = (props) => {

    return (
        <div className={classes.AdminContainer}>
            <Toolbar />
            {props.children}
        </div>
    );
}

export default AdminContainer;