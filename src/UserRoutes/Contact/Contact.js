import React from 'react';
import classes from './Contact.module.css';

import Container from '../../Container/User/UserContainer';

const Contact = () => {

    return (
        <Container>
            <div className={classes.Contact}>
                <h3>Contacts</h3>
                <div className={classes.ContactInfo}>
                    <div className={classes.Form}>
                        <form>  
                            <div>
                                <div>
                                <label>Name<span>*</span></label>
                                </div>
                                <input type='text' placeholder='Name' />
                                <input type='text' placeholder='Surname' />   
                            </div>
                            <div>
                                <div>
                                    <label>Email<span>*</span></label>
                                </div>
                                <input type='email' placeholder='example@example.com'/>
                            </div>

                            <div>
                                <label>Subject<span>*</span></label>
                            </div>

                            <input type='text' placeholder='Subject...' />

                            <div>
                                <label>Message<span>*</span></label>
                            </div>

                            <textarea placeholder='Message...' />
                            <div>
                                <button>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Contact;