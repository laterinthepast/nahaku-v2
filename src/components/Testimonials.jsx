import React from 'react'
import styled from 'styled-components';


const Wrapper = styled.div`
    padding: 2vw;
    
    
    h1 {    
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 900;
        font-size: 3vw;
        color: #ee9b00;
        }
`
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

        
    .testimonial {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: transparent;
        margin: 1vw;
        padding: 1vw;
        
        font-size: 1vw;
        text-align: center;
        border-radius: 1%;
        text-align: justify;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
        q{
            font-size: 0.7vw;
            font-weight: 200;
            letter-spacing: 0.1vw;
            padding: 1.5vw;
            color: #000;
            
        } 
    }
    
    h3 {
        padding: 1vw;
        font-size: 2vw;
        text-align: center;
        }
    .one, .three {
        height: auto;
        transition: all 0.2s ease-in-out;
        :hover {
            transform: scale(1.02);   
        }
        
        }
    .two {
        transition: all 0.2s ease-in-out;
        
        q {
            font-size: 1.2vw;
        }
        :hover {
            transform: scale(1.02);   
        }
        
        
    } 
    .three {
        
    }  
    .four {
        
    }
    .five {
        
        
    }

    @media (max-width:768px){
        flex-direction: column;
        
    }

`



const Testimonials = () => {



    return (
        <Wrapper>
            
            <Container>

                <div className="testimonial one">
                    
                    <q className="text"><em>Pełna informacja, bieżące dane o real8zacjo zamówienia,zgodne z ustalonym terminem dostarczenie przesyłki Polecam sklep.</em></q>
                    <h3 className="name">Genowefa</h3>
                </div>
                <div className="testimonial two">
                    
                    <q className="text"><em>Na pochwałe zasługuje konsultant który obsługiwał proces mojego zamówienia. Profesjonalizm w każdym calu. Pozostaje mi mieć nadzieję że jego wynagrodzenie jest adekwatne do wysokiego poziomu jakości obsługi jaki ze sobą reprezentował. Pozdrwiam</em></q>
                    <h3 className="name">Rafal</h3>
                </div>
                <div className="testimonial three">
                    
                    <q className="text"><em>Bardzo sprawnie i szybko dotarł towar który zakupiłam w bardzo korzystnej cenie. Polecam zakupy w tej firmie</em></q>
                    <h3 className="name">Jozef</h3>
                </div>
                {/* <div className="testimonial four">
                    <h3 className="name">Bartek</h3>
                    <q className="text"><em>w którym mi wnętrz, odnawiania starych mebli oraz tworzenia własnoręcznych dekoracji</em></q>
                </div>
                <div className="testimonial five">
                    <h3 className="name">Bartek</h3>
                    <q className="text"><em>w którym mi wnętrz, odnawiania starych mebli oraz tworzenia własnoręcznych dekoracji</em></q>
                </div> */}


            </Container>

        </Wrapper>
    )
}

export default Testimonials




/* const testis = [
    {
        key: "1",
        at: "Rafal",
        test: "A0-metrowego mieszkania w Tarnowie, w którym mieszka wraz z mężem i dwójką dzieci. Na profilu @na_czwartym na Instagramie, Agnieszka dzieli się swoją pasją do aranżacji wnętrz, odnawiania starych mebli oraz tworzenia własnoręcznych dekoracji."
    },
    {
        key: "2",
        at: "Genowefa",
        test: "A0-metrowego mieszkania w Tarnowie, w którym mieszka wraz z mężem i dwójką dzieci. Na profilu @na_czwartym na Instagramie, Agnieszka dzieli się swoją pasją do aranżacji wnętrz, odnawiania starych mebli oraz tworzenia własnoręcznych dekoracji."
    },
    {
        key: "3",
        at: "Jozef",
        test: "A0-metrowego mieszkania w Tarnowie, w którym mieszka wraz z mężem i dwójką dzieci. Na profilu @na_czwartym na Instagramie, Agnieszka dzieli się swoją pasją do aranżacji wnętrz, odnawiania starych mebli oraz tworzenia własnoręcznych dekoracji."
    },
    {
        key: "4",
        at: "Hermenegilda",
        test: "A0-metrowego mieszkania w Tarnowie, w którym mieszka wraz z mężem i dwójką dzieci. Na profilu @na_czwartym na Instagramie, Agnieszka dzieli się swoją pasją do aranżacji wnętrz, odnawiania starych mebli oraz tworzenia własnoręcznych dekoracji."
    }

]
 {/* in case map function needed
                {testis.map(({at, test}) => {
                    return <div className="testimonial">
                        <h1>{at}</h1>
                        <q><em>{test}</em></q>
                    </div>
                })} */