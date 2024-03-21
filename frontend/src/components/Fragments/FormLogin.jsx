import { useEffect, useRef, useState } from "react";
import InputForm from "../Elements/Input/Index"
import Button from "../Elements/Button/Index";
import { login } from "../../services/authLogin";

const FormLogin = ()=>{
    const handleLogin = (e)=>{
        e.preventDefault();
        // window.location.href = "/dashboard"
        const [email,setEmail] = useState("");
        const [password, setPassword] = useState("")

        const data = {
            email : e.target.email.value,
            password : e.target.password.value
        }

        login(data,(status,res)=>{
            if(status){
                console.log(res);
            } else {
                console.log(res);
            }
        })
    }
    const emailRef = useRef(null);
    useEffect(()=>{
        emailRef.current.focus();
    },[])


    return (
        <form action="" onSubmit={handleLogin}>
            <InputForm label="Email" placeholder="example@gmail.com" type="email" name="email" ref={emailRef}/>
            <InputForm label="Password" placeholder="******" type="text" name="password"/>
            <Button classname="bg-blue-700 w-full" type="submit">Login</Button>
          </form>
    )
}

export default FormLogin