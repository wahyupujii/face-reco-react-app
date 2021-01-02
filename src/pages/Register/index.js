import React from 'react'
import { RegisterBG } from '../../assets';
import "./register.css";
import {Button, Gap, Input , Link} from "../../components";

const Register = () => {
    return (
        <div className="main-page">
            <div className="left">
                <img src={RegisterBG} className="bg-image"/>
            </div>
            <div className="right">
                <div className="form-register">
                    <h1>Register</h1>
                    <Gap />
                    <form>
                        <Input placeholder="Name"/>
                        <Gap height={30}/>
                        <Input placeholder="Email"/>
                        <Gap height={30}/>
                        <Input placeholder="Password"/>
                        <Gap  height={30}/>
                        <Gap  height={20}/>
                        <Button label="Register" />
                        <Gap height={10} />
                        <Link text1="Have a account ? " text2="Login" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
