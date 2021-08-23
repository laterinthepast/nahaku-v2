import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 1vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`
const CardImg = styled.div`
    
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
    font-size: 1.2vw;
    h1 {
        font-size: ;
    }
    p {
        text-align: justify;
    }
`

const ProductCard = (props) => {
    return (
        <Wrapper>
            <CardImg>
                <a href="/"><img src={props.img} alt="gallery"/>
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
