import React, { useEffect, useContext, useState } from "react";

import AuthGlobal from "../../shared/context/store/AuthGlobal";

import { loginUser } from "../../shared/context/actions/autentication.action"


import Input from '../../shared/components/Forms/Input'
import Button from '../../shared/components/Forms/Button';



const Login = () => {
    const context = useContext(AuthGlobal);
   // const [correo, setcorreo] = useState("");
   // const [clave, setclave] = useState("");
    const [error, seterror] = useState("");
    const authSubmitHandler = event => {
        event.preventDefault()
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value
        const user = {
            email,
            password
        };
        if (email === "" || password === "") {
            seterror("Ingrese datos correctamente");
            window.alert("Rellene todos los campos");
        } else {
            loginUser(user, context.dispatch, seterror);
        }
        // console.log(formState.inputs)
    }
    return <form onSubmit={authSubmitHandler}>
        <Input id="email" element="input" type="email" validators={[]} errorText="Invalid email" label="Email" />
        <Input id="password" element="input" type="password" validators={[]} errorText="Invalid password" label="Password" />
        <Button type="submit">LOGIN</Button>
    </form>
};

export default Login