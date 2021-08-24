import React from 'react'
import styled from 'styled-components';
import heroIMG from '../images/restronainternetowa/hero.jpg'

const Wrapper = styled.div`
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s all ease-in-out;
`
const LeftHero = styled.div`
    img {
        height: 30vw;
    }
    padding: 3vw;
    border-left: 10px solid #000;
    transition: 0.1s all ease-in-out;
`
const RightHero = styled.div`
    background-color: rgba(255,255,255, .1);
    :hover {
        background-color: rgba(255,255,255, 1);
    }
    h1 {
        font-size: 8vw;
    }
    h2 {
        font-size: 3vw;
    }
    margin-left:-7vw;
    transition: 0.4s all ease-in-out;
`

const Hero = () => {
    return (
        <Wrapper>
            <LeftHero>
                <div className="border">
                    <img src={heroIMG} alt="heroIMG"/>
                </div>
            </LeftHero>
            <RightHero>
                <h1>oryginalne</h1>
                <h2>i nietuzinkowe ozdoby dla domu</h2>
            </RightHero>
        </Wrapper>
    )
}

export default Hero
