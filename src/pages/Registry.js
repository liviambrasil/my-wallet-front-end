import { useContext, useState } from "react"
import styled from "styled-components"
import Header from "../components/Header"
import Input from "../components/Input"
import Button from "../components/Button"
import UserContext from "../context/UserContext"
import { useHistory, useLocation } from "react-router"
import newRegister from "../requests/newRegister"

export default function Registry () {

    const [value, setValue] = useState()
    const [description, setDescription] = useState()
    const [boolean, setBoolean] = useState(false)

    const {user} = useContext(UserContext);
    const history = useHistory()

    const location = useLocation()
    const type = location.pathname
    const text = type === '/entry' ? 'Salvar entrada' : 'Salvar saída'

    return (
        <>
            <Header title={type === "/entry" ? "Nova entrada" : "Nova saída"} buttonExit={false}/>
            <Inputs>
                <Input onChange={(event) => setValue(event.target.value)}
                        placeholder='Valor'
                        type="text"
                        className='input-mask'
                        required 
                        />

                <Input  placeholder="Descrição" 
                        type="text"
                        onChange={(event) => setDescription(event.target.value)}  
                        disabled={boolean} />
            </Inputs>
            <Button text={text} 
                    onClick={() => newRegister({value, description, setBoolean, history, type, user})} />
            <Button text="Voltar para o início" onClick={() => history.push("/home")} />
        </>
    )
}


const Inputs = styled.form`
    padding-top: 20px;
`