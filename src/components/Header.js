import styled from "styled-components"
import { AiOutlineExport } from "react-icons/ai"

export default function Header ({title, buttonExit}) {
    return (
        <Top>
            <h1>{title}</h1>
            {buttonExit
            ? <Image src="/assets/logout.png" />
            : <> </>
            }
        </Top>
    )
}

const Image = styled.img`
    width: 23px;   
    height: 24px;
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