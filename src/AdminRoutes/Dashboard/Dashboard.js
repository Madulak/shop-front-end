import React from 'react';
import classes from './Dashboard.module.css';

import Container from '../../Container/Admin/AdminContainer';

import { VictoryChart, VictoryArea } from 'victory'

const Dashboard = () => {

    const data = [
        {x: 0, y: 8},
        {x: 1, y: 5},
        {x: 2, y: 4},
        {x: 3, y: 9},
        {x: 4, y: 1},
        {x: 5, y: 7},
        {x: 6, y: 6},
        {x: 7, y: 3},
        {x: 8, y: 2},
        {x: 9, y: 0}
      ];

    return (
        <Container>
            <div className={classes.Dashboard}>
                <div>
                    <h3>Manage Produts</h3>
                </div>
                <div>
                    <h3>Show Graphs </h3>

                    <VictoryChart>
                        <VictoryArea interpolation="natural"
                            data={data}
                        />
                        </VictoryChart>


                </div>
            </div>

        </Container>
    );
}

export default Dashboard;