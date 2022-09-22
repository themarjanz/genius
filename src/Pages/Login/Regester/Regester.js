import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Regester.css';

const Regester = () => {
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login')
    }
    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log(event.target.email.value);
    }
    return (
        <div className='register-form'>
            <h2 style={{ textAlign: 'center' }}>Please Regester!!!</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name='name' id='' placeholder='Your Name' />
                <input type="email" name="email" id="" placeholder='Your Email' required />
                <input type="password" name="password" id="" placeholder='Your Password' required />
                <input type="submit" value="Register" />
            </form>
            <p >Already have an accaount? <Link to="/login" className='text-danger text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
        </div>
    );
};

export default Regester;