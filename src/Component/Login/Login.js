import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }


    return (
        <div className='login'>
            

            <div className='login__container'>
                <h4>LOGIN</h4>

                <form>
                <div className="floating-label-group">
                <input type='text' autocomplete="off" autofocus required value={email} onChange={e => setEmail(e.target.value)} />
                <label className="floating-label"><h6>Email</h6></label>
                </div>
                   
                <div className="floating-label-group">
                <input type='password' autocomplete="off" autofocus required value={password} onChange={e => setPassword(e.target.value)} />
                <label className="floating-label"><h6>Password</h6> </label>
                </div>
                
                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>

                <p className="check">
                <input type="checkbox"/>By signing-in you agree to the MUSIC LEARNING CENTER Conditions of Use & Sale. Please
                see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <Link to ="/signup"><button className='login__registerButton'>Create your Amazon Account</button></Link>
            </div>
        </div>
    )
}

export default Login
