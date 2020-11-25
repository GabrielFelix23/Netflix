import React from 'react'
import {Container, ContainerText, ContainerForm} from './style'

function Home(){
    return(
        <Container>
            <ContainerText>
                <h1>100% de diversão garantida.</h1>
                <h1>Ou devolvemos o seu dinheiro.</h1>
                <p>Você vai adorar a Netflix! Mas, se não gostar, cancele nos primeiros 21 dias para receber o reembolso.</p>
            </ContainerText> 
            
            <ContainerForm>
                <p>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</p>
                <form>
                    <input type="email" placeholder="Email"/>
                    <button>VAMOS LÁ</button>
                </form>
                <p>Esta oferta está disponível somente para não assinantes.</p>
            </ContainerForm>
           
        </Container>
    )
}

export default Home