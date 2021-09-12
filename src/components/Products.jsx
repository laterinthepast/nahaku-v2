import React from 'react'
import styled from 'styled-components';
import ProductCard from './ProductCard';
import oczy from '../images/1 (3).jpg'
import oczy1 from '../images/1 (8).jpg'
import oczy2 from '../images/1 (9).jpg'


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
    }
    
`
const ProductWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5vw;
    padding: 2vw 10vw;
    @media (max-width:768px){
        flex-direction: column;
        
    }
`

const Products = () => {
    return (
        <Wrapper>
            <div className="title">
                <h1>produkty</h1>
            </div>
            <ProductWrapper>
                <ProductCard
                img={oczy}
                url="/"
                title="oczy"
                desc="Agnieszka Sieroń jest właścicielką 60-metrowego mieszkania w Tarnowie, w którym mieszka wraz z mężem i dwójką dzieci. Na profilu @na_czwartym na Instagramie, Agnieszka dzieli się swoją pasją do aranżacji wnętrz, odnawiania starych mebli oraz tworzenia własnoręcznych dekoracji. Obserwujący mogą śledzić ciągłe zmiany, których Agnieszka dokonuje w swoim mieszkaniu i śmiałe metamorfozy tej niewielkiej przestrzeni. "
                />
                <ProductCard
                img={oczy1}
                url="/"
                title="dla dzieci"
                desc="Agnieszka Sieroń jest właścicielką 60-metrowego mieszkania w Tarnowie, w którym mieszka wraz z mężem i dwójką dzieci. Na profilu @na_czwartym na Instagramie, Agnieszka dzieli się swoją pasją do aranżacji wnętrz, odnawiania starych mebli oraz tworzenia własnoręcznych dekoracji. Obserwujący mogą śledzić ciągłe zmiany, których Agnieszka dokonuje w swoim mieszkaniu i śmiałe metamorfozy tej niewielkiej przestrzeni. "
                />
                <ProductCard
                img={oczy2}
                url="/"
                title="inne"
                desc="Agnieszka Sieroń jest właścicielką 60-metrowego mieszkania w Tarnowie, w którym mieszka wraz z mężem i dwójką dzieci. Na profilu @na_czwartym na Instagramie, Agnieszka dzieli się swoją pasją do aranżacji wnętrz, odnawiania starych mebli oraz tworzenia własnoręcznych dekoracji. Obserwujący mogą śledzić ciągłe zmiany, których Agnieszka dokonuje w swoim mieszkaniu i śmiałe metamorfozy tej niewielkiej przestrzeni. "
                />
            </ProductWrapper>
        </Wrapper>
    )
}

export default Products
