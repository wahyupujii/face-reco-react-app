import React from 'react'
import { LoginBG } from '../../assets';
import "./login.css";
import {Button, Gap, Input , Link} from "../../components";

const Login = () => {
    return (
        <div className="main-page">
            <div className="left">
                <img src={LoginBG} className="bg-image"/>
            </div>
            <div className="right">
                <div className="form-login">
                    <h1>Login</h1>
                    <Gap />
                    <form>
                        <Input placeholder="Email"/>
                        <Gap height={30}/>
                        <Input placeholder="Password"/>
                        <Gap  height={30}/>
                        <Gap  height={20}/>
                        <Button label="Login" />
                        <Gap height={10} />
                        <Link text1="Not have account ? " text2="Register" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
