import styled from "styled-components"
import dayjs from "dayjs"

export default function List ({registries}) {

    return (
        <ListItens>
            {registries.map((element) => {
                console.log(element.description)
                const date = dayjs(element.date).format('DD/MM')
                return (
                        <Item>
                            <div>
                                <Date>{date}</Date>
                                <Description>{element.description}</Description>
                            </div>
                            <Value type={element.type}>{element.value.toFixed(2)}</Value>
                        </Item>
                )
            })}
        </ListItens>
    )
}

const ListItens = styled.div`
    margin: 23px 12px;
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
    color: ${props => props.type==='entry' ? "#03AC00" : "#C70000"};
`
