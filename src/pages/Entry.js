import axios from "axios"
import { useContext, useState } from "react"
import styled from "styled-components"
import Header from "../components/Header"
import Input from "../components/Input"
import Button from "../components/Button"
import UserContext from "../context/UserContext"
import { useHistory } from "react-router"

export default function Entry () {

    const [value, setValue] = useState()
    const [description, setDescription] = useState()
    const [type, setType] = useState()
    const [boolean, setBoolean] = useState(false)

    const {user, setUser} = useContext(UserContext);
    const config = {headers: {"Authorization": `Bearer ${user.token}`}}
    const history = useHistory()

    return (
        <>
            <Header title={"Nova entrada"} buttonExit={false}/>
            <Inputs>
                <Input  placeholder="Valor" 
                        type="text"
                        onChange={(event) => setValue(event.target.value)}  
                        disabled={boolean}/>

                <Input  placeholder="Descrição" 
                        type="text"
                        onChange={(event) => setDescription(event.target.value)}  
                        disabled={boolean}/>
            </Inputs>
            <Button text="Salvar entrada" onClick={() => sendRequest (value, description, setBoolean, user, history)} />
        </>
    )
}

async function sendRequest (value, description, setBoolean, user, history) {
    const type = "entry"
    const body = {value, description, type}

    const config = {headers: {"Authorization": `Bearer ${user.token}`}}

    setBoolean(true)
    
        const promise = axios.post('http://localhost:4000/registries', body, config)
        promise.then(() => {
            alert("sucesso no registro!")
            setBoolean(false)
            history.push('/home')
        })
}


const Inputs = styled.form`
    padding-top: 20px;
`