import React from 'react'
import styled from 'styled-components';
import logoIMG from '../images/icons/lego.png'
import etsyIMG from '../images/icons/etsy.png'
import instaIMG from '../images/icons/insta.png'
import pinIMG from '../images/icons/pin.png'


const Wrapper = styled.div`
    height: 15vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    .left-nav {
        display: flex;
    }
`
const Logo = styled.div`
    
    img {
        height: auto;
        width: 7vw;
        
    }
`
const Socials = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
        width: 1.5vw;
    }
    a {
        padding-left: 3vw;
    }
`
const Nav = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
const Navitem = styled.div`
    border: 1px solid #000;
    text-align: center;
    
    transition: 0.2s all ease-in-out;
    margin-right: 3vw;
    padding: 0.5rem;
    :hover {
        border: 1px solid transparent;  
        
    }
    a {  
        font-size: 80%;
        text-decoration: none;
    }
`
const Navbar = () => {
    return (
        <Wrapper>
            <div className="left-nav">
                <Logo >
                    <a href="/"><img src={logoIMG} alt="Logo" /></a>
                </Logo>
                <Socials>
                    <a href="/"><img src={instaIMG} alt="insta" /></a>
                    <a href="/"><img src={etsyIMG} alt="etsy" /></a>
                    <a href="/"><img src={pinIMG} alt="pintrest" /></a>
                </Socials>
            </div>
            <Nav>
                <Navitem>
                    <a href="/">o mnie</a>
                </Navitem>
                <Navitem>
                    <a href="/">produkty</a>
                </Navitem>
                <Navitem>
                    <a href="/">sklep</a>
                </Navitem>
                <Navitem>
                    <a href="/">kontakt</a>
                </Navitem>
            </Nav>
        </Wrapper>
    )
}

export default Navbar
