import { useLocation } from "react-router"
import styled from "styled-components"

export default function Button (props) {

    const {onClick} = props
    const location = useLocation()
    const type = location.pathname
    let text;

    type === '/entry'
    ? text = 'Salvar entrada'
    : text = 'Salvar saída'
    
    return (
        <Item onClick={onClick}>{text}</Item>
    )
}

const Item = styled.button`
    width: 100%;
    height: 46px;
    background: #A328D6;
    color: #fff;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 700;
`