import React from "react";
import { auth, provider, signInWithPopup } from "./firebase/firebase";

function Login(){
    return(<div class="login-container">
        <form class="login-box">
            <h2>Login</h2>
            <div class="input-group">
                <label for="username">Username</label>
                <input type="text" id="username" placeholder="Enter your username" />
            </div>
            <div class="input-group">
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="Enter your password" />
            </div>
            <button type="submit" class="login-btn">Login</button>
            <button type="button" class="google-btn">Login with Google</button>
        </form>
    </div>)
}

export default Login;