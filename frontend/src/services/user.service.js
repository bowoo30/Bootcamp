import axios from 'axios';

export const getUsers = ()=>{
    axios
    .get("http://localhost:4001/users")
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    })
}