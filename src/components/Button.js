import styled from "styled-components"

export default function Button (props) {

    const {onClick, text} = props


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
    margin-bottom: 10px;
`