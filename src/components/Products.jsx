import React from 'react'
import styled from 'styled-components';
import oczy from '../images/oczy/oko (13).jpg'
import oczy1 from '../images/oczy/oko (14).jpg'
import oczy2 from '../images/oczy/oko (15).jpg'


const Wrapper = styled.div`
    padding: 2vw;
    h1 {
        font-size: 5vw;
    }
    @media (max-width:768px){
        padding: 1vw;
        h1 {
            font-size: 10vw;
        }  
        .title {
            padding-bottom: 10vw;
        } 
    }
    
`
const ProductWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5vw;
    padding: 2vw 10vw;
    .reverse {
        flex-direction: row-reverse;
    }
    
    @media (max-width:768px){
        flex-direction: column;
        gap: 16vw;
        .reverse {
        flex-direction: column;
    }
    }
`
const ProductCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70vh;
    gap: 5vw;
    
    @media (max-width:768px){
        
        flex-direction: column;
        height: auto;
    }
`
const CardImg = styled.div`
     z-index: 1;
    img {
        width: 100%;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
    @media (max-width:768px){
        
        img {
            width: 70vw;
        }
    }

`
const CardText = styled.div`
    h2 {
        font-size: 2vw;
        border-bottom: 2px solid #000;
        width: 50%;
    }
    p {
        padding-top: 1rem;
        text-align: justify;
        font-size: 1.1vw;
    }
    button {
        margin-top: 4vw;
        width: 20vw;
        height: 5vw;
        border:none;
        transition: 0.1s all ease-in-out;
        font-size: 1.8vw;
        font-weight: 900;
        background: #caffbf;
        :hover {
            cursor: pointer;
            box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        }
    }


    @media (max-width:768px){
        
        h2 {
        font-size: 7vw;
        
        }
        p {
            padding-top: 0.5rem;
            
            font-size: 5vw;
        }
        button {
            width: 90vw;
            height: 15vw;
            font-size: 7vw;
        }
            
    }
`

const Products = () => {
    return (
        <Wrapper>
            <div className="title">
                <h1>produkty</h1>
            </div>
            <ProductWrapper>
                <ProductCard id="products">
                    <CardImg>
                        <img src={oczy} alt="gallery" />
                    </CardImg>
                    <CardText>
                        <h2>oczy</h2>
                        <p>Agnieszka Sieroń jest właścicielką 60-metrowego mieszkania w Tarnowie, w którym mieszka wraz z mężem i dwójką dzieci. Na profilu @na_czwartym na Instagramie, Agnieszka dzieli się swoją pasją do aranżacji wnętrz, odnawiania starych mebli oraz tworzenia własnoręcznych dekoracji. Obserwujący mogą śledzić ciągłe zmiany, których Agnieszka dokonuje w swoim mieszkaniu i śmiałe metamorfozy tej niewielkiej przestrzeni. </p>
                        <a href="/"><button>zobacz galerie</button></a>
                    </CardText>
                </ProductCard>
                <ProductCard className="reverse">
                    <CardImg>
                        <img src={oczy1} alt="gallery" />
                    </CardImg>
                    <CardText>
                        <h2>obrazy</h2>
                        <p>Agnieszka Sieroń jest właścicielką 60-metrowego mieszkania w Tarnowie, w którym mieszka wraz z mężem i dwójką dzieci. Na profilu @na_czwartym na Instagramie, Agnieszka dzieli się swoją pasją do aranżacji wnętrz, odnawiania starych mebli oraz tworzenia własnoręcznych dekoracji. Obserwujący mogą śledzić ciągłe zmiany, których Agnieszka dokonuje w swoim mieszkaniu i śmiałe metamorfozy tej niewielkiej przestrzeni. </p>
                        <a href="/"><button>zobacz galerie</button></a>
                    </CardText>
                </ProductCard>
                <ProductCard>
                    <CardImg>
                        <img src={oczy2} alt="gallery" />
                    </CardImg>
                    <CardText>
                        <h2>plakaty i inne</h2>
                        <p>Agnieszka Sieroń jest właścicielką 60-metrowego mieszkania w Tarnowie, w którym mieszka wraz z mężem i dwójką dzieci. Na profilu @na_czwartym na Instagramie, Agnieszka dzieli się swoją pasją do aranżacji wnętrz, odnawiania starych mebli oraz tworzenia własnoręcznych dekoracji. Obserwujący mogą śledzić ciągłe zmiany, których Agnieszka dokonuje w swoim mieszkaniu i śmiałe metamorfozy tej niewielkiej przestrzeni. </p>
                        <a href="/"><button>zobacz galerie</button></a>
                    </CardText>
                </ProductCard>
            </ProductWrapper>
        </Wrapper>
    )
}

export default Products
