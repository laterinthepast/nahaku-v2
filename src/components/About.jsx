import React from 'react'
import styled from 'styled-components';
import aboutMeIMG from '../images/restronainternetowa/about.jpg'

const Wrapper = styled.div`
    padding: 5vw;
    @media (max-width:768px){
        display: flex;
        flex-direction: column;
        
    }
`
const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 10vw;
    button {
        width: 25vw;
        height: 5vw;
        border-radius: 50px;
        border:none;
        transition: 0.1s all ease-in-out;
        font-size: 1.8vw;
        font-weight: 900;
        :hover {
            cursor: pointer;
            box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        }
    }
    @media (max-width:768px){
        padding: 10vw 0;
        button {
            background: #d9f2df;
            width: 60vw;
            height: 20vw;
            font-size: 5vw;
        }
        
    }
`
const AboutSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2vw;
    border-radius: 50px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    padding: 5vw;
    .about-img {
        img {
            width: 20vw;
            border-radius: 50px;
        }
    }
    @media (max-width:768px){
        flex-direction: column;
        .about-img {
           img {
            width: 70vw;
            border-radius: 0px;
            } 
        }  
        h2 {
            border-bottom: 2px solid #000;
        }
        font-size: 4vw;
    }
`



const About = () => {
    return (
        <Wrapper id="about">
            <Button>
                <a href="/"><button>przejdz do sklepu</button></a>
            </Button>
            <AboutSection>
                <div className="about-img">
                    <img src={aboutMeIMG} alt="aboutme" />
                </div>
                <div className="about-text">
                    <h2>o mnie</h2>
                    <p>Agnieszka Sieroń jest właścicielką 60-metrowego mieszkania w Tarnowie, w którym mieszka wraz z mężem i dwójką dzieci. Na profilu @na_czwartym na Instagramie, Agnieszka dzieli się swoją pasją do aranżacji wnętrz, odnawiania starych mebli oraz tworzenia własnoręcznych dekoracji. Obserwujący mogą śledzić ciągłe zmiany, których Agnieszka dokonuje w swoim mieszkaniu i śmiałe metamorfozy tej niewielkiej przestrzeni. </p>
                </div>
            </AboutSection>
        </Wrapper>
    )
}

export default About
