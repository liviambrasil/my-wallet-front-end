import styled from "styled-components"
import dayjs from "dayjs"

export default function List ({registries}) {

    let total;

    function totalCalc (registries) {
        let total = 0;

        let registriesValues = registries.map(element => {
            return element.type === '/entry' ? element.value : -(element.value)
        })

        registriesValues.map((element) => +(total += element))
        return total
    }

    return (
        <ListItens>
            {registries.map((element) => {
                const date = dayjs(element.date).format('DD/MM')
                return (
                        <Item>
                            <div>
                                <Date>{date}</Date>
                                <Description>{element.description}</Description>
                            </div>
                            <Value type={element.type}>{element.value}</Value>
                        </Item>
                )
            })}
            <Total>
                <p>SALDO</p>
                <TotalCalc total={total}>{totalCalc(registries)}</TotalCalc>
            </Total>
        </ListItens>
    )
}


const ListItens = styled.div`
    height: auto;
    max-height: 50vh;
    margin: 23px 12px;
    overflow-x: auto;
`
const Item = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    font-weight: 400;
    color: #fff;
    margin-bottom: 23px;
    p{
        font-size: 16px;
        font-weight: 400;
    }
    div{
        display:flex;
    }
`
const Date = styled.p`
    color: #c6c6c6;
`
const Description = styled.p`
    color: #000;
    margin-left: 5px;
`
const Value = styled.p`
    color: ${props => props.type==='/entry' ? "#03AC00" : "#C70000"};
`
const Total = styled.div`
    width: 90%;
    position: absolute;
    bottom: 7px;
    display: flex;
    justify-content: space-between;
    p {
        font-size: 17px;
        font-weight: 700;
    }
`
const TotalCalc = styled.p `
    font-size: 16px;
    font-weight: 400;
    color: ${props => props.total >= 0 ? "#03AC00" : "#C70000"}
`
