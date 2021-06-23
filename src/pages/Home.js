import axios from "axios"
import Header from "../components/Header"
import styled from "styled-components"
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai"
import { icons } from "react-icons"
import { useHistory } from "react-router"

export default function Home () {

    const user = "Fulana"
    const entries = false
    const exits = false

    const history = useHistory()

    return (
        <Container>
            <Header title = {`Olá, ${user}`} buttonExit = {true} />
            <Records>
                {entries && exits
                    ? <div>entries and exits</div>
                    : <p>Não há registros de entrada ou saída</p>
                }
            </Records>
            <Buttons>
                <Button onClick={() => history.push("./entry")}>
                    <p>Nova entrada</p>
                </Button>
                <Button onClick={() => history.push("./exit")}>
                    <p>Nova saída</p>
                </Button>
            </Buttons>
        </Container>
    )
}

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Records = styled.div`
    width: 100%;
    height: 70vh;
    border-radius: 5px;
    background: #fff;
    color: #868686;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 13px;
    text-align: center;
    p{
        width: 60%;
        font-size: 20px;
    }
`
const Buttons = styled.div`
    width: 100%;
    height: 17vh;
    display: flex;
    justify-content: space-between;
`
const Button = styled.button`
    width: 48%;
    height: 100%;
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
