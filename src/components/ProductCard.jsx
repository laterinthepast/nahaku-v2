import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    @media (max-width:768px){
        border-bottom: 1px solid #000;
        
    }
`
const CardImg = styled.div`
     z-index: 1;
    img {
        width: 100%;
       
    }
    position: relative;
    p {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(255,255,255,.3);
        padding:1rem;
        width: 80%;
        text-align: center;
        color: #000;
        font-weight: 900;
        font-size: 2vw;
        transition: 0.2s all ease-in-out;
        :hover {
            background-color: rgba(255,255,255,.8);
        }
    }
    @media (max-width:768px){
        p {
            font-size: 7vw;
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
    @media (max-width:768px){
        h2 {
        font-size: 7vw;
        
    }
    p {
        padding-top: 0.5rem;
        
        font-size: 5vw;
    }
        
    }
`

const ProductCard = (props) => {
    return (
        <Wrapper id="products">
            <CardImg>
                <img src={props.img} alt="gallery"/>
                <a href={props.url}>
                <p>zobacz galerie</p>
                </a>
            </CardImg>
            <CardText>
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
            </CardText>

        </Wrapper>
    )
}

export default ProductCard
