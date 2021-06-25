import { useLocation } from "react-router"
import axios from 'axios'
import { useContext } from "react";
import UserContext from "../context/UserContext";

export default function newRegister (props) {

    const {value, description, setBoolean, history, type, user} = props
    const config = {headers: {"Authorization": `Bearer ${user.token}`}}
    console.log(type)

    if(value && description) {
        const body = {value, description, type}


        setBoolean(true)
        const promise = axios.post('http://localhost:4000/registries', body, config)
        promise.then(() => {
            alert("sucesso no registro!")
            setBoolean(false)
            history.push('/home')
        })
    }
    else{
        alert('Preencha todos os campos')
        setBoolean(false)
    }
}