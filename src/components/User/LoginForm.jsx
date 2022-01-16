import { useEffect, useState } from 'react';
import { authenticate } from '../../utils/cookie';
import ShowAlert from '../../utils/ShowAlert';
import axios from 'axios';

const LoginForm = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
        buttonText: 'log in',
        message: '',
        status: ''
    });

    const inputHandler = name => e => {
        setUser(prev => {
            return {...prev, [name]: e.target.value, buttonText: 'log in'}
        })
    }

    const loginHandler = async() => {
        try {
            const url = `${process.env.REACT_APP_API}login`
            const res = await axios.post(url, {
                email: user.email,
                password: user.password
            });
    
            authenticate(res);
            
        } catch(e){
            setUser(prev => {
                return {...prev, buttonText: 'log in', message: e.response.data.message, status: 'fail'}
            })
        }
    }

    const submitHandler = e => {
        e.preventDefault();

        setUser(prev => {
            return {...prev, buttonText: 'logging in', message: '', status: ''}
        })

        loginHandler();
    }

    useEffect(() => {
        
    });

    return (
        <form onSubmit={submitHandler} className='gundam-form'>
                <h1>User Log In</h1>
                {user.message && <ShowAlert status={user.status} message={user.message}/>}
                <input type='email' placeholder='Email' value={user.email} onChange={inputHandler('email')} required/>
                <input type='password' placeholder='password' value={user.password} onChange={inputHandler('password')} required/>
                <button type='submit'>{user.buttonText}</button>
            </form>
    )
}

export default LoginForm;