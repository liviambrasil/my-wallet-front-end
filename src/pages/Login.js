import axios from "axios"
import { useContext, useState } from "react"
import Input from "../components/Input"
import Button from "../components/Button"
import Logo from "../styles/Logo"
import styled from "styled-components"
import { useHistory } from "react-router"
import UserContext from "../context/UserContext"

export default function Login () {

    const {setUser} = useContext(UserContext);
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [boolean, setBoolean] = useState(false)
    const history = useHistory()

    return (
        <Container>
            <Logo />
            <Input  placeholder="E-mail"
                    type="email"
                    onChange={(event) => setEmail(event.target.value)} 
                    disabled={boolean}/>
            <Input  placeholder="Senha"
                    type="password"
                    onChange={(event) => setPassword(event.target.value)} 
                    disabled={boolean}/>
            <Button text="Entrar" onClick={() => sendRequest (email, password, setUser, setBoolean)} />
            <p onClick={() => history.push("/sign-up")}>Primeira vez? Cadastre-se!</p>
        </Container>
    )
}

function sendRequest (email, password, setUser, setBoolean) {
    setBoolean(true)
    const body = {email, password}

    const promise = axios.post('http://localhost:4000/login', body)
    promise.then(response => {
        setUser(response)
        setBoolean(false)
        alert('sucesso no login!')
    })
}

const Container = styled.div`
    width: 100%;
    height: 100vmax;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
        font-weight: 700;
        font-size: 15px;
        color: #fff;
        margin-top: 36px;
        cursor: pointer
    }`