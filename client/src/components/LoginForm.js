import axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";
function LoginForm() {
    const [username,setUserName] = useState(null)
    const [password,setPassword] = useState(null)
    const submitForm = async(e)=>{
        console.log(username,password)
        e.preventDefault()
        try {
            const data = {
                username,password
            }
            const res = await axios.post("http://localhost:3030/login",data)
            console.log(res)
        } catch (error) {
            console.log(error) 
        }
        

    }
    return ( 
            <div className="login-form-container">
            <form action="" onSubmit={submitForm}>
                <h3>Sign in</h3>
                <b><span>Username *</span></b>
                <input type="email" name="username" className="box" placeholder="enter your email"  required id="" value={username} onChange = {(e)=>setUserName(e.target.value)}/>
                <b><span>Password *</span></b>
                <input type="password" name="password" className="box" placeholder="enter your password" id="" value={password} onChange = {(e)=>setPassword(e.target.value)} />
                {/* <div className="checkbox">
                    <input type="checkbox" name="" id="remember-me"/>
                    <label for="remember-me"> remember me</label>
                </div> */}
                <input type="submit" value="sign in" className="btn"/>
                <p>forget password ? <NavLink to="/forget_pasword">click here</NavLink></p>
                <p>don't have an account ? <NavLink to="/registration">click here</NavLink></p>
                
            </form>

        </div>
     );
}

export default LoginForm;