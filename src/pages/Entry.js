import axios from "axios"
import { useState } from "react"
import styled from "styled-components"
import Header from "../components/Header"
import Input from "../components/Input"
import Button from "../components/Button"

export default function Entry () {

    const [value, setValue] = useState()
    const [description, setDescription] = useState()
    const [type, setType] = useState()
    const [boolean, setBoolean] = useState(false)

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
            <Button text="Salvar entrada" onClick={() => sendRequest (value, description, setBoolean)} />
        </>
    )
}

async function sendRequest (value, description, setBoolean) {

    const body = {value, description}
    setBoolean(true)
    
        const promise = axios.post('http://localhost:4000/entry', body)
        promise.then(() => {
            alert("sucesso no registro!")
            setBoolean(false)
        })
}


const Inputs = styled.form`
    padding-top: 20px;
`