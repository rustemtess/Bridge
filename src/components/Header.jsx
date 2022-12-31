import React from "react";
import Icon from "../assets/Icons";
import {
    Header,
    IconButton,
    HeaderApps,
    HeaderList
} from './style'
import Logo from '../assets/Img/Logo.svg'

const HeaderComponent = () => {

    const IconNames = [
        'dollor', 'bolt', 'smile'
    ]

    const Icons = () => {
        return IconNames.map(ico => {
            return <IconButton dangerouslySetInnerHTML={ {__html: Icon.get(ico, '#fff', 25).img } }>
            </IconButton>
        })
    }

    return (
        <Header>
            <img src={Logo} width={200} />
            <HeaderList>
                { Icons() }
            </HeaderList>
            <HeaderApps>
                
                <div>
                    <button dangerouslySetInnerHTML={
                        { __html: Icon.get('apple', 'black', 22).img }
                        }></button>
                    <button dangerouslySetInnerHTML={
                        { __html: Icon.get('playmarket', 'black', 22).img }
                        }></button>  
                </div>  
            </HeaderApps>
        </Header>
    )

}

export default HeaderComponent