import React from 'react';
import './Login.css';
import Button from '@material-ui/core/Button';


const Login = () => {

    const login = (e) => {
        e.preventDefault();
    }

    
    return (
        <div className='login'>
            <div className='login__header'>
                <h1>
                    Login
                </h1>
            </div>
            <form className='login__form'>
                <label> Email: </label>
                <input type='text' />

                <label> Password: </label>
                <input type='password' />

                <Button variant='outlined' onClick={login} type='submit' > Login </Button>
            </form>
        </div>
    )
}

export default Login
