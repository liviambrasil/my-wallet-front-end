import styled from "styled-components"
import { AiOutlineExport } from "react-icons/ai"
import axios from "axios"
import { useContext } from "react"
import UserContext from "../context/UserContext"
import { useHistory } from "react-router"

export default function Header ({title, buttonExit}) {

    const {user} = useContext(UserContext)
    const history = useHistory()

    return (
        <Top>
            <h1>{title}</h1>
            {buttonExit
            ? <AiOutlineExport onClick={() => signOut(user, history)} />
            : <> </>
            }
        </Top>
    )
}

function signOut (user, history) {
    const config = {headers: {"Authorization": `Bearer ${user.token}`}}
    const promise = axios.post('http://localhost:4000/signout', {}, config)
    promise.then(() => {
        localStorage.clear()
        history.push("/")
    })
}

const Image = styled.img`
    width: 23px;   
    height: 24px;
    cursor: pointer;
`

const Top = styled.div`
    width: 100%;
    color: #fff;
    font-weight: 700;
    font-size: 26px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`