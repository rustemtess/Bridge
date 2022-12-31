import styled from 'styled-components'
import { row, column } from '../assets/style/main'

export const Header = styled.header`
    width: 100%;
    margin-top: 4em;
    height: auto;
    ${row}
    justify-content: space-between;
    align-items: center;
`

export const IconButton = styled.button`
    background-color: #262626;
    border-radius: 10px;
    padding: 14px 17px;
    height: auto;
    cursor: pointer;
    transition: .3s;
    :hover {
        background-color: #FFC8D0;
        svg, path{
            fill: black;
            cursor: pointer;
        }
    }
`

export const HeaderApps = styled.div`
    a {
        color: white;
        font-family: 'Arial';
    }
    ${row}
    gap: 2em;
    align-items: center;
    div {
        button {
            background-color: #FFC8D0;
            padding: 15px 18px;
            outline: none;
            border: 1px solid #FFC8D0;
            transition: .3s;
            cursor: pointer;
            :hover {
                background-color: #262626;
                border-color: #262626;
                svg, path {
                    fill: white;
                    cursor: pointer;
                }
            }
            :nth-child(1){
                border-radius: 10px 0 0 10px;
                border-right: 0.5px solid rgba(0,0,0,0.2);
            }
            :nth-child(2){
                border-radius: 0 10px 10px 0;
                border-left: 0.5px solid rgba(0,0,0,0.2);
            }
        }
    }
`

export const HeaderList = styled.div`
    ${row}
    gap: 1em;
`