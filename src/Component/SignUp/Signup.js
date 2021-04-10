import React,{useState} from 'react';
import { useHistory } from "react-router-dom";
import "./Signup.css"
import {auth} from "../../firebase";
import db from "../../firebase"




function Signup(props) { 

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    const register =e=>{
        e.preventDefault();  

        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => { 
            //it sucessfullly created a new user with email and password
            console.log(auth);
            if (auth) {
                          history.push('/')
                        }
        })
            .catch((error) => alert(error.message))
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
    
        db.collection("Data")
          .then(() => {
            alert("Your message has been submitted👍");
          })

          .catch((error) => {
            alert(error.message);
          });
    
          setPassword("");
        setEmail("");
      };


    return (
        <div className='sign'>
            

            <div className='sign__container'>
                <h3>Sign-Up</h3>

                <form noValidate autoComplete='off' onSubmit={handleSubmit}>
                     
                     <div className="floating-label-group">
                     <input autocomplete="off" autofocus required className="form-control"  type='text' value={email} onChange={e => setEmail(e.target.value)} />
                     <label className="floating-label"> E-mail</label>
                     </div>
                    <div className="floating-label-group">
                        <input autocomplete="off" autofocus required className="form-control" type='password' value={password} onChange={e => setPassword(e.target.value)} />
                        <label class="floating-label">Password</label>
                        </div>
                    
                        <p className="nice">
                        Note: Password should be more than 8 digits, have numbers and special characters
                        </p>
                    

                    <button type='submit' onClick={register} className='sign__signInButton'>Sign Up</button>
                </form>

                    </div>
        </div>    
    )
}

export default Signup
