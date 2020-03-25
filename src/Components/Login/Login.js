import React, {useState} from "react";
import classes from './Login.module.css'
import {NavLink} from "react-router-dom";

const Login = (props) => {
    const [form,setForm] = useState({username:'', password:''});
    const handleChange = (e) => {
        setForm({...form,[e.target.name]: e.target.value})
    }
    const handleForm = (e) => {

        props.setAuth(form.username, form.password);
        props.getAuth()
        props.togglewrongMode(e);




    }
    return (
        <div className={classes.form}>
            <div className={"is-size-1 " + classes.h1}>Login form</div>
            <div className="field">
                <p className="control has-icons-left has-icons-right">
                    <input className="input is-rounded"
                           type="text"
                           name="username"
                           placeholder="Username"
                           onChange={handleChange}/>

                </p>
            </div>
            <div className="field">
                <p className="control has-icons-left">
                    <input className="input is-rounded"
                           type="password"
                           name="password"
                           placeholder="Password"
                           onChange={handleChange}/>
                        <span className="icon is-small is-left">
                             <i className="fas fa-lock"></i>
                        </span>
                </p>
            </div>
            {props.wrongMode && <div className="notification">
                Wrong data
            </div>}
            <div className="field">
                <p className="control">
                    <NavLink to ='/profile'>
                        <button className="button is-success" onClick={handleForm}>
                            Login
                        </button>
                    </NavLink>
                </p>
            </div>
    </div>
    )
}



export default Login