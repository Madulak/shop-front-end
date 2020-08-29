import React from 'react';

import Container from '../../Container/User/UserContainer';
import classes from './notFound.module.css';

const notFound404 = () => {

    return (
        <Container>
            <div className={classes.notFound404}>
                <h1>oops 404 Page Not found!!</h1>
            </div>
        </Container>
    );
}

export default notFound404;