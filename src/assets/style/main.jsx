import styled from 'styled-components'
import './fonts.css'

export const column = `
    display: flex;
    flex-direction: column;
`

export const row = `
    display: flex;
    flex-direction: row;
`

export const Wrapper = styled.div`
    width: 100%;
    ${ column }
    align-items: center;
`

export const WrapperContent = styled.div`
    width: 1700px;
    height: 100vh;
    max-width: 100%;
    ${column}
    align-items: center;
    font-family: 'Arial';
    
    > h3 {
        color: white;
        font-weight: 400;
        text-align center;
        font-size: 18px;
        margin-top: 6em;
        :nth-child(9){
            margin-top: 0;
            max-width: 300px;
        }
        :nth-child(11){
            margin-top: 14em;
        }
    }
    > img {
        margin-top: 10cm;
        
    }
    @media (max-width: 1200px){
        > img {
            width: 800px;
        }
    }
    @media (max-width: 860px){
        > img {
            width: 400px;
        }
        > h1 {
            font-size: 80px;
            line-height: 0.8em;
        }
    }
    @media (max-width: 450px){
        > img {
            width: 300px;
        }
        > h1 {
            font-size: 60px;
            line-height: 1em;
        }
    }
`

export const Members  = styled.h1`
    margin-top: 0.8em;
    color: white;
    font-size: 130px;
    line-height: 0.5em;
    span {
        font-size: 40px;
        font-weight: 400;
    }
`

export const WrapperContentTitle = styled.h1`
    text-align: center;
    color: white;
    font-size: 180px;
    font-family: 'Revalia', cursive;
    font-style: italic;
    line-height: 1em;
    margin-top: 0.8em;
    span {
        z-index: -1;
        position: absolute;
        margin-left: -0.25em;
        color: rgba(255, 255, 255, 0.2);
    }
`

export const WrapperContentJoined = styled.div`
    width: 100%;
    ${ row }
    align-items: center;
    justify-content: space-between;
    font-family: 'Arial';
    margin-top: 12em;
    flex-wrap: wrap;
    p{
        color: white;
        font-size: 18px;
        span { color: #FFC8D0; }
    }
    > div {
        ${row}
        flex-wrap: wrap;
        gap: 1em;
        button {
            border: 2px solid #262626;
            border-radius: 10px;
            padding: 20px 30px;
            font-size: 15px;
            background: none;
            color: white;
            cursor: pointer;
            transition: .3s;
            :hover {
                background-color: #FFC8D0;
                color: black;
            }
        }
    }
`

export const CashBack = styled.div`
    ${column}
    margin-top: 8em;
    align-items: center;
    text-align: center;
    position: relative;
    h1 {
        color: white;
        font-family: 'Arial';
        font-weight: 400;
        font-size: 105px;
        max-width: 700px;
        span {
            color: #FFC8D0;
        }
    }
    img:nth-child(1){
        margin-left: 12cm;
    }
    img:nth-child(3){
        margin-right: 12cm;
    }
`

export const Works = styled.div`
    margin-top: 15em;
    > h1 {
        color: white;
        font-size: 130px;
        font-family: 'Arial';
        font-weight: 400;
        text-align: center;
    }
`

export const WorksSteps = styled.div`
    margin-top: 8em;
    ${column}
    justify-content: center;
    gap: 6em;
`

export const WorksStep = styled.div`
    ${row}
    flex-wrap: wrap;
    justify-content: center;
    gap: 10em;
    align-items: center;
    > main {
        text-align: center;
        color: white;
        ${column}
        align-items: center;
        gap: 4em;
        font-family: 'Arial';
        font-weight: 400;
        h4 {
            background: #262626; 
            width: 120px;
            padding: 15px 25px;
            border-radius: 30px;
        }
        h2 {
            font-size: 60px;
        }
        p {
            max-width: 300px;
        }
    }
    > div {
        ${column}
        background-color: #FFC8D0;
        border-radius: 20px;
        img:nth-child(1){
            position: relative;
        }
        img:nth-child(2){
            margin-top: -16em;
        }
        img:nth-child(3){
            margin-top: -16em;
            margin-left: 14em;
        }
    }
`

export const Plans = styled.div`
    ${row}
    flex-wrap: wrap;
    gap: 3em;
    margin-top: 10em;
    justify-content: center;
    
`
export const Plan = styled.div`
    height: auto;
    width: auto;
    border: 2px solid #262626;
    border-radius: 20px;
    ${ props => props.money ?
        `
            background-color: white;
            border-color: #F3F3F3;
            div p, span {
                color: black;
            }
            div > h1, div > h2 {
                color: black;
            }
        `
    : null }
`
export const PlanBlock = styled.div`
    border: 1px solid #262626;
    border-width: 2px 0 0 0;
    ${row}
    justify-content: space-between;
    padding: 30px 25px;
    align-items: center;
    font-family: 'Arial';
    gap: 3em;
    > h1 {
        margin-top: 0.4em;
        font-size: 55px;
        color: white;
        > span {
            font-size: 15px;
            font-weight: 400;
            position: relative;
            top: -1.5em;
        }
    }
    > h3 {
        color: white;
        font-weight: 400;
        color: black;
        background-color: #FFC8D0;
        padding: 20px 30px;
        font-size: 17px;
        border-radius: 30px;
    }
    > h2 {
        color: white;
        margin-top: -2em;
    }
    > p {
        color: white;
    }
    > a {
        background-color: #FFC8D0;
        border: none;
        width: 100%;
        padding: 20px;
        font-size: 16px;
        border-radius: 10px;
        text-align: center;
        text-decoration: none;
        color: black;
        transition: .3s;
    }
    > a[href]:hover {
        background: #262626;
        color: white;
        cursor: pointer;
    }
    :nth-child(1){
        border: none;
        ${column}
        text-align: center;
    }
`

export const PlanBlockAccess = styled.button`
        background-color: #FFC8D0;
        border: none;
        width: 100%;
        padding: 20px;
        font-size: 16px;
        border-radius: 50%;
        width: 62px;
        height: 60px;
        ${ props => props.notAccess ?
            `
                border: 2px solid rgba(255, 255, 255, 0.2);
                background: none;
                color: white;
                border-radius: 50%;
            ` 
        : null
        }
`

export const Info = styled.div`
    margin-top: 12em;
    ${row}
    flex-wrap: wrap;
    justify-content: center;
    > div {
        border: 1px solid #262626;
        max-width: 500px;
        display: grid;
        grid-template-columns: 249px 249px;
        align-items: center;
        p {
            padding: 30px;
            color: rgba(255,255,255,0.5);
            width: 498px;
        }
        button {
            border: 1px solid #262626;
            width: 249px;
            height: auto;
            padding: 100px 0;
            background: #262626;
            color: white;
            transition: .3s;
            :hover {
                background: #FFC8D0;
                color: black;
                cursor: pointer;
            }
        }
        
    }
`

export const Footer = styled.footer`
    margin-top: 10em;
    ${row}
    align-items: center;
    gap: 6em;
    border-top: 1px solid #262626;
    padding: 100px 40px;
    flex-wrap: wrap;
    h3, a {
        text-decoration: none;
        color: rgba(255,255,255,0.5);
        font-size: 18px;
        font-weight: 400;
        transition: .3s;
    }
    a:hover {
        cursor: pointer;
        color: white;
    }
    div {
        ${row}
        gap: 2.5em;
        flex-wrap: wrap;
    }
`