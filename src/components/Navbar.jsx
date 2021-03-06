import React, { useState } from 'react'

import styled from 'styled-components';
import logo from '../images/icons/Logo.svg'

const COLORS = {
    primaryDark: "#114b4c",
    primaryLight: "#B6EDC8"
};

const MenuLabel = styled.label`
    background-color: transparent;
    position: fixed;
    top: 0.4vw;
    right: 0.4vw;
    width: 6vw;
    height: 6vw;
    cursor: pointer;
    z-index: 1000;
    text-align: center;
    @media (max-width:768px){
        width: 15vw;
    }
`

const NavBackground = styled.div`
    position: fixed;
    top: 1rem;
    right:1rem;
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(243,255,243,1) 100%);
    height: 6rem;
    width: 6rem;
    border-radius: 50%;
    transform: ${props => props.clicked ? "scale(80)" : "scale(0)"};
    transition: transform 0.5s;
    z-index: 600;
    
`

const Icon = styled.span`
    position: relative;
    background-color: ${(props) => (props.clicked) ? "transparent" : "#000"};
    width: 3vw;
    height: 2px;
    display: inline-block;
    margin-top: 2.5rem;
    transition: all 0.3s;
@media (max-width:768px){
        width: 10vw;
    }
    &::before, &::after {
        content:"";
        background-color: #000;
        width: 4vw;
        height: 2px;
        display: inline-block;
        position: absolute;
        left: 0;
        transition: all 0.3s ;
    }
    &::before {
        top: ${(props) => props.clicked ? "0" : "-0.8rem"};
        transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
    }
    &::after {
        top: ${(props) => props.clicked ? "0" : "0.8rem"};
        transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
    }

`

const Navigation = styled.nav`
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 600;
    width: 100%;
    opacity: ${(props) => (props.clicked ? "100%" : "0")};
    visibility: ${(props) => (props.clicked ? "visible" : "hidden")};
    transition: opacity 0.8s ease-in-out;
    animation: ${(props) => (props.clicked ? "right_to_left 0.8s ease" : "left_to_right 0.3s ease")};
    
    @keyframes right_to_left {
        from {
            margin-left: 100%;
        }
        to {
            margin-left: 0;
        }
    }
    @keyframes left_to_right {
        from {
            margin-left: 0%;
        }
        to {
            margin-left: 100%;
        }
    }
    
    
`
const List = styled.ul`
    position: absolute;
    list-style: none;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    text-align: center;
`
const ItemLink = styled.div`
    display: inline-block;
    font-size: 2rem;
    font-weight: 300;
    text-decoration: none;
    color: ${COLORS.primaryLight};

    background-image: linear-gradient(
        120deg,
        transparent 0%,
        transparent 50%,
        #d9f2df 50%
    );
    background-size: 240%;
    transition: all 0.2s;

    &:hover,
    &:active {
        background-position: 100%;
        color: ${COLORS.primaryDark};
        transform: translateX(1rem) ;
    }
    a {
        text-decoration: none;
        color: #000;
       
        
    }
    
    
`
const LogoImg = styled.div`
    padding: 0.4vw 0 0.4;
    background-color: rgba(255, 255, 255, 0.9);
    position: fixed;
    padding: 2vw;
    img {
        width: 7vw;
        
    }
    @media (max-width:768px){
        img {
            width: 25vw;
        }
    }
`

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <>
            <div className="nav-main">
                <LogoImg>
                    <img src={logo} alt="aa" href="/" />
                </LogoImg>
                <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
                    <Icon clicked={click}>&nbsp;</Icon>
                </MenuLabel>
            </div>
            <NavBackground clicked={click}>&nbsp;</NavBackground>

            <Navigation clicked={click}>
                <List>
                    <li>
                        <ItemLink>
                            <a href="#products" onClick={handleClick}>
                                produkty
                            </a>
                        </ItemLink>
                    </li>
                    <li>
                        <ItemLink>
                            <a href="#about" onClick={handleClick}>
                                o mnie
                            </a>
                        </ItemLink>
                    </li>
                    <li>
                        <ItemLink>
                            <a href="https://www.etsy.com" rel="noopener noreferrer" target="_blank" onClick={handleClick}>
                                sklep
                            </a>
                        </ItemLink>
                    </li>
                    <li>
                        <ItemLink>
                            <a href="#contact" onClick={handleClick}>
                                kontakt
                            </a>
                        </ItemLink>
                    </li>
                </List>
            </Navigation>


        </>
    )
}

export default Navbar
