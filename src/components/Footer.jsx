import React from 'react'
import styled from 'styled-components';
import logoIMG from '../images/icons/lego.png'
import etsyIMG from '../images/icons/etsy.png'
import instaIMG from '../images/icons/insta.png'
import pinIMG from '../images/icons/pin.png'


const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 1rem;
    .logo-footer{
        flex:1;
        img {
            width: 10vw;
        }
    }
    .icons-footer {
        flex:2;
        display: flex;
        justify-content: space-evenly;
        img {
            
            width: 4vw;
        }
    }
    .email-footer{
        flex:1;
        font-size: 2.2vw;
        a {
            text-decoration: none;
            cursor: pointer;
        }
    }
        
    
`


const Footer = () => {
    return (
        <Wrapper>
            <div className="logo-footer">
                <a href="/"><img src={logoIMG} alt="Logo" /></a>
            </div>
            <div className="icons-footer">
                <a href="/"><img src={instaIMG} alt="insta" /></a>
                <a href="/"><img src={etsyIMG} alt="etsy" /></a>
                <a href="/"><img src={pinIMG} alt="pintrest" /></a>
            </div>
            <div className="email-footer">
                <a href = "mailto: abc@example.com">na_ha_ku@paczajmejl.com</a>
            </div>
            
        </Wrapper>


    )
}

export default Footer