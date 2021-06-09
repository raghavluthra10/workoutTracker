import React from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';

const Header = ({ page, takeMeTo }) => {
    return (
        <div className='header'>
            <Button variant='outlined' className='header__logoutBtn' onClick={takeMeTo} > {page} </Button>

            <Button variant='outlined' className='header__logoutBtn' > Logout </Button>
        </div>
    )
}

export default Header
