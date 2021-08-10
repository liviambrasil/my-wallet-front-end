import axios from 'axios'

export default function newRegister (props) {

    const {value, description, setBoolean, history, type, user} = props
    const config = {headers: {"Authorization": `Bearer ${user.token}`}}

    if(value, description) {
        const body = {value:(value*100), description, type}
        setBoolean(true)
        const promise = axios.post(`${process.env.REACT_APP_HOST}registries`, body, config)
        promise.then(() => {
            alert("sucesso no registro!")
            setBoolean(false)
            history.push('/home')
        })
    }
    else {
        alert('Preencha todos os campos');
    }
}