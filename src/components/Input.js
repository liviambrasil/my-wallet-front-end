import styled from "styled-components";

export default function Input (props) {

    const { placeholder, type, onChange, disabled, step, name, min } = props

    return (
        <Item   type={type} step={step} name={name} min={min}
                placeholder={placeholder} 
                onChange={onChange}
                disabled={disabled}/>
    )
}

const Item = styled.input`
    width: 100%;
    height: 58px;
    border: none;
    border-radius: 5px;
    margin-bottom: 13px;
    padding-left: 15px;
    color: #000;
    font-weight: 400;
    font-size: 20px;
    font-family: 'Raleway', sans-serif;

    ::placeholder {
        font-weight: 400px;
        font-size: 20px;
        opacity: 1;
    }
`