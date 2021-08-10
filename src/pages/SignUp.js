import axios from "axios"
import { useState } from "react"
import styled from "styled-components"
import Input from "../components/Input"
import Logo from "../styles/Logo"
import Button from "../components/Button"
import { useHistory } from "react-router"


export default function SignUp () {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [boolean, setBoolean] = useState(false)
    const history = useHistory()


    return (
        <Container>
            <Logo />
            <Input  placeholder="Nome"
                    type="text"
                    onChange={(event) => setName(event.target.value)} 
                    disabled={boolean}/>
            <Input  placeholder="E-mail"
                    type="email"
                    onChange={(event) => setEmail(event.target.value)} 
                    disabled={boolean}/>
            <Input  placeholder="Senha"
                    type="password"
                    onChange={(event) => setPassword(event.target.value)} 
                    disabled={boolean}/>
            <Input  placeholder="Confirme a senha"
                    type="password"
                    onChange={(event) => setConfirmPassword(event.target.value)} 
                    disabled={boolean}/>

            <Button text="Cadastrar" onClick={() => {
                confirmPassword === password
                ? sendRequest ({name, email, password, setBoolean, history})
                : alert("Senha incompatível")
                }} />
            <p onClick={() => history.push("/")}>Já tem uma conta? Entre agora!</p>
        </Container>
    )
}

function sendRequest ({name, email, password, setBoolean, history}) {

    if(name && email && password) {
        setBoolean(true)
        const body = {name, email, password}
        const promise = axios.post(`${process.env.REACT_APP_HOST}signup`, body)
        promise.then(() => {
            setBoolean(false)
            alert('sucesso no cadastro!')
            history.push("/")
            }
        )
        promise.catch((e) => {
            setBoolean(false)
            const error = e?.response.status
            if (error === 409) alert("Email já cadastrado")
            if (error === 404) alert("Preencha os campos com informações válidas")
            if (error === 500) alert("Erro no cadastro, tente novamente")
        })
    }
    else {
        alert("Preencha todos os campos")
        return
    }
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
        cursor: pointer;
    }`