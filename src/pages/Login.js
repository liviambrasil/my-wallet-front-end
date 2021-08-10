import axios from "axios"
import { useContext, useEffect, useState } from "react"
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

    const user = localStorage.getItem('user')


    useEffect(() => {
        user ? history.push('/home') : setUser(null)

    }, [])

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
            <Button text="Entrar" onClick={() => sendRequest ({email, password, setBoolean, setUser, history})} />
            <p onClick={() => history.push("/sign-up")}>Primeira vez? Cadastre-se!</p>
        </Container>
    )
}

function sendRequest ({email, password, setUser, setBoolean, history}) {
    setBoolean(true)
    const body = {email, password}

    const promise = axios.post(`${process.env.REACT_APP_HOST}login`, body)
    promise.then(response => { //response.data = {username, token}
        setBoolean(false)
        setUser(response.data)
        localStorage.setItem("user", JSON.stringify(response.data))
        history.push('/home')
    })
    promise.catch(e => {
        const error = e.response.status
            if (error === 401) alert("E-mail e/ou senha incorreto(s)")
            if (error === 404) alert("Preencha os campos com informações válidas")
            if (error === 500) alert("Erro no login, tente novamente")
        })
}

const Container = styled.div`
    width: 100%;
    height: 90vh;
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