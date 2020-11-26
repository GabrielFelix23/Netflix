import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import {
    Container, 
    ContainerLogin, 
    ContainerHelp, 
    ContainerCheck, 
    ContainerFacebook, 
    ContainerFooter,
    Link,
    Marking
} from './style'

function Login(){
    return(
        <Container>
            <ContainerLogin>
                <h1>Entrar</h1>
                <form>
                    <input type="email" placeholder="Email ou número de telefone"/>
                    <input type="password" placeholder="Senha"/>
                    <button type="submit">Entrar</button>
                </form>

                <ContainerHelp>
                    <ContainerCheck>
                        <input type="checkbox"/>
                        <span>Lembre-se de mim</span>
                    </ContainerCheck>
                    <span>Precisa de ajuda?</span>
                </ContainerHelp>

                <ContainerFacebook>
                    <FaFacebookSquare/>
                    <span>Conectar com Facebook</span>
                </ContainerFacebook>

                <ContainerFooter>
                    <p>Novo por aqui? <Marking>Assine agora.</Marking></p>
                    <p>Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô.<Link>Saiba mais.</Link></p>
                    
                </ContainerFooter>
            </ContainerLogin>
        </Container>
    )
}

export default Login