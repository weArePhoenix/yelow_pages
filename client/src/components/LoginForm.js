import axios from "axios";
import { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { setHeaderAtLocalStorage } from "../hook/useLogin";
// import { showFailureToast, showSucessToast } from "../hook/useToast";
function LoginForm() {
    const [username,setUserName] = useState(null)
    const [password,setPassword] = useState(null)
    const navigate = useNavigate()
    const toastId = useRef(null)
    const submitForm = async(e)=>{
        toastId.current = toast.loading("Please Wait...")
        e.preventDefault()
        try {
            const data = {
                username,password
            }
            
            const res = await axios.post("http://localhost:3030/login",data)
            // showSucessToast(res)
            toast.update(toastId.current, {
                render: res.data.message,
                type: "success",
                isLoading: false
            })
            if(res.data.token){
                setHeaderAtLocalStorage(res.data.token)
                setTimeout(() => {
                    navigate(-1)
                }, 1000);
            }

        } catch (error) {
            // showFailureToast(error) 
            toast.update(toastId.current, {
                render: error.response.data.message,
                type: "error",
                isLoading: false
            })
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
            <ToastContainer/>
        </div>
     );
}

export default LoginForm;