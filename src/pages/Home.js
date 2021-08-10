import axios from "axios"
import Header from "../components/Header"
import styled from "styled-components"
import { useHistory } from "react-router"
import UserContext from "../context/UserContext"
import { useContext, useEffect, useState } from "react"
import List from "../components/List"
import { HiOutlineMinusCircle,HiOutlinePlusCircle } from "react-icons/hi";

export default function Home () {
    const [registries, setRegistries] = useState()
    const {user, setUser} = useContext(UserContext)

    useEffect(() => {
        const config = {headers: {"Authorization": `Bearer ${user.token}`}}
        const promise = axios.get('http://localhost:4000/registries', config)
        promise.then(response => {
            setRegistries(response.data)})
    }
    , [])

    const history = useHistory()

    return (
        <Container>
            <Header title = {`Olá, ${user.username}`} buttonExit = {true} />
            <Records>
                {registries?.length
                    ? <List registries={registries} />
                    : <Warning><h2>Não há registros de entrada ou saída</h2></Warning>
                }
            </Records>
            <Buttons>
                <Button onClick={() => history.push("./entry")}>
                    <OutlinePlus/>
                    <p>Nova entrada</p>
                </Button>
                <Button onClick={() => history.push("./exit")}>
                    <OutlineMinus/>
                    <p>Nova saída</p>
                </Button>
            </Buttons>
        </Container>
    )
}

const Container = styled.div`
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Records = styled.div`
    width: 100%;
    height: 80vh;
    border-radius: 5px;
    background: #fff;
    color: #868686;
    margin: 13px;
    text-align: center;
    position: relative;
`

const Warning = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background: #fff;
    color: #868686;
    display: flex;
    justify-content: center;
    align-items: center;
    h2{
        width: 60%;
        font-size: 20px;
        text-align: center;
    }
`

const Buttons = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`
const Button = styled.button`
    width: 48%;
    height: 20vh;
    background: #A328D6;
    border-radius: 5px;
    position: relative;
    cursor: pointer;
    
    p{
        width: 35px;
        color: white;
        font-size: 17px;
        font-weight: 700;
        position: absolute;
        bottom: 10px;
        left: 10px;
    }
`
const OutlinePlus = styled(HiOutlinePlusCircle)`
    position: absolute;
    top:10px;
    left: 10px;
    color: #fff;
    width: 24px;
    height: 24px;
`
const OutlineMinus = styled(HiOutlineMinusCircle)`
    position: absolute;
    top:10px;
    left: 10px;
    color: #fff;
    width: 24px;
    height: 24px;
`
