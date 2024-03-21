import axios from "axios";

export const login = (data)=>{
    axios
    .post("http://localhost:4001/login",data)
    .then((res)=>{
        console.log(res);
    })
    .catch((error)=>{
        console.log(error);
    })
}