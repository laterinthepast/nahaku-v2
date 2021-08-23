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
    .left-nav {
        display: flex;
    }
`
const Logo = styled.div`
    img {
        width: 10vw;
    }
`

const Socials = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
        width: 2vw;
    }
    a {
        padding-left: 3vw;
    }
`

const Nav = styled.div`

`

const Navitem = styled.div`

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
                    <a href="/">produkty</a>
                    <a href="/">sklep</a>
                    <a href="/">kontakt</a>
                </Navitem>
            </Nav>
        </Wrapper>
    )
}

export default Navbar
