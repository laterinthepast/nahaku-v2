import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    
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
`

const ProductCard = (props) => {
    return (
        <Wrapper id="products">
            <CardImg>
                <img src={props.img} alt="gallery"/>
                <a href="/">
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
