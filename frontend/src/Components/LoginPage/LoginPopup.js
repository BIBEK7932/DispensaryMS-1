import React, { useEffect } from "react";
import './LoginPopup.css'

function LoginPopup() {


    return (<div>
        <div className="Lform-popup">
            <div className="Lform-box">
                <div className="Lform-details">

                    <h2>Welcome Back</h2>
                    <p>Please Login with your personal Email!</p>

                </div>
                <div className="Lform-contant">
                    <h2>LOGIN</h2>
                    <form about="#">
                        <div className="Linput-field">
                            <input type="text" required/>
                            <label >Email</label>
                        </div>
                        <div className="Linput-field">
                            <input type="password" required/>
                            <label >Password</label>
                        </div>

                        <a href="#" className="forgot-pass">Forgot Password?</a>
                        <button type="submit">Log In</button>
                    </form>
                    <div className="bottom-link">
                        Don't have an account?
                        <a href="#">SignUp</a>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default LoginPopup;