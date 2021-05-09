import React from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';

const Header = () => {
    return (
        <div className='header'>
            <span> Workout Tracker </span>

            <Button variant='outlined' className='header__logoutBtn' > Logout </Button>
        </div>
    )
}

export default Header
