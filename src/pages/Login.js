import React from 'react';
import './Login.css';
import Button from '@material-ui/core/Button';


const Login = () => {

    const login = (e) => {
        e.preventDefault();
    }

    const signUp = (e) => {
       e.preventDefault(); 
    };

    
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

                <Button variant='outlined'  className='login__loginBtn' onClick={login} type='submit' > Login </Button>

                    <div className='login__signUpInst'>
                        New here? consider signing up
                    </div>

                <Button variant='outlined'  className='login__loginBtn' onClick={signUp} type='submit' > Sign up </Button>
            </form>
        </div>
    )
}

export default Login
