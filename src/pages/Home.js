import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';
import './Home.css';

const Home = () => {

    const history = useHistory();

    const navToLogin = () => {
        history.push('/login')
    };

    return (
        <div className='home'>
            <nav>
                <Button variant='outlined' className='home__loginBtn' onClick={navToLogin}>
                    Login
                </Button>
            </nav>

            <div>
                <h2> WorkTrak </h2>

                <p>
                    Bringing you the best App for tracking your workouts.
                </p>
            </div>

            

        </div>
    )
}

export default Home
