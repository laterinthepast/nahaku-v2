import React from 'react'
import styled from 'styled-components';
import heroIMG from '../images/rozne/heroimg.jpg'

const Wrapper = styled.div`
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 0.2s all ease-in-out;
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(243,255,243,1) 100%);
    @media (max-width:768px){
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        height: 80vh;
    }
`
const LeftHero = styled.div`    
    width: 50vw;
    img {
        width: 30vw;
        z-index: 100;
        border-left: 10px solid #000;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    }
    padding-left: 10vw;
    transition: 0.1s all ease-in-out;
    @media (max-width:768px){
        display:flex;
        align-items: center;
        justify-content: center;
        width: 100vw;
        padding: 0;
        img {
            width: 60vw;
            z-index: 100;
        }
    }
`
const RightHero = styled.div`
    width: 70vw;
    background-color: rgba(255,255,255, .1);
    :hover {
        background-color: rgba(255,255,255, 1);
    }
    h1 {
        line-height: 4.2vw;
        font-size: 3.4vw;
        font-weight: 400;
        span {
            color: #ee9b00;
            font-weight: 700;
            
        }
    }
    h2 {
        padding-top: 1vw;
        font-size: 2vw;
        
    }
    
    transition: 0.4s all ease-in-out;
    @media (max-width:768px){
        width: 90vw;
        h1 {
        padding-top: 5vw;
        font-size: 6vw;
        font-weight: 600;
        line-height: 7vw;
        }
        h2 {
            padding-top: 5vw;
            font-size: 4vw;
            font-weight: 400;
        }
        margin:0vw;
    }
`

const Hero = () => {
    return (
        <Wrapper>
            <LeftHero>
                <div className="border">
                    <img src={heroIMG} alt="heroIMG" />
                </div>
            </LeftHero>
            <RightHero>
                <h1>Oryginalne formy i kolory które wniosą w <span>Twoje życie dużo radości</span> i zaspokoją potrzebę piękna</h1>
                <h2>...daj się ponieść fantazji</h2>
            </RightHero>
        </Wrapper>
    )
}

export default Hero
