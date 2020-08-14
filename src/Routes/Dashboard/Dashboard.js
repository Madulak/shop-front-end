import React from 'react';
import classes from './Dashboard.module.css';

import Container from '../../Container/Admin/AdminContainer';

const Dashboard = () => {

    return (
        <Container>
            <div className={classes.Dashboard}>
                <div>
                    <h3>Manage Produts</h3>
                </div>
                <div>
                    <h3>Show Graphs </h3>
                </div>
            </div>

        </Container>
    );
}

export default Dashboard;