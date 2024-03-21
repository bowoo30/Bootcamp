import Button from "../Elements/Button/Index"
import InputForm from "../Elements/Input/Index"
import axios from 'axios'
import React, {useState} from "react"
import { useNavigate} from "react-router-dom"


const FormRegister = ()=>{
        const [name, setName] = useState('')
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [confirmPassword, setConfirmPassword] = useState('')
        const [msg, setMsg] = useState('')
        const navigate = useNavigate();
    
        const Register = async(e)=>{
            e.preventDefault();
            try {
                await axios.post('http://localhost:4001/user',{
                    name: name,
                    email: email,
                    password: password,
                    confirmPassword : confirmPassword
                })
                navigate.push("/login")
            } catch (error) {
                if(error.response){
                    console.log(error.response.data);
                }
            }
        }

    return (
        <form onSubmit={ Register}>
            <InputForm label="Fullname" placeholder="Insert your name here" type="text" name="text" value={name} onChange={(e)=> setName(e.target.value)}/>
            <InputForm label="Email" placeholder="example@gmail.com" type="email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
            <InputForm label="Password" placeholder="******" type="password" name="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
            <InputForm label="Confirm Password" placeholder="******" type="password" name="confirmPassword" value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)}/>
            <Button classname="bg-blue-700 w-full">Register</Button>
        </form>
    )
}

export default FormRegister